import React from 'react';
import Title from './Title';


export default () => (
  <div className="page-content py-5">
    <div className="container mb-5">
      <Title text="Frequently Asked Questions"></Title>
      
      <ul className="list-group list-group-flush text-justify">
        <li className="list-group-item">
          <p className="mb-1">
            Is the shipping really free for every country?
          </p>
          <p className="text-muted mb-1">
            Yes, it is, however, due to limitations of this service your order may take up to 60 days to arrive
          </p>
        </li>
        <li className="list-group-item">
          <p className="mb-1">
            Why can't I register in the store?
          </p>
          <p className="text-muted mb-1">
            We use your PayPal account to ship your order. Please make sure your personal information is correct before placing an order
          </p>
        </li>
        <li className="list-group-item">
          <p className="mb-1">
            What payment methods do you accept?
          </p>
          <p className="text-muted mb-1">
            As for now, PayPal is the only payment method we accept
          </p>
        </li>
        <li className="list-group-item">
          <p className="mb-1">
            My order has not arrived after 60 days, what should I do?
          </p>
          <p className="text-muted mb-1">
            Use the contact form to fill a ticket and we will get back to you
          </p>
        </li>
        <li className="list-group-item">
          <p className="mb-1">
            I have a problem with my order
          </p>
          <p className="text-muted mb-1">
            Send us a ticked with your order number and we will do our best to solve it
          </p>
        </li>
        <li className="list-group-item">
          <p className="mb-1">
            Do you offer building service for DIY kits?
          </p>
          <p className="text-muted mb-1">
            Yes! Send us a message specifying what you want and we will give you an aproximate price
          </p>
        </li>
      </ul>
    </div>
  </div>
)
