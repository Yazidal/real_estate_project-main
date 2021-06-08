import React, { useState } from 'react';
import ListingForm from '../components/Searchbar/ListingForm';
import Listings from '../components/Listings';
import Pagination from '../components/Pagination';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import Demo from "components/Demo/Demo.js";
import Infos from "components/Demo/Infos.js";



import styles from "assets/jss/material-kit-react/views/components.js";


const useStyles = makeStyles(styles);

const Home = () => {
    const [listings, setListings] = useState([]);
    const [resultat, setRes] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(9);
    const [active, setActive] = useState(1);
    

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing);
    console.log("resultat",resultat);
    
    console.log("listings:",listings);
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

    const styleObj = {
        fontSize: 50,
 
    }

      const classes = useStyles();

      const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
        <div>
          <Parallax image={require("assets/img/bgmedina.jpg").default}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>Material Kit React.</h1>
                    <h3 className={classes.subtitle}>
                      A Badass Material-UI Kit based on Material Design.
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>

                  <div className={classNames(classes.main, classes.mainRaised)}>
                    <ListingForm setListings={setListings} setRes={setRes}/>

                      { 
                      resultat == 2
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
                      : resultat == 3?
                          <div className='home_listings'>
                          Aucun resultat trouver pour cette recherche 
                          </div>
                          :null
                      }
                      
                    <Demo/>
                    <Infos />

                  </div>
          </div>
  
    );
};

export default Home;
