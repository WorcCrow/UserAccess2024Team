import "../../../../Styles/ElementStyles/TuanTraining/PeExport/Cpas_TuanTraining_PeExport _PayEquity.scss";
const PayEquity = () => {
  const exports = [
    {
      title: "IndividualAnalysisDashboardExport",
      sharedDate: "Shared today",
      sharedBy: "Danielle Boland",
      expires: "Expires September 30, 2022",
      isNew: true,
    },
    {
      title: "GroupAnalysisDashboardExport",
      sharedDate: "Shared August 02, 2022",
      sharedBy: "Danielle Boland",
      expires: "Expires August 23, 2022",
      isNew: false,
    },
    {
      title: "MarketingTeam2023",
      sharedDate: "Shared August 01, 2022",
      sharedBy: "Danielle Boland",
      expires: "Expires August 21, 2022",
      isNew: false,
    },
  ];

  return (
    <div className="card custom-card">
      <div className="card-body">
        <div className="row justify-content-between">
          <div className="col-12 col-md-8 pb-0">
            <h5 className="card-title fw-bold mb-0">
              Pay Equity Exports Shared With You
            </h5>
          </div>
          <div className="col-4 text-end d-flex align-items-center justify-content-end pb-1 d-none d-md-flex">
            <span className="me-2 text-size8">FILTER BY DATE </span>
            <select
              defaultValue="all"
              id="smallSelect"
              className="form-select form-select-sm p-0 w-50 ps-2"
            >
              <option value="all">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        {exports.map((exportItem, index) => (
          <div
            key={index}
            className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center border rounded p-3 mb-3"
          >
            <div className="flex-grow-1">
              <h6 className="d-flex align-items-center mb-2">
                <span className="fw-bold">{exportItem.title}</span>
                {exportItem.isNew && (
                  <span className="badge bg-warning ms-2">NEW</span>
                )}
              </h6>
              <div className="d-flex flex-wrap">
                <p className="mb-1 me-3">{exportItem.sharedDate}</p>
                <p className="mb-1 me-3">Shared by {exportItem.sharedBy}</p>
                <p className="mb-1">Expires {exportItem.expires}</p>
              </div>
            </div>
            <div className="mt-2 mt-md-0 ms-md-auto">
              <button className="btn btn-success btn-sm rounded-4 d-flex align-items-center text-nowrap">
                View Full Export
                <i className="icon-sa-enter ms-2"></i>{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayEquity;
