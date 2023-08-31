import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentGateway from "./PaymentGateway";

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_API_KEY;

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const PaymentGatewayContainer = (props) => {
  const handleModal = (showModal, status) => {
    props.clickHandler(showModal, status);
  };
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentGateway clickHandler={handleModal} payType={props.payType} />
    </Elements>
  );
};

export default PaymentGatewayContainer;
