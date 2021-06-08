import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function Infos() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>IMMOALAOUI, VOTRE SPÉCIALISTE DE L’IMMOBILIER A MARRAKECH</h2>
            <h4>
            Fort de plus de 20 ans d’expérience acquise dans la gestion et la vente de biens immobiliers à Marrakech et régions, nous possédons des compétences et un savoir-faire reconnus pour vous accompagner dans la concrétisation de votre projet d’investissement immobilier.

            Qu’il s’agisse d’achat ou de vente de riads rénovés, ou à rénover, de locations ou d’investissements dans le neuf, nous sommes à même de vous proposer le bien qui ‘Vous’ correspond. Spécialiste de l’immobilier de charme : Maisons et palais d’hôtes, Villas “Elite” et de prestige, Appartements de grand standing.

            Nous vous proposerons des opportunités rares, sélectionnées en fonction de vos critères et vous conseillerons dans une relation de confiance pour répondre et satisfaire vos exigences.

            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
