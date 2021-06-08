import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Listings from '../components/Listings';
import Pagination from '../components/Pagination';
import {GQL_URL}from'../config.js';

const Appartements = (props) => {
    const [listings, setListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(9);
    const [active, setActive] = useState(1);

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing);
    const t =props.match.params.type_transaction;
    console.log("t:",t);


    const graphqlQuery= {
        query:`query appartements($type_transaction:String!)
        {
        appartements(sort:"created_at:desc", where:{type_transaction:$type_transaction})
        {
            id
            created_at
            updated_at
            type_transaction
            nbr_chambre
            description
            prix
            surface
            disponible
            type_bien
            ville
            titre
            images{url}
        }
        }`,
        variables:{

            type_transaction: t,

        }
    };

    const visitPage = (page) => {
        setCurrentPage(page);
        setActive(page);
    };

    const previous_number = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage-1);
            setActive(currentPage-1);
        }
    };

    const next_number = () => {
        if (currentPage !== Math.ceil(listings.length/9)) {
            setCurrentPage(currentPage+1);
            setActive(currentPage+1);
        }
    };
    

    useEffect(()=>{
        window.scrollTo(0, 0);

         fetch(GQL_URL,{
             method:'POST',
             headers:{
                 'Content-Type':'application/json'
             },
             body: JSON.stringify(graphqlQuery)
         })
         .then(res => {
             return res.json()
         })
         .then(res => {
             return res.data;
             
         }).then(res=>{
           console.log("resu",res);
            setListings(res["appartements"]);
             window.scrollTo(0, 0);
         })
         .catch(err => {
            
             console.log(err);
             window.scrollTo(0, 0);
         });

        },[]);



    return (
        <main className='home'>
            <Helmet>
                <title>Realest Estate - Appartements</title>
                <meta
                    name='description'
                    content='Appartemnt page'
                />
            </Helmet>

            <section className='home_listings'>
                <Listings listings={currentListings} />
            </section>
            <section className='home__pagination'>
                <div className='row'>
                    {
                        listings.length !== 0 ? (
                            <Pagination
                                itemsPerPage={listingsPerPage}
                                count={listings.length}
                                visitPage={visitPage}
                                previous={previous_number}
                                next={next_number}
                                active={active}
                                setActive={setActive}
                            />
                        ) : null
                    }
                </div>
            </section>
        </main>
    );


};

export default Appartements;
