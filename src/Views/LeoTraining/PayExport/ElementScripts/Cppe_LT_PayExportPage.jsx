import React from "react";
import ExportList from "Components/LeoTraining/PayExport/Cppc_LN_ExportList";
import HelpfulLink from "Components/LeoTraining/PayExport/Cppc_LN_HelpfulLink";
import UserInfo from "Components/LeoTraining/PayExport/Cppc_LN_UserInfo";
import { useResponsive } from "UtilityScripts/Cppu_Common";

export default function Cppe_LT_PayExportPage() {
  const { isMobile, isTablet } = useResponsive();

  if (isMobile || isTablet) {
    return <h1>Mobile</h1>;
  }

  return (
    <div className="">
      <div class="container ">
        <div class="row gx-5" style={{ padding: 0 }}>
          <h1 className="welcome-label">Welcome Ted!</h1>
          <div class="col-4 ">
            <div className="row gy-3">
              <UserInfo />
              <HelpfulLink />
            </div>
          </div>
          <div class="col-8">
            <ExportList />
          </div>
        </div>
      </div>
    </div>
  );
}
