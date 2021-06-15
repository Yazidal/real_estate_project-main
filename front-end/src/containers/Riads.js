import React, { useState, useEffect } from 'react';
import Listings from '../components/Listings';
import Pagination from 'components/Pagination.js';
import {GQL_URL}from'../config.js';
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles(styles);


const Riads = (props) => {
    const [listings, setListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(9);
    const [active, setActive] = useState(1);

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing);
    const t =props.match.params.type_transaction;
    const r =props.match.params.renover;
    console.log("t:",t);
    console.log("r:",r);
   
    const classes = useStyles();


    const graphqlQuery= {
        query:`query riads($type_transaction:String!,$renover:Boolean!)
        {
        riads(sort:"created_at:desc", where:{type_transaction:$type_transaction,renover:$renover})
        {
            id
            created_at
            updated_at
            type_transaction
            description
            prix
            surface
            disponible
            type_bien
            ville
            titre
            renover
            images{url}
        }
        }`,
        variables:{

            type_transaction: t,
            renover : r === "true"?true:false

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
            setListings(res["riads"]);
             window.scrollTo(0, 0);
         })
         .catch(err => {
            
             console.log(err);
             window.scrollTo(0, 0);
         });

        },[]);



        return (

            <div>
                <Parallax
                small
                filter
                image={require("assets/img/bgkech.jpg").default}
              />
        
                <div className={classNames(classes.main, classes.mainRaised)}>
                { 
                              listings.length !==0
                              ?
                              <div>
                                  <Listings listings={currentListings} />
        
                                  <div>
                                      <div className='row' >
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
                                  </div>
                              </div>
                              :
                              <div className={classes.container}>
                                <div className={classes.section}>
                                    <h3>En attente...</h3>
                                    <Skeleton variant="rect" width={210} height={118} />
                                    
                                    <Skeleton width="20%"  />
                                    <Skeleton width="40%" />
                                    <Skeleton width="40%" />
                                </div>
                              </div>
                              }
                </div>
            </div>
        
        
            );


};

export default Riads;
