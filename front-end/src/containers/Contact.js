import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import {primaryColor} from "assets/jss/material-kit-react.js";

import ContactSection from "components/ContactSection.js";

const useStyles = makeStyles(styles);

const Contact = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Parallax
                small
                filter
                image={require("assets/img/bgmedina.jpg").default}
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <h2 style={{color:primaryColor,textAlign:"center",margin:20}}>Votre décision est prise «Vous achetez, Vous louez ou Vous vendez !»</h2>
                    <p>
                        Alors n’hésitez plus,<strong> rejoignez votre agent immobilier de Marrakech ImmoAlaoui </strong> une compétente est disponible.
                        Chez ImmoAlaoui les fondements reposent sur le sérieux, la transparence et le professionnalisme au service de ses clients.
                        De la transaction immobilière (neuves et anciennes) à la gestion de syndic d’immeubles, de copropriétés et locatives, notre connaissance du marché et notre écoute nous permettent de vous offrir des avantages considérables :
                    </p>
                    <ul>
                        <li>
                        Un réseau de vendeur et d’acheteur
                        </li>
                        <li>
                        Une gamme de produits adaptés à vos critères
                        </li>
                        <li>
                        Une personnalisation des dossiers
                        </li>
                        <li>
                        Des capacités de communications
                        </li>
                        <li>
                        L’estimation de votre bien
                        </li>
                        <li>
                        L’efficacité et la sécurité d’un bien conforme aux réglementations
                        </li>
                        <li>
                        L’aide à la constitution de votre dossier d’offre de prêt
                        </li>
                        <li>
                        L’étude de votre patrimoine avec l’objectif d’une défiscalisation
                        </li>
                    </ul>
                    <p>
                    <span style={{color:primaryColor}}>Chez ImmoAlaoui </span>«la sérénité dans l’immobilière» n’est pas de vain mot. La sérénité et la tranquillité lors d’un investissement immobilière c’est non seulement sérieux mais aussi précieux à nos yeux!
                    Pour bien vendre votre bien immobilier, confiez- le à Yosra immobilière.
                    </p>
                    <ContactSection />
                </div>
            </div>
        </div>
    );
};
export default Contact;
