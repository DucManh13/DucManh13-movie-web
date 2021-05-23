import {PayPalButtons } from "@paypal/react-paypal-js";
import { useHistory } from "react-router";

function Payment({seats,ticket,price,user,movieId,screeningId,token,onFinish}) {
  const history = useHistory();

  const createOrder= function() {
    return fetch('https://fbk-api-gateway.herokuapp.com/bookings/prepare', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({
        userId: user.id,
        currency: "USD",
        tickets: seats.reduce((result,seat,index)=>{
          if (seat===1)
            result.push({
              seatNumber: `${index}`,
              price: price
            });
          return result;
        },[])
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
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({
        orderId: data.orderID,
        payerId: data.payerID,
        userId: user.id,
        userEmail: user.email,
        movieId: movieId,
        amount: price*ticket,
        currency: "USD",
        tickets: seats.reduce((result,seat,index)=>{
          if (seat===1)
            result.push({
              seatNumber: `${index}`,
              screeningId: screeningId
            });
            return result;
          },[])
      })
    })
    .then(function(res) {
      // DEBUG
      console.log("Finish.");
      return res.json();
    })
    .then(function(details) {
      // DEBUG
      console.log('-- STEP 3 --');
      console.log(details);
      if(details.status&&details.status===500) {
        alert(
          "Some seats you selected were booked. Please try again."
        );
        window.location.reload();
      }
      else {
        alert(
          "Finish transaction successfully. Check your email for QR code of this booking."
        );
        onFinish();
        history.push("/bookinglist");
      }
      return details.id;
    });
  }
  return (
    <PayPalButtons disabled={ticket===0} createOrder={createOrder} onApprove={onApprove} style={{ color: "blue", shape: "rect", layout:"horizontal", label:"paypal",height: 50,tagline:false}} /> 
  );
}

export default Payment;
  