import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';


export default () => (
  <ProductConsumer>
    {
      value => {
        const { id, company, img, info, price, form, switches, title, inCart } = value.detailProduct;

        return (
          <div className="page-content container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* product info */}
            <div className="row">
              <div className="col-10 mx-auto col-lg-6 my-3">
                <img src={img} alt="product" className="img-fluid" />
              </div>
              <div className="col-10 mx-auto col-lg-6 my-3">
                <h3>Model: {title}</h3>
                <h4 className="text-muted mt-3 mb-2">
                  Manufacturer: {company}
                </h4>
                <h4 className="text-capitalize text-muted">
                  Form factor: {form}
                </h4>
                <h4 className="text-capitalize text-muted">
                  Switches: {switches}
                </h4>
                <h4 className="text-blue mt-3">Price: ${price}</h4>
                {/* buttons */}
                <div className="d-flex align-items-center">
                  <Link to="/store">
                    <ButtonContainer>
                      Store
                      </ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    className="m-2"
                    disabled={inCart}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                    {inCart ? 'In Cart' : 'Add to Cart'}
                  </ButtonContainer>
                </div>
                <p className="font-weight-bold mt-4 mb-0">
                  Product details
                  </p>
                <p className="text-muted text-justify lead">{info}</p>
              </div>
            </div>
          </div>
        )
      }
    }
  </ProductConsumer>
)
