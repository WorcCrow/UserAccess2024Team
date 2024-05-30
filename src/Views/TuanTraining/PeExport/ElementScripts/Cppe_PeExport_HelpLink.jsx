import "../../../../Styles/ElementStyles/TuanTraining/PeExport/Cpas_TuanTraining_PeExport _HelpLink.scss";
import userimage from "../../../../Images/images.png";
const HelpfulLinks = () => {
  return (
    <div className="card mt-4 custom-card">
      <div className="card-body">
        <h6 className="card-title fw-bold text-blue text-size14">
          Helpful Links for Massive Dynamics Inc.
          <i className="icon-sa-angles-up float-end"></i>
        </h6>
        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-2">
            <i className="icon-sa-chaine me-2"></i>
            <a
              href="#"
              title="www.mycompanywebsite.com"
              className="text-decoration-none fw-bold text-size12 text-blue"
            >
              www.mycompanywebsite.com
            </a>
          </li>
          <li className="d-flex align-items-center mb-2">
            <i className="icon-sa-data_cloud me-2"></i>
            <a
              href="#"
              className="text-decoration-none fw-bold text-size12 text-blue"
            >
              BambooHR
            </a>
          </li>
          <li className="d-flex align-items-center mb-2">
            <i className="icon-sa-board me-2"></i>
            <a
              href="#"
              title="Company/Employee Handbook"
              className="text-decoration-none fw-bold text-size12 text-blue"
            >
              Company/Employee Handbook
            </a>
          </li>
        </ul>
        <div className="mt-3 align-items-center">
          <div>
            <h6 className="mb-1 fw-bold text-size12">
              <i className="icon-sa-service me-2 text-size16"></i>Need Help?
            </h6>
          </div>
          <div className="text-overflow-container">
            <img
              src={userimage}
              alt="HR"
              className="rounded-circle ms-3 icon-help"
            />
            <a
              href="#"
              title="Contact your HR Administrator"
              className="text-decoration-none text-size12 text-blue text-overflow"
            >
              Contact your <span className="fw-bold">HR Administrator</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpfulLinks;
