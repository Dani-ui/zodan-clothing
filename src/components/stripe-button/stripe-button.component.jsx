import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LXKFWKTvL7uAfiqxE519QZrt78h9tQKBBHJLsQdSOmSdcC1JQxs2LETFb52czCKYzTnfNLZIvrlTV4KgbHvuvsa00GWB7mW09";

  const onToken = (token) => {
    console.log();
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ZOD Clothing"
      billingAddress
      shippingAddress
      image="../../assets/zodan.jpg"
      description={`Your total is &#8358;{price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
