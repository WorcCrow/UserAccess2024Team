import { Dropdown } from "react-bootstrap";
import "../../../../Styles/ElementStyles/TuanTraining/PeExport/Cpas_TuanTraining_PeExport _FilterByDate.scss";
const FilterByDate = () => {
  return (
    <div className="col-12 text-end d-flex align-items-center justify-content-end pb-2 d-md-none text-white">
      <span className="me-2 text-size8">FILTER BY DATE </span>
      <div className="custom-select-container">
        <select
          defaultValue="all"
          className="form-select form-select-sm p-0 ps-1 pe-2 custom-select fw-bold"
        >
          <option value="all">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default FilterByDate;
