import React from "react";
import Logo from "../images/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_sec">
      <img src={Logo} alt="Logo" />

      <p>
        Vipps MobilePay, filial af Vipps MobilePay AS, Norge, Vester Søgade 10,
        6., 1601 København V. E-mail: <b>mobilepay@mobilepay.dk</b>, CVR-nr.
        43300946. Copyright ©2023 Vipps MobilePay.
        <b>Læs behandling af personoplysninger og cookies</b> og{" "}
        <b>vilkår for brug</b>. Klageansvarlig afdeling: Vipps MobilePay, filial
        af Vipps MobilePay AS, Norge, Vester Søgade 10, 6., 1601 København V.
      </p>
    </div>
  );
};

export default Footer;
