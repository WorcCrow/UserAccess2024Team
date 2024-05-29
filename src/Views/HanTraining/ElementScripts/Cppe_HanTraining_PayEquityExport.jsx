import { Button } from "react-bootstrap";

const PayEquityExport = () => {
  return (
    <div className="pay-equity-export">
      <div className="row">
        <div className="col-12 col-sm-12">
          <div className="pay-equity-export-title">
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="section-title">
                  <h4>Pay Equity Exports Shared With You</h4>
                </div>
              </div>
              <div className="col-12 col-sm-6 d-none d-sm-block">
                <div className="section-filter ">
                  <div className="filter-name">
                    <span>FILTER BY DATE</span>
                  </div>
                  <div className="filter-option">
                    <div class="dropdown-center">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        All
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Action two
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Action three
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="equity-export-body">
            <div className="row">
              <div className="col-12">
                <div className="equity-export-item">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-9">
                      <div className="equity-export-title">
                        <div className="equity-title">
                          <span>IndividualAnalysisDashboardExport</span>
                          <span className="title-tag">NEW</span>
                        </div>
                        <div className="equity-summary">
                          <span>Shared today</span>
                          <span>Shared by HanDoan</span>
                          <span>Expires September 20, 2022</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 view-export">
                      <div className="equity-export-button">
                        <Button className="float-right" variant="success">
                          View Full Export
                          <i className="icon-sa-arrow-right"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="equity-export-item">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-9">
                      <div className="equity-export-title">
                        <div className="equity-title">
                          <span>IndividualAnalysisDashboardExport</span>
                        </div>
                        <div className="equity-summary">
                          <span>Shared today</span>
                          <span>Shared by HanDoan</span>
                          <span>Expires September 20, 2022</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 view-export">
                      <div className="equity-export-button">
                        <Button className="float-right" variant="success">
                          View Full Export
                          <i className="icon-sa-arrow-right"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="equity-export-item">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-9">
                      <div className="equity-export-title">
                        <div className="equity-title">
                          <span>IndividualAnalysisDashboardExport</span>
                        </div>
                        <div className="equity-summary">
                          <span>Shared today</span>
                          <span>Shared by HanDoan</span>
                          <span>Expires September 20, 2022</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 view-export">
                      <div className="equity-export-button">
                        <Button className="float-right" variant="success">
                          View Full Export
                          <i className="icon-sa-arrow-right"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayEquityExport;
