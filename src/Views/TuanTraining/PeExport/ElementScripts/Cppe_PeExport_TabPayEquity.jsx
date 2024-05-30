import { Dropdown } from "react-bootstrap";
import "../../../../Styles/ElementStyles/TuanTraining/PeExport/Cpas_TuanTraining_PeExport _TabPayEquity.scss";
const TabPayEquity = () => {
  return (
    <Dropdown className="d-md-none pb-2 custom-dropdown">
      <Dropdown.Toggle variant="info w-100 text-start text-dark-blue fw-bold">
        Pay Equity Exports <span className="badge bg-warning ms-2">NEW</span>{" "}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#">Pay Equity Executive View</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TabPayEquity;
