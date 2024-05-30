import UserInfo from "./Cppe_HanTraining_UserInfo";
import HelpfulLinks from "./Cppe_HanTraining_HelpfulLinks";
import PayEquityExport from "./Cppe_HanTraining_PayEquityExport";

const PayExport = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-3 left-panel">
        <div className="user-info d-none d-lg-block">
          <UserInfo />
        </div>
        <div className="helpful-links">
          <HelpfulLinks />
        </div>
      </div>
      <div className="col-12 col-lg-9 right-panel">
        <PayEquityExport />
      </div>
    </div>
  );
};

export default PayExport;
