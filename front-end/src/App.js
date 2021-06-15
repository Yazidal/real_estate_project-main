import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetail';
import Appartements from './containers/Appartements';
import Villas from './containers/Villas';
import Riads from './containers/Riads';
import Commerces from './containers/Commerces';
import Terrains from './containers/Terrains';
import NotFound from './components/NotFound';
import Layout from './hocs/Layout';

import "assets/scss/material-kit-react.scss?v=1.10.0";

const App = () => ( 

      <Router >
          <Layout>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/contact' component={Contact} />
                  <Route exact path='/listings' component={Listings} />
                  <Route exact path='/appartements/:type_transaction'  render={(props) => <Appartements {...props} key={Date.now()}/>} />
                  <Route exact path='/villas/:type_transaction'  render={(props) => <Villas {...props} key={Date.now()}/>} />
                  <Route exact path='/riads/:type_transaction/:renover'  render={(props) => <Riads {...props} key={Date.now()}/>} />
                  <Route exact path='/commerces/:type_transaction'  render={(props) => <Commerces {...props} key={Date.now()}/>} />
                  <Route exact path='/terrains/:type_transaction'  render={(props) => <Terrains {...props} key={Date.now()}/>} />
                  
                  <Route exact path='/listings/:type_bien/:id' component={ListingDetail} />
                  <Route component={NotFound} />
              </Switch>
          </Layout>
      </Router>
);


export default App;
