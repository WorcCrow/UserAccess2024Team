import React from "react";
import logo from "Resources/images/Header_SalaryLogo.svg";

const ExportHeader = () => {
  return (
    <div className="logo-section">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="welcome">
        <span>Welcome Ted!</span>
      </div>
    </div>
  );
};

export default ExportHeader;
