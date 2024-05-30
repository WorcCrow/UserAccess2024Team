import React from "react";
import ExportList from "Components/LeoTraining/PayExport/Cppc_LN_ExportList";
import HelpfulLink from "Components/LeoTraining/PayExport/Cppc_LN_HelpfulLink";
import UserInfo from "Components/LeoTraining/PayExport/Cppc_LN_UserInfo";
import { useResponsive } from "UtilityScripts/Cppu_Common";

export default function Cppe_LT_PayExportPage() {
  const { isDesktop } = useResponsive();

  return (
    <div className="">
      <div class="container ">
        <div class="row gx-5 gy-2 p-0">
          <div className="col-12">
            <h1 className="welcome-label">Welcome Ted!</h1>
          </div>
          <div class="col-sm-12 col-lg-4">
            <div className="row gy-3">
              {isDesktop && (
                <div className="col-12">
                  <UserInfo />
                </div>
              )}
              {isDesktop && (
                <div className="col-sm-12">
                  <HelpfulLink />
                </div>
              )}
            </div>
          </div>
          <div class="col-sm-12 col-lg-8">
            <ExportList />
          </div>
        </div>
      </div>
    </div>
  );
}
