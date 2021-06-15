import React from 'react';
import Ccard from './Card';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import { makeStyles } from '@material-ui/core/styles';
import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

const Llistings = ({ listings }) => {
    const classes = useStyles();

    const getListings = () => {
        let listingsOnPage = [];
        let result = [];
        console.log("card data" ,listings);
        listings.map(listing => {
            return listingsOnPage.push(
                <Ccard
                    id={listing.id}
                    type_bien={listing.type_bien}
                    disponible={listing.disponible}
                    description={listing.description}
                    prix={listing.prix}
                    surface={listing.surface}
                    type_transaction={listing.type_transaction}
                    nbr_chambre={listing.nbr_chambre}
                    titre={listing.titre}
                    ville={listing.ville}
                    images={listing.images}
                />
            );
        });

        for (let i = 0; i < listings.length; i += 3) {
            result.push(
                <GridContainer justify="center" spacing={2} >
            
                    <GridItem xs={12} sm={6} md={4}>
                    {listingsOnPage[i]}
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                    {listingsOnPage[i+1] ? listingsOnPage[i+1] : null}
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                    {listingsOnPage[i+2] ? listingsOnPage[i+2] : null}
                    </GridItem>
               
                </GridContainer>
            );
        }

        return result;
    };

    return (
        
        <div className={classes.container}>
            <div className={classes.section}>
                <h3>Résultat de votre recherche:</h3>
                    {getListings()}
            </div>
        </div>
        
    );
}

export default Llistings;
