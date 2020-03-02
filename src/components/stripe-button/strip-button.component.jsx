import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    // Converts the price to cents for proccessing by stripe API
    const priceForStripe = price * 100;

    // Publishable key we get from stripe dashboard
    const publishableKey = 'pk_test_xnEhnBnFVDMVRkWLxibuCN0z00SioiyWBf';

    const onToken = token => {
        console.log(token);
        alert('Payment succesful');
    }

    return (
        <StripCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'

            // token is used to pass payments to a back end to process
            // payments.

            // For now we will just pass in test data until the backend
            // is connected.
            token={onToken}
            stripeKey={publishableKey}        
        />
    );
};

export default StripeCheckoutButton;