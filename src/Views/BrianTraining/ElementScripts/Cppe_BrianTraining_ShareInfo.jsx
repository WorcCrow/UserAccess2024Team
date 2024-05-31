import {
  Button,
  Form,
  Overlay,
  OverlayTrigger,
  Popover,
  Tooltip,
} from "react-bootstrap";
import { useState, useRef } from "react";

export default function ShareInfo() {
  // Ref for Link or Button triggering overlay (required for <Overlay> usage)
  const refLink = useRef(null);

  // State variable
  const [overlayOpen, setOverlayOpen] = useState(true); // Initially open
  const infor = [
    {
      title: "IndividualAnalysisDashboardExport",
      sharedDate: "today",
      sharedBy: "Danielle Boland",
      expires: "September 30,2022",
      isNew: true,
    },
    {
      title: "GroupAnalysisDashboard",
      sharedDate: "August 08,2022",
      sharedBy: "Danielle Boland",
      expires: "August 23,2022",
      isNew: false,
    },
    {
      title: "MarketingTeam2023",
      sharedDate: "August 08,2022",
      sharedBy: "Danielle Boland",
      expires: "August 23,2022",
      isNew: false,
    },
  ];
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>Pay Equity Exports</Popover.Body>
    </Popover>
  );
  const getTooltip = () => {
    return (
      <Popover id="popover-basic">
        <Popover.Body>Pay Equity Exports</Popover.Body>
      </Popover>
    );
  };
  return (
    <div className="col-lg-9 col-sm-12">
      {/* <div className="arrow-div">
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
        <div className="first-tab">
          <strong>
            <div>Pay Equity</div>
            <div>Executive View</div>
          </strong>
        </div>
      </div> */}
      <div className="col-sm-12 row display-custom-revert arrow-div-sm">
        <strong className="tab-label-sm">Pay Equity Exports</strong>
        <span className="icon-sa-circle-right button-icon tab-label-icon-sm"></span>
      </div>
      <div className="shared-info-filter col-sm-12 row display-custom-revert">
        <span className="filter-label-sm">Filter By Date</span>
        <Form.Select
          className="col-lg-6"
          aria-label="Default select example"
          size="sm"
        >
          <option>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="right-col position-relative">
        <a
          ref={refLink}
          href="javascript:void(0)"
          onClick={() => setOverlayOpen(!overlayOpen)}
        >
          123
        </a>
        <Overlay
          target={refLink.current}
          show={overlayOpen}
          onHide={() => setOverlayOpen(false)}
          rootClose
          placement="bottom"
        >
          {popover}
        </Overlay>
        <div className="padding-top60 row">
          <div className="shared-info-title col-lg-9">
            <strong>Pay Equity Exports Share With You</strong>
          </div>
          <div className="shared-info-filter col-lg-3 row display-flex-custom">
            <span className="col-lg-6 filter-label">Filter By Date</span>
            <Form.Select
              className="col-lg-6"
              aria-label="Default select example"
              size="sm"
            >
              <option>All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
        <div>
          {infor.map((item) => (
            <div className="sa-boxed row" key={item.title}>
              <div className="col-lg-8 row">
                <strong className="col-lg-12">{item.title}</strong>
                <span className="col-lg-3 col-sm-2">
                  Shared {item.sharedDate}
                </span>
                <span className="col-lg-3 col-sm-6">
                  Shared By {item.sharedBy}
                </span>
                <span className="col-lg-3 col-sm-12">
                  Expires {item.expires}
                </span>
              </div>
              <div className="col-lg-4">
                <button
                  type="button"
                  className="btn rounded-pill btn-success d-flex align-items-center fw-bold export-btn float-right"
                >
                  View Full Export{" "}
                  <span className="icon-sa-circle-right button-icon"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
