import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./loader2.css";
import Logo from "./images/Logo2.png";

const loader2 = () => {
    //document.getElementById("myModal").style.display = "block";

    function openModal() {
        document.getElementById("myModal").style.display = "block";
    }
  return (
    <div>

    <div class="modall" id="myModal">
      <div class="modall-content">
        <img src={Logo} alt="Argenta logo" style={{height: "200px"}} />
        <br></br>
        <br></br>
         <br></br>
        <div class="loading-dotss">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>

        {/* <p style="color: #004a65; font-size: 16px; font-family: Arial, sans-serif;">Bezig met aanmelden, sluit deze pagina niet.</p> */}

      </div>
    </div>
    </div>
  );
};

export default loader2;
