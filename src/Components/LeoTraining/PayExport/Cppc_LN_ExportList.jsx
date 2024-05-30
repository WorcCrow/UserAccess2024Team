import { useResponsive } from "UtilityScripts/Cppu_Common";
import React from "react";

const NewTag = () => {
  return <span className="badge bg-warning rounded">New</span>;
};

const Tooltip = ({ text, isWhite }) => {
  const classes = isWhite ? "custom-tooltip white" : "custom-tooltip blue";

  return (
    <div class={classes}>
      <span>{text}</span>
      <div className="arrow-border">
        <div class="arrow"></div>
        <div class="arrow-border-inner"></div>
      </div>
    </div>
  );
};

const Dropdown = () => {
  const { isDesktop } = useResponsive();

  if (!isDesktop) return null;

  return (
    <div className="d-flex justify-content-between filter-dropdown">
      <div className="d-flex align-items-center justify-content-center">
        <p className="fw-lighter m-0 text-sm">FILTER BY TYPE</p>
      </div>
      <div class="dropdown ">
        <button
          class="btn btn-outline-secondary dropdown-toggle d-flex justify-content-between align-items-center"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          All
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <button class="dropdown-item" type="button">
              All
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Another action
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Something else here
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ExportItem = () => {
  return (
    <div class="rounded border my-3 p-3 export-item" aria-current="true">
      <div>
        <h5 class="mb-1">
          List group item heading <NewTag />
        </h5>
        <span class="text-muted">Shared today</span>{" "}
        <span class="text-muted mx-4">Shared by LeoNguyen</span>{" "}
        <span class="text-muted">Expired August 23, 2022</span>
      </div>
      <div>
        <button
          type="button"
          class="btn rounded-pill btn-primary d-flex align-items-center fw-bold export-btn"
        >
          View Full Export <span className="icon-sa-circle-right"></span>
        </button>
      </div>
    </div>
  );
};

export default function ExportList() {
  const { isDesktop } = useResponsive();
  return (
    <div className="card export-list">
      {isDesktop && (
        <div className="tootip-container">
          <Tooltip isWhite text="Pay Equity Executive View" />
          <Tooltip text="Pay Equity Export" />
        </div>
      )}
      <div class="d-flex align-items-center justify-content-between  w-100">
        <h3 className="m-0 fs-6 fw-bold">Pay Equity Export Shared With You</h3>
        <Dropdown />
      </div>
      <ExportItem />
      <ExportItem />
      <ExportItem />
    </div>
  );
}
