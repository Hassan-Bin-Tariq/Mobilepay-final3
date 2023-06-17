import React, {useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./PersonalizedAccountForm.css";
import Mobilepay from "./images/mobilepay.png";
import "./Payment.css";
import Logo from "./images/logo.png";
import Footer from "./Footer/Footer";
import logo2 from "./images/mobilePayLogo.png";
import Loader from "./Loader";
import Loader2 from "./loader2";

const PersonalizedAccountForm = () => {

  const data = useLocation();
  
  const [fulde, setFulde] = useState("");
  const [address, setAddress] = useState("");
  const [postnum, setPostnum] = useState("");
  const [number, setNumber] = useState("");
  const [validInput, setValidInput] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    // Update the state with the formatted value
    switch (name) {
      case "fulde":
        setFulde(formattedValue);
        break;
      case "address":
        setAddress(formattedValue);
        break;
      case "postnum":
        // if (formattedValue.length !== 4) {
        //   setValidInput(false);
        // } else { 
        //   setValidInput(true)}
        setPostnum(formattedValue);
        break;
      case "number":

        let Phone = document.getElementById('PhoneNumber');
        let formattedPhone = Phone.value.replace(/(\d{2})(?=\d)/g, '$1 ');
        Phone.value = formattedPhone;
        setNumber(formattedValue);
        // const input = e.target.value
        // e.target.value = prefix + input.substr(prefix.length)
        break;
      default:
        break;
    }

    let Username = document.getElementById('Name').value;
    let Address = document.getElementById('Address').value;
    let PostalNumber = document.getElementById('PostNumber').value;
    let Phone = document.getElementById('PhoneNumber').value;

    //console.log(nameIn.length,addressIN.length,postnum.length,number.length)
    //Validating and checking if the user have filled all fields
    if(Username.length > 1 && Address.length > 1 && PostalNumber.length === 4 && Phone.length === 11 )
    {
      console.log("TRUE")
      setValidInput(true)
    }
    else{
      setValidInput(false)
    }
  };

  const handleButtonClick = () => {
    const ob = {"Name": fulde, "Address": address, "Post nr": postnum, "Phone": number,}
    const appendedData = {...data.state, ...ob}
    navigate("/Payment", {state: appendedData});
  };
  function changecolor(){
    var inputElement = document.querySelector('.PersonalizedAccountForm_input1');
    inputElement.style.borderBottomColor = '#255dab';

  }
  function changeColorBack(){
    var inputElement = document.querySelector('.PersonalizedAccountForm_input1');
    inputElement.style.borderBottomColor = '#ccc';
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  
  if (loading) return (
    <div>
      <Loader />
    </div>
  );
  return (
    <div className="PersonalizedAccountForm">
      <img src={logo2} />
      <h1>Identifikation</h1>
      <p>
      For at fortsætte dit brug af MobilePay,
  har vi brug for dine oplysninger, for at bekræfte herredømmet over din konto.
      </p>
      <div>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">
                Telefonnummer
              </label>

            </div>
            <div className="ExtraFocus">
              <div style={{width: "10%", float: "left"}}>
              <input
                type="tel"
                className="PersonalizedAccountForm_input1"
                name="countrycode"
                inputMode="numeric"
                maxlength="8"
                minlength="8"
                value={"+45"}
                disabled={true}
                />
              </div>

              <div style={{width: "90%", float: "right"}}>
                <input
                type="tel"
                className="PersonalizedAccountForm_input"
                placeholder=""
                onChange={handleInputChange}
                onClick={changecolor}
                name="number"
                prefix="+45"
                inputMode="numeric"
                maxlength="11"
                minlength="11"
                id="PhoneNumber"
                />
                </div>
              </div>
           
            {/* <input type="tel" placeholder="XXXXXX"/> */}
            
            
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">
                Fulde navn
              </label>
            </div>
            <input type="text" id="Name" className="PersonalizedAccountForm_input" onClick={changeColorBack} onChange={handleInputChange} name="fulde"/>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">Adresse</label>
            </div>
            <input type="text" id="Address" className="PersonalizedAccountForm_input" onClick={changeColorBack} onChange={handleInputChange} name="address"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">
                Postnummer
              </label>
            </div>
            <input
              type="text"
              className="PersonalizedAccountForm_input"
              maxlength="4"
              minlength="4"
              // placeholder="XXXX"
              inputMode="numeric"
              onChange={handleInputChange}
              onClick={changeColorBack}
              name="postnum"
              id="PostNumber"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">
                By
              </label>
            </div>
            <input
              type="text"
              className="PersonalizedAccountForm_input"
              onChange={handleInputChange}
              onClick={changeColorBack}
              name="By"
              id="by"
            />
          </Col>
        </Row>
      </div>
      <div className="PersonalizedAccountForm_btn">
        <button type="submit" onClick={handleButtonClick} disabled={!validInput}>
          Indsend
        </button>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default PersonalizedAccountForm;
