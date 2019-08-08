import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { ProductConsumer } from '../../context';
import { withRouter } from 'react-router-dom';


const PayPalButton = ({ history }) => (
  <ProductConsumer>
    {
      value => {
        const { cartTotal, clearCart, flashAlertPurchase } = value;

        const onSuccess = payment => {
          console.log("The payment was succeeded!", payment);
          clearCart();
          flashAlertPurchase();
          history.push('/store');
        }

        const onCancel = data => {
          console.log('The payment was cancelled!', data);
        }

        const onError = err => {
          console.log("Error!", err);
        }

        const env = 'sandbox';
        const currency = 'USD';
        const total = cartTotal;

        const client = {
          sandbox: process.env.REACT_APP_APP_ID,
          production: 'YOUR-PRODUCTION-APP-ID',
        }

        return (
          <PaypalExpressBtn
            env={env}
            client={client}
            currency={currency}
            total={total}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}
          />
        );
      }
    }
  </ProductConsumer>
)

export default withRouter(PayPalButton);
