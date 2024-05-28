import React from "react";
import { Button, Image } from "react-bootstrap";

import { images } from "Assets/images";
import PayExportPage from "../ElementScripts/Cppe_LT_PayExportPage";
import "../../../../Styles/LeoTraining/Cpps_LN_PayExportPageStyles.scss";

export default function Cppl_LN_PayExportPage() {
  return (
    <div className="container-pay-export-page px-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Image src={images.logo} rounded height={80} />
          <div>
            <Button variant="light rounded-pill sign-out-text">Sign Out</Button>
          </div>
        </div>
        <PayExportPage />
      </div>
    </div>
  );
}
