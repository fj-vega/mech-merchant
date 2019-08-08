import React from 'react';
import Title from './Title';
import { ButtonContainer } from './Button';


export default () => (
  <div className="page-content py-5">
    <div className="container mb-5">
    <Title text="Contact" />

      <div className="row">
        <div className="col mb-3 mb-md-0">
          <div className="card">
            <div className="card-header bg-black text-white">
              <i className="fa fa-envelope"></i> Contact us
              </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="order">Order Number</label>
                  <input type="email" className="form-control" id="order" aria-describedby="emailHelp" placeholder="Order number" required />
                  <small id="emailHelp" className="form-text text-muted">
                    If you have a problem with your order, fill this
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="6" required />
                </div>
                <div className="mx-auto">
                  <ButtonContainer>
                    Submit
                  </ButtonContainer>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-4">
          <div className="card mb-3">
            <div className="card-header bg-black text-white">
              <i className="fa fa-home"></i> Address
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Street of the broken switches</li>
                <li className="list-group-item">20230, London</li>
                <li className="list-group-item">United Kingdom</li>
                <li className="list-group-item">mech@store.com</li>
                <li className="list-group-item">+33 20 7777 4444</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
