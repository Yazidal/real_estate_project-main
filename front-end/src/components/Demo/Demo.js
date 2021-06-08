import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";



// @material-ui/icons

import FiberNewIcon from '@material-ui/icons/FiberNew';
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";


import studio1 from "assets/img/examples/studio-1.jpg";

import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import {GQL_URL,API_URL}from'config.js';

import Card from "components/Card/Card.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const style = {
  ...styles,...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(style);

export default function Demo() {
  const classes = useStyles();
  const [vente, setVente] = useState([]);

  const [location, setLocation] = useState([]);

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  let graphqlQuery="";
  useEffect(() => {
    // extraction data villas
    graphqlQuery= {
        query:`query  {
            villas(sort:"created_at:desc",limit:1,where:{type_transaction:"vente"})
            {
                id
                type_transaction
                type_bien                
                nbr_chambre
                prix
                surface
                ville
                titre
                images{url}
            }
            }`
    };
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
            setVente(oldArray => [...oldArray, res.data.villas]);
        })
        .catch(err => {
            console.log(err);
        });

        
    graphqlQuery= {
        query:`query  {
            villas(sort:"created_at:desc",limit:1,where:{type_transaction:"location"})
            {
                id
                type_transaction
                type_bien                
                nbr_chambre
                prix
                surface
                ville
                titre
                images{url}
            }
            }`
    };
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
           setLocation(oldArray => [...oldArray, res.data.villas]);
        })
        .catch(err => {
            console.log(err);
        });
    // extraction data appartements
    graphqlQuery= {
        query:`query  {
            appartements(sort:"created_at:desc",limit:1,where:{type_transaction:"vente"})
            {
                id
                type_transaction
                type_bien                
                nbr_chambre
                prix
                surface
                ville
                titre
                images{url}
            }
            }`
    };
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
            setVente(oldArray => [...oldArray, res.data.appartements]);
        })
        .catch(err => {
            console.log(err);
        });

        
    graphqlQuery= {
        query:`query  {
            appartements(sort:"created_at:desc",limit:1,where:{type_transaction:"location"})
            {
                id
                type_transaction
                type_bien                
                nbr_chambre
                prix
                surface
                ville
                titre
                images{url}
            }
            }`
    };
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
            setLocation(oldArray => [...oldArray, res.data.appartements]);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    console.log("location fin",location);
    console.log("vente fin ",vente);
  return (
      <div className={classes.section}>
       <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              <h2>Nos dernieres offres</h2>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Vente",
                      tabIcon:FiberNewIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            {
                            vente[0] ? <img
                            alt="..."
                            src={API_URL+vente[0][0].images[0].url}
                            className={navImageClasses}
                          />: null
                            }
                           
                           {
                            vente[1] ? <img
                            alt="..."
                            src={API_URL+vente[1][0].images[0].url}
                            className={navImageClasses}
                          />: null
                            }
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Location",
                      tabIcon: FiberNewIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                          {
                            location[0] ?     
                            <Card>
                            <img className={classes.imgCard} src={API_URL+location[0][0].images[0].url} alt="Card-img" />
                            <div className={classes.imgCardOverlay}>
                              <h4 className={classes.cardTitle}>{location[0][0].titre}</h4>
                              <p>Surface: {location[0][0].surface} m²</p>
                              <p>Chambre(s): {location[0][0].nbr_chambre}</p>
                              <h5>Prix: {location[0][0].prix}</h5>
                            </div>
                          </Card>
                          : null
                            }
                            {
                            location[1] ? <img
                            alt="..."
                            src={API_URL+location[1][0].images[0].url}
                            className={navImageClasses}
                          />: null
                            }
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
     

  );
}
