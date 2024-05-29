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
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-bold">
          Pay Equity Exports Shared With You
        </h5>
        {exports.map((exportItem, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center border rounded p-3 mb-3"
          >
            <div className="flex-grow-1">
              <h6 className="d-flex align-items-center mb-2">
                <span className="fw-bold">{exportItem.title}</span>
                {exportItem.isNew && (
                  <span className="badge bg-danger ms-2">NEW</span>
                )}
              </h6>
              <div className="d-flex flex-wrap">
                <p className="mb-1 me-3">{exportItem.sharedDate}</p>
                <p className="mb-1 me-3">Shared by {exportItem.sharedBy}</p>
                <p className="mb-1">Expires {exportItem.expires}</p>
              </div>
            </div>
            <div className="ms-3">
              <button className="btn btn-success btn-sm rounded-4 d-flex align-items-center">
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
