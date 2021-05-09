import {PayPalButtons } from "@paypal/react-paypal-js";

function Payment({seats,ticket,price}) {
  const createOrder= (data, actions)=>{
    return actions.order.create({
      purchase_units: [{
        description: "Stuff",
        amount: {
            value: ticket*price,
            currency_code: "USD",
            breakdown: {
                item_total: {
                    currency_code: "USD",
                    value: ticket*price
                },
            }
        },
        items: seats.reduce((result,seat,index)=>{
          if (seat===1)
            result.push( {
              unit_amount: {
                  currency_code: "USD",
                  value: price
              },
              quantity: "1",
              name: `Seat ${index}`,
            });
          return result;
        },[])
      }]
    });
  };
  const onApprove= function(data, actions) {
    // This function captures the funds from the transaction.
    return actions.order.capture().then(function(details) {console.log(details)
      // This function shows a transaction success message to your buyer.
      alert('Transaction completed by ' + details.payer.name.given_name);
    });
  }
  return (
    <PayPalButtons disabled={ticket===0} createOrder={createOrder} onApprove={onApprove} style={{ color: "blue", shape: "rect", layout:"horizontal", label:"paypal",height: 50,tagline:false}} /> 
  );
}

export default Payment;
  