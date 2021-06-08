import React,{useState} from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import {API_URL}from'config.js';

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel({listing}) {
  
  const images= listing.images;
  console.log("props listing:",images);
  console.log("props listing len:",images.length);
  // const [imgs,setImgs]=useState(props.listing)
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const displayslides = () => {
    let result = [];
        
     for (let i = 0; i < images.length; i++) {
        result.push(

          <div>
          <img src={API_URL+images[i].url} alt="First slide" className="slick-image" />
          {/* <div className="slick-caption">
            <h4>
              <LocationOn className="slick-icons" />
              Yellowstone National Park, United States
            </h4>
          </div> */}
        </div>

        );
    }

    return result; 
                  
    
};
  return (
    // <div className={classes.section}>
    //   <div className={classes.container}>
        // <GridContainer>
          <GridItem xs={12} sm={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {displayslides()}
              </Carousel>
            </Card>
          </GridItem>
        // </GridContainer>
    //   </div>
    // </div>
  );
}
