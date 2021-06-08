import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from "components/CustomButtons/Button.js";
import {GQL_URL}from'../../config.js';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";
import CardHeader from "components/Card/CardHeader.js";

const useStyles3 = makeStyles((theme) => ({
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
  }
}));

const useStyles2 = makeStyles(styles);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  }
}));

const ListingForm = (props) => {

    const [formData, setFormData] = useState({
        type_transaction: '',
        budget: '',
        type_bien: '',
        Marrakech_Regions: ''
    });

    const { type_transaction, budget, Marrakech_Regions, type_bien } = formData;
    const [loading, setLoading] = useState(false);

 
 

    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();

    const provinceData = ['location', 'vente'];
    const cityData  = {
      location: ['De 0 à 1000', 'De 1000 à 2000', 'Plus de 2000'],
      vente: ['De 0 à 200 000', 'De 200 000 à 500 000', 'De 500 000 à 1M','Plus de 1M'],
    };
    const [cities, setCities] = React.useState(cityData[provinceData[0]]);
    const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);
  
    const handleProvinceChange = value => {
      console.log("value: ",value);
      setCities(cityData[value]);
      setSecondCity(cityData[value][0]);
    };
  
    const onSecondCityChange = value => {
      setSecondCity(value);
    };
  
    const onChange = e => {
      if(e.target.name=="type_transaction"){
        console.log(e.target.value);
        handleProvinceChange(e.target.value);
      }
      else if(e.target.name=="budget"){
        onSecondCityChange();
      }
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    }

    const  onSubmit =  e => {
        console.log(e.target[3].value);
        e.preventDefault();
        const t=e.target[2].value;
        console.log(t);
        let graphqlQuery="";
        setLoading(true);

       

            if(e.target[3].value=="De 0 à 200 000") {
                console.log(e.target[1].value);
                console.log(e.target[0].value);
                 graphqlQuery= {
                    query:`query `+t+`($type_transaction:String!,$ville:String,$prix_gte:Int!,$prix_lte:Int!)
                    {
                    `+t+`(sort:"created_at:desc", where:{ville:$ville, type_transaction:$type_transaction, prix_gte:$prix_gte, prix_lte:$prix_lte})
                    {
                        id
                        created_at
                        updated_at
                        type_transaction
                        nbr_chambre
                        description
                        prix
                        surface
                        type_bien
                        disponible
                        ville
                        titre
                        
                        images{url}
                    }
                    }`,
                    variables:{
    
                        type_transaction: e.target[1].value,
                        ville: e.target[0].value,
                        prix_gte:0,
                        prix_lte:200000
    
                    }
                };
            }else if(e.target[3].value=="De 200 000 à 500 000"){

                console.log("De 200 000 à 500 000");

                 graphqlQuery= {
                    query:`query `+t+`($type_transaction:String!,$ville:String,$prix_gte:Int!,$prix_lte:Int!)
                    {
                    `+t+`(sort:"created_at:desc", where:{ville:$ville, type_transaction:$type_transaction, prix_gte:$prix_gte, prix_lte:$prix_lte})
                    {
                        id
                        created_at
                        updated_at
                        type_transaction
                        nbr_chambre
                        description
                        prix
                        surface
                        type_bien
                        
                        disponible
                        ville
                        titre
                        images{url}
                    }
                    }`,
                    variables:{
    
                        type_transaction: e.target[1].value,
                        ville: e.target[0].value,
                        prix_gte:200000,
                        prix_lte:500000
    
                    }
                };

            }else if(e.target[3].value=="De 500 000 à 1M"){
                console.log("51");

                graphqlQuery= {
                    query:`query `+t+`($type_transaction:String!,$ville:String,$prix_gte:Int!,$prix_lte:Int!)
                    {
                    `+t+`(sort:"created_at:desc", where:{ville:$ville, type_transaction:$type_transaction, prix_gte:$prix_gte, prix_lte:$prix_lte})
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
    
                        type_transaction: e.target[1].value,
                        ville: e.target[0].value,
                        prix_gte:500000,
                        prix_lte:1000000
    
                    }
                };

            }else if(e.target[3].value=="Plus de 1M"){
                console.log("+1");

                graphqlQuery= {
                    query:`query `+t+`($type_transaction:String!,$ville:String,$prix_gte:Int!)
                    {
                    `+t+`(sort:"created_at:desc", where:{ville:$ville, type_transaction:$type_transaction, prix_gte:$prix_gte})
                    {
                        id
                        created_at
                        updated_at
                        type_transaction
                        type_bien
                        description
                        
                        nbr_chambre
                        prix
                        surface
                        disponible
                        ville
                        titre
                        images{url}
                    }
                    }`,
                    variables:{
    
                        type_transaction: e.target[1].value,
                        ville: e.target[0].value,
                        prix_gte:1000000
                       
    
                    }
                };
            
            }else if(e.target[3].value=="De 0 à 1000"){
              console.log("de 0 à 1000");

              graphqlQuery= {
                  query:`query `+t+`($type_transaction:String!,$ville:String,$prix_gte:Int!,$prix_lte:Int!)
                  {
                  `+t+`(sort:"created_at:desc", where:{ville:$ville, type_transaction:$type_transaction, prix_gte:$prix_gte, prix_lte:$prix_lte})
                  {
                      id
                      created_at
                      updated_at
                      type_transaction
                      type_bien
                      description
                      nbr_chambre
                      prix
                      surface
                      disponible
                      
                      ville
                      titre
                      images{url}
                  }
                  }`,
                  variables:{
  
                      type_transaction: e.target[1].value,
                      ville: e.target[0].value,
                      prix_gte:0,
                      prix_lte:1000
                  }
              };
          }else if(e.target[3].value=="De 1000 à 2000"){
            console.log("de 1000 à 2000");

            graphqlQuery= {
                query:`query `+t+`($type_transaction:String!,$ville:String,$prix_gte:Int!,$prix_lte:Int!)
                {
                `+t+`(sort:"created_at:desc", where:{ville:$ville, type_transaction:$type_transaction, prix_gte:$prix_gte, prix_lte:$prix_lte})
                {
                    id
                    created_at
                    updated_at
                    type_transaction
                    type_bien
                    description
                    
                    nbr_chambre
                    prix
                    surface
                    disponible
                    ville
                    titre
                    images{url}
                }
                }`,
                variables:{

                    type_transaction: e.target[1].value,
                    ville: e.target[0].value,
                    prix_gte:1000,
                    prix_lte:2000
                }
            };
        }else if(e.target[3].value=="Plus de 2000"){
          console.log("+2");

          graphqlQuery= {
              query:`query `+t+`($type_transaction:String!,$ville:String,$prix_gte:Int!)
              {
              `+t+`(sort:"created_at:desc", where:{ville:$ville, type_transaction:$type_transaction, prix_gte:$prix_gte})
              {
                  id
                  created_at
                  updated_at
                  type_transaction
                  type_bien
                  
                  description
                  nbr_chambre
                  prix
                  surface
                  disponible
                  ville
                  titre
                  images{url}
              }
              }`,
              variables:{

                  type_transaction: e.target[1].value,
                  ville: e.target[0].value,
                  prix_gte:2000
              }
          };
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
          
            return res.data;
            
        }).then(res=>{
            setLoading(false);
             console.log("res:",res[t]);
            // 
            if(res[t].length !==0)
            {
              props.setRes(2);
              props.setListings(res[t]);
            }
            else{
              props.setRes(3);
            }
            
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
            window.scrollTo(0, 0);
        });

      
        
    };
  return (
    <div className={classes2.container}>
    <div className={classes2.section}>
        <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
      {/* <Grid container spacing={3}>
        <Grid item xs={12}> */}
         <h2>Let{"'"}s talk product</h2>
          <Paper className={classes.paper}>
          <form onSubmit={e => onSubmit(e)}>


          <FormControl  className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Marrakech ou régions</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-autowidth"
                defaultValue="Marrakech ou régions"
                name='Marrakech_Regions'
                onChange={onChange}
              >
                <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
                <MenuItem value="marrakech">Marrakech</MenuItem>
                <MenuItem value="regions">Regions</MenuItem>
              </Select>
          </FormControl>


              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Type de transaction</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-autowidth"
                defaultValue="Type transaction"
                name='type_transaction'
                onChange={onChange}
              >
               {provinceData.map(province => (
                  <MenuItem value={province}>{province=="vente"?"Vente":"Location"}</MenuItem>
                ))}
              </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Type de produit</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-autowidth"
                defaultValue="Type de produit"
                name='type_bien'
                onChange={onChange}
              >
                <MenuItem value="appartements">Appartement</MenuItem>
                <MenuItem value="villas">Villa</MenuItem>
                <MenuItem value="riad_r">Riad rénové</MenuItem>
                <MenuItem value="riad">Riad à rénover</MenuItem>
                <MenuItem value="commerce">Commerce</MenuItem>
                <MenuItem value="terrian">Terrain</MenuItem>
              </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Budget</InputLabel>
              <Select  
                labelId="demo-simple-select-label"
                id="demo-simple-select-autowidth" 
                
                defaultValue="Budget"
                name='budget'
                onChange={onChange}
                >
               {cities.map(city => (
          <MenuItem value={city}>{city} €</MenuItem>
        ))}
              </Select>
              </FormControl>
              <FormControl  className={classes.formControl}>
             
             
                     {loading ?
                        
                             <Loader
                                 type="Oval"
                                 color="#424242"
                                 height={30}
                                 width={30}
                             />
                          : 
                          <Button variant="contained" color="primary" type="submit" >
                          Chercher
                        </Button>
                     }
                 
              </FormControl>
          </form>
            </Paper>
        </GridItem>
      </GridContainer>
      </div>
      </div>
  );

  
  
};



ListingForm.propTypes = {
    setListings: PropTypes.func.isRequired
};

export default ListingForm;
