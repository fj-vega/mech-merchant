import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'jquery';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Store from './components/Store';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Footer from './components/Footer';
import Modal from './components/Modal';
import AlertPurchase from './components/AlertPurchase';


export default () => (
  <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/store" component={ Store } />
      <Route exact path="/faq" component={ Faq } />
      <Route exact path="/contact" component={ Contact } />
      <Route exact path="/details" component={ Details } />
      <Route exact path="/cart" component={ Cart } />
      <Route component={ Default } />
    </Switch>
    <Footer />
    <Modal />
    <AlertPurchase />
  </React.Fragment>
)
