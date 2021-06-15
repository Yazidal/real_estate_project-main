import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {API_URL}from'../config.js';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormGroup from '@material-ui/core/FormGroup';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import SectionCarousel from "components/carousel.js";
import ContactSection from "components/ContactSection.js";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles2 = makeStyles((theme) => ({
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  }));

const useStyles = makeStyles(styles);

const ListingDetail = (props) => {
    const classes = useStyles();
    const classes2 = useStyles2();

    const [listing, setListing] = useState({});
    // const [realtor, setRealtor] = useState({});
    const [price, setPrice] = useState(0);
    const [presarr, setPres] = useState([]);
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    useEffect(() => {
        const slug = props.match.params.id;
        
        const bien = props.match.params.type_bien;
            const config = {
                headers: {
                    'Content-Type':'application/json'

                }
            };

            axios.get(`${API_URL}/${bien}/${slug}`, config)
            .then(res => {
                setListing(res.data);
                setPrice(numberWithCommas(res.data.prix));
                setPres(res.data.prestations.split(','));
            })
            .catch(err => {
                console.log(err);
            });
        }, [props.match.params.id,props.match.params.type_bien]);
        
    // useEffect(() => {
    //     const id = listing.realtor;

    //     const config = {
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         }
    //     };

    //     if (id) {
    //         axios.get(`${process.env.REACT_APP_API_URL}/api/realtors/${id}`, config)
    //         .then(res => {
    //             setRealtor(res.data);
    //         })
    //         .catch(err => {

    //         });
    //     }
    // }, [listing.realtor]);
    const displayPres = () => {
        let result = [];
            
         for (let i = 0; i < presarr.length; i++) {
            result.push(

                     <Grid item  xs={4} >    
                        {/* <FormGroup row> */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked
                                        name={presarr[i]}
                                        color="primary"
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    />
                                
                                }
                                label={presarr[i]}
                            />
                        {/* </FormGroup> */}
                    </Grid>

            );
        }

        return result; 
                      
        
    };

    return (

<div>



        <Parallax
        small
        filter
        image={require("assets/img/bgkech.jpg").default}
      />
      
      <div className={classNames(classes.main, classes.mainRaised)}>
         
        
        {listing.images ? <div>
            <SectionCarousel listing={listing}/>
            <div className={classes.container}>
              
              <h1 className={classes2.title} style={{textAlign:"center"}}> {listing.titre}</h1>
                <GridContainer>
                     <GridItem xs={12} sm={12} md={3}> 
                     <h2 style={{textAlign:"center"}}>Résumé</h2>
                        <GridContainer>
                            <GridItem xs={6} >
                                <h4 className={classes2.title} > Prix</h4>
                            </GridItem>
                            <GridItem xs={6} >
                                <h4>{listing.prix}€</h4> 
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={6} >
                                <h4 className={classes2.title} > Chambre(s)</h4>
                            </GridItem>
                            <GridItem xs={6} >
                            <h4>{listing.nbr_chambre}</h4> 
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={6} >
                                <h4 className={classes2.title} > Surface</h4>
                            </GridItem>
                            <GridItem xs={6} >
                            <h4>{listing.surface}m²</h4>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={6} >
                                <h4 className={classes2.title} > type de transaction</h4>
                            </GridItem>
                            <GridItem xs={6} >
                            <h4>{listing.type_transaction}/{listing.type_bien}</h4>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={6} >
                                <h4 className={classes2.title} > Ville</h4>
                            </GridItem>
                            <GridItem xs={6} >
                            <h4>{listing.ville}</h4>
                            </GridItem>
                        </GridContainer>
    
                    </GridItem>
                    <GridItem xs={12} sm={12} md={9} >
                        <h2 style={{textAlign:"center"}}>Description</h2>
                        <div className={classes.description}>
                            {listing.description}
                        </div>
                    </GridItem>
                </GridContainer>
                    
                <GridItem xs={12}>
                <h2 style={{textAlign:"center"}}>Prestations</h2>
                        <GridContainer >
                            {displayPres()}
                        </GridContainer>      
                </GridItem>
                <ContactSection type_bien={listing.type_bien} type_transaction={listing.type_transaction} titre={listing.titre} />
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


        // <div className={classNames(classes.main, classes.mainRaised)}>
        //     <div className={classes.container}>
        //         <div className={classes.section}>
        //             <GridContainer>
        //                 {/* <GridItem xs={12} sm={12}>
        //                     {listing.images ? <img className='listingdetail__display__image' src={API_URL+listing.images[0].url} alt={listing.titre} />:""}
        //                 </GridItem> */}
        //                 <GridItem xs={12} sm={6}>
        //                     <div className="overview">
        //                     <Typography gutterBottom variant="h4" component="h2">
        //                     {listing.titre}
        //                     </Typography>
        //                     <GridContainer spacing={1}>
        //                         <GridItem >
        //                             <Typography variant="subtitle1">Prix</Typography>
        //                         </GridItem>
        //                         <GridItem >
        //                             <Typography variant="subtitle1">{price} €</Typography>
        //                         </GridItem>
        //                     </GridContainer>
        //                     <GridContainer spacing={1}>
        //                         <GridItem >
        //                             <Typography variant="subtitle1">Type de Bien</Typography>
        //                         </GridItem>
        //                         <GridItem >
        //                             <Typography variant="subtitle1">{listing.type_bien}/{listing.type_transaction}</Typography>
        //                         </GridItem>
        //                     </GridContainer>
        //                     <GridContainer spacing={1}>
        //                         <GridItem >
        //                             <Typography variant="subtitle1">Surface</Typography>
        //                         </GridItem>
        //                         <GridItem >
        //                             <Typography variant="subtitle1">{listing.surface} m²</Typography>
        //                         </GridItem>
        //                     </GridContainer>
        //                     <GridContainer spacing={1}>
        //                         <GridItem >
        //                             <Typography variant="subtitle1">Surface</Typography>
        //                         </GridItem>
        //                         <GridItem >
        //                             <Typography variant="subtitle1">{listing.surface} m²</Typography>
        //                         </GridItem>
        //                     </GridContainer>
                                
        //                     </div>
        //                 </GridItem>
        //                 <GridItem xs={12}>
        //                     <Typography gutterBottom variant="h5" component="h2">Description</Typography>
        //                 {listing.description}
        //                 </GridItem>
        //                 <GridItem xs={12}>
        //                 <Typography gutterBottom variant="h5" component="h2">Préstations</Typography>
        //                     <Grid container spacing={1}>
        //                         {displayPres()}
        //                     </Grid>      
        //                 </GridItem>
        //                 <GridItem xs={12}>
        //                 <Typography gutterBottom variant="h5" component="h2">Contacter nous</Typography>                    
        //             </GridItem>
        //         </GridContainer>
            
            
        // </div>
        // </div>
        // </div>


        // <div className='listingdetail'>
        //     <Helmet>
        //         <title>Realest Estate - Listing | {`${listing.titre}`}</title>
        //         <meta
        //             name='description'
        //             content='Listing detail'
        //         />
        //     </Helmet>
        //     <div className='listingdetail__header'>
        //         <h1 className='listingdetail__title'>{listing.titre}</h1>
        //         <p className='listingdetail__location'>{listing.ville}</p>
        //     </div>
        //     <div className='row'>
        //         <div className='listingdetail__breadcrumb'>
        //             <Link className='listingdetail__breadcrumb__link' to='/'>Home</Link> / {listing.titre}
        //         </div>
        //     </div>
        //     <div className='row'>
        //         <div className='col-3-of-4'>
        //             <div className='listingdetail__display'>
        //                {listing.images ? <img className='listingdetail__display__image' src={API_URL+listing.images[0].url} alt={listing.titre} />:""}
        //             </div>
        //         </div>
        //         {/* <div className='col-1-of-4'>
        //             <div className='listingdetail__display'>
        //                 <img className='listingdetail__display__image' src={realtor.photo} alt='' />
        //             </div>
        //             <h3 className='listingdetail__realtor'>{realtor.name}</h3>
        //             <p className='listingdetail__contact'>{realtor.phone}</p>
        //             <p className='listingdetail__contact'>{realtor.email}</p>
        //             <p className='listingdetail__about'>{realtor.description}</p>
        //         </div> */}
        //     </div>
        //     <div className='row'>
        //         <div className='col-1-of-2'>
        //             <ul className='listingdetail__list'>
        //                 <li className='listingdetail__list__item'>Type de bien: {listing.type_bien}</li>
        //                 <li className='listingdetail__list__item'>Prix: {price}€</li>
        //                 <li className='listingdetail__list__item'>Chambre(s): {listing.nb_chambre}</li>
        //                 <li className='listingdetail__list__item'>Surface: {listing.surface}</li>
        //             </ul>
        //         </div>
        //         <div className='col-1-of-2'>
        //             <ul className='listingdetail__list'>
        //                 <li className='listingdetail__list__item'>Type de Transaction: {listing.type_transaction}</li>
        //                 {/* <li className='listingdetail__list__item'>Address: {listing.address}</li> */}
        //                 <li className='listingdetail__list__item'>Ville: {listing.ville}</li>
        //                 {/* <li className='listingdetail__list__item'>State: {listing.state}</li>
        //                 <li className='listingdetail__list__item'>Zipcode: {listing.zipcode}</li> */}
        //             </ul>
        //         </div>
        //     </div>
        //     <div className='row'>
        //         <p className='listingdetail__description'>{listing.description}</p>
        //     </div>
        //     {listing.images ?displayInteriorImages():""}
        // </div>
    );
};

export default ListingDetail;
