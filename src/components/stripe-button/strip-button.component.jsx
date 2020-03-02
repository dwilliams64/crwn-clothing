import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
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
            token={onToken}
            stripeKey={publishableKey}        
        />
    );
};

export default StripeCheckoutButton;