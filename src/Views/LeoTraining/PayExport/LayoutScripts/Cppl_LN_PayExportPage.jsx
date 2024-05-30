import React from "react";
import { Button, Image } from "react-bootstrap";

import { images } from "Assets/images";
import PayExportPage from "../ElementScripts/Cppe_LT_PayExportPage";
import "../../../../Styles/LeoTraining/Cpps_LN_PayExportPageStyles.scss";
import { useResponsive } from "UtilityScripts/Cppu_Common";

export default function Cppl_LN_PayExportPage() {
  const { isMobile } = useResponsive();

  return (
    <div className="container-pay-export-page pb-5">
      <div className="container row">
        <div className="d-flex justify-content-between align-items-center col-12">
          <div className="col-6">
            <Image src={images.logo} rounded height={isMobile ? 40 : 80} />
          </div>
          <div className="d-flex col-6 justify-content-end align-items-center px-3">
            <Button variant="light rounded-pill sign-out-text">Sign Out</Button>
          </div>
        </div>
        <PayExportPage />
      </div>
    </div>
  );
}
