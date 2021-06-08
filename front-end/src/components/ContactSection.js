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

const useStyles = makeStyles(styles);

export default function ContactSection() {
  const classes = useStyles();
  function sendEmail(e) {
    e.preventDefault();
    // const test = {
    //   name: e.target.name,
    //   email: e.target.email,
    //   message:e.target.message
    // };

    
    // const templateParams = {
    //   name: test.name,
    //   email: test.email,
    //   message:test.message
    // };
    
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
        <GridItem cs={12} sm={12} md={8}>
          <h2 style={{textAlign:"center"}}>Contactez-nous</h2>
          <h4 className={classes.description}>
            Pour plus d'informations  

          </h4>
          <form  onSubmit={e => sendEmail(e)}>
            <GridContainer>
            {/* <input type="hidden" name="contact_number" /> */}
            
              <GridItem xs={12} sm={12} md={6}>
            
              <TextField id="standard-basic" label="Standard" name="name" formControlProps={{
                    fullWidth: true,
                  }}/>

                {/* <CustomInput
                  
                  name="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                /> */}
              

              </GridItem>
              <GridItem xs={12} sm={12} md={6}>

              <TextField id="standard-basic" label="Standard" name="email" 
              // formControlProps={{
              //       fullWidth: true,
              //     }}
                  />

                {/* <CustomInput
                  labelText="Votre Email"
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                /> */}
              </GridItem>
              <TextField
                id="standard-multiline-static"
                label="Message"
                name="message"
                multiline
                rows={4}
                defaultValue="Default Value"
                // formControlProps={{
                //   fullWidth: true,
                //   className: classes.textArea,
                // }}
                // inputProps={{
                //   multiline: true,
                //   rows: 5,
                // }}
              />

              {/* <CustomInput
                labelText="Votre Message"
                id="message"
                name="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              /> */}
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
