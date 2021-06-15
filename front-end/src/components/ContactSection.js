import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import emailjs from 'emailjs-com';
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import {primaryColor} from "assets/jss/material-kit-react.js";
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(styles);

export default function ContactSection(props) {
  const classes = useStyles();
  const titre =props.titre;
  const type_transaction =props.type_transaction;
  const type_bien =props.type_bien;

  function sendEmail(e) {
    e.preventDefault();
    
    console.log(e.target);
    emailjs.sendForm('service_mm0n2k9', 'template_jkiezen',e.target, 'user_X6J5LqEC3onHwfvHhCB9S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={9}>
          <h2 style={{textAlign:"center"}}>Contactez-nous</h2>
          <h4 className={classes.description}>
            Pour plus d'informations veuillez remplire ce formulaire ou contacter nous sur 
           
            <a href="tel:+212661340564" style={{color:primaryColor}}>  <PhoneIcon fontSize="small"/> 06 61 34 05 64</a>
          </h4>
          <form  onSubmit={e => sendEmail(e)}>
            <GridContainer spacing={3}>
            {/* <input type="hidden" name="contact_number" /> */}
              { titre ? 
              <GridItem xs={12} sm={12}>
                <TextField id="standard-basic" disabled defaultValue={type_bien +" / "+ type_transaction +" / "+ titre } fullWidth name="objet"/>
              </GridItem>
              :null}
              <GridItem xs={12} sm={12} md={6}>
                <TextField id="standard-basic" label="Votre Nom" fullWidth name="name" required/>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField id="standard-basic" fullWidth type="tel" label="Votre Numero de telephone" name="phone" required/>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField id="standard-basic" fullWidth type="email" label="Votre E-mail" name="email" required/>
              </GridItem>
              <GridItem xs={12} sm={12}>
                <TextField
                  id="standard-multiline-static"
                  label="Votre Message"
                  fullWidth
                  name="message"
                  multiline
                  rows={4}
                  required
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                 <Button color="primary" type="submit">Envoyer</Button>            
              </GridItem>

            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
