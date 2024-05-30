import React from "react";
import { Button, Image } from "react-bootstrap";

import { images } from "Assets/images";
import PayExportPage from "../ElementScripts/Cppe_LT_PayExportPage";
import "../../../../Styles/LeoTraining/Cpps_LN_PayExportPageStyles.scss";
import { useResponsive } from "UtilityScripts/Cppu_Common";

export default function Cppl_LN_PayExportPage() {
  const { isDesktop } = useResponsive();

  return (
    <div className="container-pay-export-page pb-5">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center col-12 py-2">
          <div className="col-6">
            <Image src={images.logo} rounded height={!isDesktop ? 40 : 80} />
          </div>
          <div className="d-flex col-6 justify-content-end align-items-center px-3">
            {isDesktop ? (
              <Button variant="light rounded-pill sign-out-text">
                Sign Out
              </Button>
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <div className="userinfo_avt-container">
                  <span className="userinfo_avt-text">TL</span>
                </div>
                <span className="icon-sa-angle-down text-white ms-2"></span>
              </div>
            )}
          </div>
        </div>
        <PayExportPage />
      </div>
    </div>
  );
}
