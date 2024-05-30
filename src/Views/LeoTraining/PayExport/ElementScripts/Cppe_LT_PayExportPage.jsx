import React, { useState } from "react";
import ExportList, {
  FilterDropdown,
  NewTag,
} from "Components/LeoTraining/PayExport/Cppc_LN_ExportList";
import HelpfulLink from "Components/LeoTraining/PayExport/Cppc_LN_HelpfulLink";
import UserInfo from "Components/LeoTraining/PayExport/Cppc_LN_UserInfo";
import { useResponsive } from "UtilityScripts/Cppu_Common";

const FILTER_TYPES = ["Pay Equity Export", "Pay Equity Executive View"];

const FilterExportTypeDropdown = () => {
  const [selectedType, setSelectedType] = useState("Pay Equity Executive View");

  return (
    <div className="d-flex justify-content-between mb-3">
      <div class="dropdown filter-export-type-dropdown">
        <button
          class=" btn-lg w-100 dropdown-toggle d-flex justify-content-between align-items-center fs-5"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span>
            {selectedType}{" "}
            {selectedType === "Pay Equity Executive View" && <NewTag />}
          </span>
        </button>
        <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenu2">
          {FILTER_TYPES.map((type) => (
            <li onClick={() => setSelectedType(type)}>
              {type} {type === "Pay Equity Executive View" && <NewTag />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

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
            {!isDesktop && <FilterExportTypeDropdown />}
            {!isDesktop && <FilterDropdown />}
            <ExportList />
          </div>
        </div>
      </div>
    </div>
  );
}
