import React from "react";

const Dropdown = () => {
  return (
    <div className="d-flex justify-content-between" style={{ width: 230 }}>
      <div className="d-flex align-items-center justify-content-center">
        <p className="fs-6 fw-lighter m-0">FILTER BY TYPE</p>
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
    <div class="rounded border my-3 p-3" aria-current="true">
      <div class="d-flex w-100 justify-content-between">
        <div>
          <h5 class="mb-1">List group item heading</h5>
          <span class="text-muted">Shared today</span>{" "}
          <span class="text-muted mx-4">Shared by LeoNguyen</span>{" "}
          <span class="text-muted">Expired August 23, 2022</span>
        </div>
        <div>
          <button type="button" class="btn rounded-pill btn-primary">
            View Full Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ExportList() {
  return (
    <div className="card">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <p className="m-0 fs-6 fw-bold">Pay Equity Export Shared With You</p>
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
