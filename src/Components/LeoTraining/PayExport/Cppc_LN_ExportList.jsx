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
  return (
    <div className="d-flex justify-content-between" style={{ width: 200 }}>
      <div className="d-flex align-items-center justify-content-center">
        <p className="fw-lighter m-0" style={{ fontSize: 12 }}>
          FILTER BY TYPE
        </p>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-outline-secondary dropdown-toggle d-flex justify-content-between align-items-center"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ width: 100 }}
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
      <div class="d-flex w-100 justify-content-between align-items-center">
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
            View Full Export{" "}
            <span
              className="icon-sa-circle-right"
              style={{ color: "white", fontSize: 20, marginLeft: 6 }}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ExportList() {
  return (
    <div className="card pt-5">
      <div class="card-body position-relative">
        <div className="tootip-container">
          <Tooltip isWhite text="Pay Equity Executive View" />
          <Tooltip text="Pay Equity Export" />
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <h3 className="m-0 fs-6 fw-bold">
            Pay Equity Export Shared With You
          </h3>
          <Dropdown />
        </div>
        <div class="">
          <ExportItem />
          <ExportItem />
          <ExportItem />
        </div>
      </div>
    </div>
  );
}
