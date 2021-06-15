import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {API_URL}from'../config.js';



const Ccard = (props) => {
    const useStyles =  makeStyles((theme) => ({
        root: {
        maxWidth: 345,
        },
        media: {
        height: 240,
        },
    }));
    const classes = useStyles();

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
  

    

    console.log("card props:",props);
  
    return (

      <a href={`/listings/${props.type_bien}/${props.id}`} >
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.images.length !==0 ? API_URL+props.images[0].url:null}
            title={props.titre}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.titre}
            </Typography>
            <Grid container spacing={1}>
                <Grid item >
                     <Typography variant="subtitle1">Prix</Typography>
                </Grid>
                <Grid item >
                     <Typography variant="subtitle1">{ props.prix !==0?numberWithCommas(props.prix)+" €":"Sur Demande"}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item >
                     <Typography variant="subtitle1">Type de Bien</Typography>
                </Grid>
                <Grid item >
                     <Typography variant="subtitle1">{props.type_bien}/{props.type_transaction}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item >
                     <Typography variant="subtitle1">Surface</Typography>
                </Grid>
                <Grid item >
                     <Typography variant="subtitle1">{props.surface} m²</Typography>
                </Grid>
            </Grid>
           
            <Typography variant="body2" color="textSecondary" component="p">
            {props.description.substring(0,100)}...
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
      </a>

        // <div className='card'>
        //     <h3 className='card__title'>{props.titre}</h3>
        //     <div className='card__header'>
        //         <img className='card__header__photo' src={API_URL+props.images[0].url} alt={props.type_bien} />
        //     </div>
        //     <p className='card__location'>{props.ville}</p>
        //     <div className='row'>
        //         <div className='col-2-of-3'>
        //             <p className='card__info'>Prix: {numberWithCommas(props.prix)} €</p>
        //             <p className='card__info'>Chambre(s): {props.nbr_chambre}</p>
        //         </div>
        //         <div className='col-1-of-3'>
        //             <p className='card__saletype'>{props.type_transaction}</p>
        //             <p className='card__hometype'>{props.type_bien}</p>
        //             <p className='card__sqft'>Surface: {props.surface}m²</p>
        //         </div>
        //     </div>
        //     <div className='row'>
        //             <p className='card__desc'>{desc.substring(0,100)}...</p>
        //     </div>
            
        //     <Link className='card__link' to={`/listings/${props.type_bien}/${props.id}`}>View Listing</Link>
        // </div>
    );
};



export default Ccard;
