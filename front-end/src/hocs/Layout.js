import React from 'react';
import Header from 'components/Header/Header';
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

const layout = (props) => (
    <div>
        <Header
        brand="IMMOALAOUI"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />
        {props.children}
        <Footer />
    </div>
);

export default layout;