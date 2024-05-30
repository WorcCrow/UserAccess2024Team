const PayExportFilter = () => {
  return (
    <div className="section-filter ">
      <div className="filter-name">
        <span>FILTER BY DATE</span>
      </div>
      <div className="filter-option">
        <div className="dropdown-center">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Action two
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Action three
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PayExportFilter;
