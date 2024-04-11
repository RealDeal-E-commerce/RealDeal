import React from 'react';
import '../css/Payment.css'; 
import axios from 'axios';

interface PaymentProps {}

const Payment: React.FC<PaymentProps>= () => {
  const handleBuyNow =(amount:number)=> {
    axios.post("http://localhost:3000/api/payment",{amount})
      .then((res) => {
        const { result } =res.data;
        window.location.href =result.link; 
      })
      .catch((err) => console.error(err));
  };

  const handlePaymentClick=(event: React.MouseEvent<HTMLButtonElement>) => {
    const paymentMethod =event.currentTarget.id;
    console.log(`Payment method selected:${paymentMethod}`);

    const buttons=document.querySelectorAll('.option');
    buttons.forEach((button)=>{
      button.classList.remove('purple');
    });

    event.currentTarget.classList.add('purple');

    if(paymentMethod === 'flouci') {
      handleBuyNow(1000); 
    }
  }

  return (
    <div className="payment-method">
      <div className="payment-options">
        <button
          type="button"
          className="option"
          id="creditCard"
          onClick={handlePaymentClick}
        >
          <img
            src="https://i.ibb.co/k4YqbDS/Screenshot-14.png"
            alt="Credit card"
            className="payment-icon"
          />
          <span>Credit card details</span>
        </button>
        <button
          type="button"
          className="option"
          id="flouci"
          onClick={handlePaymentClick}
        >
          <img
            src="https://i.ibb.co/MnJVsh0/Screenshot-13.png"
            alt="Flouci"
            className="payment-icon"
          />
          <span>Pay with Flouci</span>
        </button>
        <button
          type="button"
          className="option"
          id="applePay"
          onClick={handlePaymentClick}
        >
          <img
            src="https://i.ibb.co/1XvjK8f/Screenshot-15.png"
            alt="Apple Pay"
            className="payment-icon"
          />
          <span>Pay with Apple Pay</span>
        </button>
        <button
          type="button"
          className="option"
          id="paypal"
          onClick={handlePaymentClick}
        >
          <img
            src="https://i.ibb.co/x6tL81p/Screenshot-16.png"
            alt="PayPal"
            className="payment-icon"
          />
          <span>Pay with PayPal</span>
        </button>
      </div>
      <div className="form-container">
        <form>
          <div className="form-field">
            <label htmlFor="nameOnCard">Name on card</label>
            <input type="text" name="nameOnCard" id="nameOnCard" />
          </div>
          <div className="form-field">
            <label htmlFor="cardNumber">Card number</label>
            <input type="text" name="cardNumber" id="cardNumber" />
          </div>
          <div className="form-field">
            <label htmlFor="expirationDate">Expiration date</label>
            <input type="text" name="expirationDate" id="expirationDate" />
          </div>
          <div className="form-field">
            <label htmlFor="cvv">CCV</label>
            <input type="text" name="cvv" id="cvv" />
          </div>
          <button type="button" className="pay-button" onClick={() => handleBuyNow(1000)}>
            Confirm Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
