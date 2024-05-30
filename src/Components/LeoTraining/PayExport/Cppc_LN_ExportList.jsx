import { useResponsive } from "UtilityScripts/Cppu_Common";
import React from "react";

const EXPORT_LIST_DATA = [
  {
    label: "Pay Equity Executive View",
    sharedBy: "Shared by: Ted Leonard",
    sharedDate: "Shared on: 12/12/2021",
    expireDate: "Expires on: 12/12/2022",
    isNew: true,
  },
  {
    label: "Pay Equity Export",
    sharedBy: "Shared by: Ted Leonard",
    sharedDate: "Shared on: 12/12/2021",
    expireDate: "Expires on: 12/12/2022",
    isNew: false,
  },
  {
    label: "Pay Equity Executive View",
    sharedBy: "Shared by: Ted Leonard",
    sharedDate: "Shared on: 12/12/2021",
    expireDate: "Expires on: 12/12/2022",
    isNew: false,
  },
];

export const NewTag = () => {
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

export const FilterDropdown = () => {
  const { isDesktop } = useResponsive();

  if (!isDesktop)
    return (
      <div className="d-flex align-items-center justify-content-end mb-3">
        <span className="text-sm text-white me-3">FILTER BY DATE</span>
        <div class="dropdown">
          <span
            class=" dropdown-toggle text-white fw-bold"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All
          </span>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>This month</li>
            <li>Last month</li>
          </ul>
        </div>
      </div>
    );

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

const ExportItem = ({ label, sharedBy, sharedDate, expireDate, isNew }) => {
  return (
    <div class="rounded border my-3 p-3 export-item" aria-current="true">
      <div>
        <h5 class="mb-1">
          {label} {isNew && <NewTag />}
        </h5>
        <span class="text-muted">{sharedDate}</span>{" "}
        <span class="text-muted mx-4">{sharedBy}</span>{" "}
        <span class="text-muted">{expireDate}</span>
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
        {isDesktop && <FilterDropdown />}
      </div>
      {EXPORT_LIST_DATA.map((item) => (
        <ExportItem {...item} />
      ))}
    </div>
  );
}
