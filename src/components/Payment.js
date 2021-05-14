import {PayPalButtons } from "@paypal/react-paypal-js";

function Payment({seats,ticket,price}) {
  
  const createOrder= function() {
    return fetch('https://fbk-api-gateway.herokuapp.com/bookings/prepare', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        "Authorization" : `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlcyI6IlJPTEVfQURNSU4iLCJpZCI6MzksInBlcm1pc3Npb24iOnsiMSI6IkNSRUFURSIsIjIiOiJSRUFEIiwiMyI6IlVQREFURSIsIjQiOiJERUxFVEUifSwiaWF0IjoxNjIwNjI2MDMwLCJleHAiOjE2MzA5ODI0MzB9.vR0EDk9LSjFkwcNvEOSndZJ8cnJOyHS7gBSmxU9TbYI`
      },
      body: JSON.stringify({
        userId: 2,
        currency: "USD",
        tickets: [
          {
            seatNumber: "A4",
            price: 15.0
          },
          {
            seatNumber: "A5",
            price: 15.0
          },
        ],
      })
    })
    .then(function(res) {
      // DEBUG
      console.log("Set up order successfully.");
      return res.json();
    })
    .then(function(data) {
      // DEBUG
      console.log('-- STEP 1 --');
      console.log(data);
      return data.orderId; // Same order ID key name as on the server
    });
  }

  const onApprove= function (data, actions) {
    // DEBUG
    console.log('-- STEP 2 --');
    console.log(data);
    // Capture the funds from the transaction
    return fetch('https://fbk-api-gateway.herokuapp.com/bookings/confirm', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        "Authorization" : `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlcyI6IlJPTEVfQURNSU4iLCJpZCI6MzksInBlcm1pc3Npb24iOnsiMSI6IkNSRUFURSIsIjIiOiJSRUFEIiwiMyI6IlVQREFURSIsIjQiOiJERUxFVEUifSwiaWF0IjoxNjIwNjI2MDMwLCJleHAiOjE2MzA5ODI0MzB9.vR0EDk9LSjFkwcNvEOSndZJ8cnJOyHS7gBSmxU9TbYI`
      },
      body: JSON.stringify({
        orderId: data.orderID,
        payerId: data.payerID,
        userId: 5, // INSERT USER_ID HERE
        amount: 20, // INSERT CHARGE HERE
        currency: "USD",
        tickets: [
          {
            // Use UUID to prevent violation of db constraints, for demo purposes only
            seatNumber: "abc123", // INSERT SEAT_NUMBER HERE, e.g. "A4"
            screeningId: 7 // INSERT SCREENING_ID HERE
          },
          {
            seatNumber: "abc456",
            screeningId: 7
          },
        ],
      })
    })
    .then(function(res) {
      // DEBUG
      console.log("Finish transaction successfully.");
      return res.json();
    })
    .then(function(details) {
      // DEBUG
      console.log('-- STEP 3 --');
      console.log(details);
      alert(
          'Transaction approved by ' + details.orderId +
          '\nBooking ID is ' + details.id
      );
      return details.id;
    });
  }
  return (
    <PayPalButtons disabled={ticket===0} createOrder={createOrder} onApprove={onApprove} style={{ color: "blue", shape: "rect", layout:"horizontal", label:"paypal",height: 50,tagline:false}} /> 
  );
}

export default Payment;
  