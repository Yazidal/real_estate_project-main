import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import FiberNewIcon from '@material-ui/icons/FiberNew';
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import Ccard from 'components/Card.js';



import {GQL_URL,API_URL}from'config.js';

import Grid from '@material-ui/core/Grid';


import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const style = {
  ...styles,...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(style);
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};



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
                description
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
                description
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
                description        
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
                description        
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
      
          // extraction data riads
    graphqlQuery= {
      query:`query  {
          riads(sort:"created_at:desc",limit:1,where:{type_transaction:"vente"})
          {
              id
              type_transaction
              type_bien                
              nbr_chambre
              description
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
          setVente(oldArray => [...oldArray, res.data.riads]);
      })
      .catch(err => {
          console.log(err);
      });

      
  graphqlQuery= {
      query:`query  {
          riads(sort:"created_at:desc",limit:1,where:{type_transaction:"location"})
          {
              id
              type_transaction
              type_bien                
              nbr_chambre
              description
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
          setLocation(oldArray => [...oldArray, res.data.riads]);
      })
      .catch(err => {
          console.log(err);
      });
    
        // extraction data commerces
    graphqlQuery= {
      query:`query  {
          commerces(sort:"created_at:desc",limit:1,where:{type_transaction:"vente"})
          {
              id
              type_transaction
              type_bien                
              description
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
          setVente(oldArray => [...oldArray, res.data.commerces]);
      })
      .catch(err => {
          console.log(err);
      });

      
  graphqlQuery= {
      query:`query  {
          commerces(sort:"created_at:desc",limit:1,where:{type_transaction:"location"})
          {
              id
              type_transaction
              type_bien                
              description
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
          setLocation(oldArray => [...oldArray, res.data.commerces]);
      })
      .catch(err => {
          console.log(err);
      });
    
          // extraction data terrains
    graphqlQuery= {
      query:`query  {
          terrains(sort:"created_at:desc",limit:1,where:{type_transaction:"vente"})
          {
              id
              type_transaction
              type_bien                
              description
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
          setVente(oldArray => [...oldArray, res.data.terrains]);
      })
      .catch(err => {
          console.log(err);
      });

      
  graphqlQuery= {
      query:`query  {
          terrains(sort:"created_at:desc",limit:1,where:{type_transaction:"location"})
          {
              id
              type_transaction
              type_bien                
              description
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
          setLocation(oldArray => [...oldArray, res.data.terrains]);
      })
      .catch(err => {
          console.log(err);
      });
    




    }, []);
    console.log("location fin",location);
    console.log("vente fin ",vente);

    
    function fetch_data(){
      if (vente.length !==0 && location.length !==0){
        if(vente[1] && location[1]){
          return (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} className={classes.navWrapper}>
                    <h2>Nos dernieres offres</h2>
                    <NavPills
                        alignCenter
                        color="primary"
                        tabs={[
                          {
                            tabButton: "Vente",
                            tabIcon:FiberNewIcon,
                            tabContent: (
                             
                          
                              <GridContainer spacing={2}>
                              {vente.map((tile) => (
                                <GridItem xs={12} sm={6} md={4}>
                                  { tile.length !==0 ? 
                                  <Ccard
                                    id={tile[0].id}
                                    type_bien={tile[0].type_bien}
                                    disponible={tile[0].disponible}
                                    description={tile[0].description}
                                    prix={tile[0].prix}
                                    surface={tile[0].surface}
                                    type_transaction={tile[0].type_transaction}
                                    nbr_chambre={tile[0].nbr_chambre}
                                    titre={tile[0].titre}
                                    ville={tile[0].ville}
                                    images={tile[0].images}
                                  />
                                  :null}
                                </GridItem>
                              ))}
                              </GridContainer>
                            
                            ),
                          },
                          {
                            tabButton: "Location",
                            tabIcon: FiberNewIcon,
                            tabContent: (
                              <GridContainer spacing={2}>
                              {location.map((tile) => (
                                <GridItem xs={12} sm={6} md={4}>
                                  { tile.length !==0 ? 
                                   <Ccard
                                   id={tile[0].id}
                                   type_bien={tile[0].type_bien}
                                   disponible={tile[0].disponible}
                                   description={tile[0].description}
                                   prix={tile[0].prix}
                                   surface={tile[0].surface}
                                   type_transaction={tile[0].type_transaction}
                                   nbr_chambre={tile[0].nbr_chambre}
                                   titre={tile[0].titre}
                                   ville={tile[0].ville}
                                   images={tile[0].images}
                                 />
                                  :null}
                                 
                                </GridItem>
                              ))}
                              </GridContainer>
                            )
                          },
                        ]}
                      />
                    </GridItem>
                  </GridContainer>
               
      
        );
        }
      }
    };
    
  return (
        <div className={classes.section}>
            <div className={classes.container}>
              {fetch_data()}         
           </div> 
        </div>
     
  );
}


// return (
//   <GridContainer justify="center">
//     <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
//     <h2>Nos dernieres offres</h2>
//       <NavPills
//         alignCenter
//         color="primary"
//         tabs={[
//           {
//             tabButton: "Vente",
//             tabIcon:FiberNewIcon,
//             tabContent: (
//               <GridContainer justify="center">
//                 <GridItem xs={6} sm={6} md={6}>
//                    <img
//                   alt="..."
//                   src={API_URL+vente[0][0].images[0].url}
//                   className={navImageClasses}
//                 />
//                  <img
//                   alt="..."
//                   src={API_URL+vente[1][0].images[0].url}
//                   className={navImageClasses}
//                 />
//                   <img
//                     alt="..."
//                     src={work3}
//                     className={navImageClasses}
//                   />
//                 </GridItem>
//                 <GridItem xs={6} sm={6} md={6}>
//                   <img
//                     alt="..."
//                     src={work4}
//                     className={navImageClasses}
//                   />
//                   <img
//                     alt="..."
//                     src={work5}
//                     className={navImageClasses}
//                   />
//                 </GridItem>
//               </GridContainer>
//             ),
//           },
//           {
//             tabButton: "Location",
//             tabIcon: FiberNewIcon,
//             tabContent: (
//               <GridContainer justify="center">
//                 <GridItem xs={12} sm={12} md={6}>
                   
//                   <Card>
//                   <img className={classes.imgCard} src={API_URL+location[0][0].images[0].url} alt="Card-img" />
//                   <div className={classes.imgCardOverlay}>
//                     <h4 className={classes.cardTitle}>{location[0][0].titre}</h4>
//                     <p>Surface: {location[0][0].surface} m²</p>
//                     <p>Chambre(s): {location[0][0].nbr_chambre}</p>
//                     <h5>Prix: {location[0][0].prix}</h5>
//                   </div>
//                 </Card>
//                 <img
//                   alt="..."
//                   src={API_URL+location[1][0].images[0].url}
//                   className={navImageClasses}
//                 />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={6}>
//                   <img
//                     alt="..."
//                     src={work2}
//                     className={navImageClasses}
//                   />
//                   <img
//                     alt="..."
//                     src={work1}
//                     className={navImageClasses}
//                   />
//                   <img
//                     alt="..."
//                     src={studio1}
//                     className={navImageClasses}
//                   />
//                 </GridItem>
//               </GridContainer>
//             ),
//           },
//         ]}
//       />
//     </GridItem>
//   </GridContainer>


// );