import UserInfo from "../ElementScripts/Cppe_HanTraining_UserInfo";
import HelpfulLinks from "../ElementScripts/Cppe_HanTraining_HelpfulLinks";
import PayEquityExport from "../ElementScripts/Cppe_HanTraining_PayEquityExport";

const PayExport = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-3 left-panel">
        <div className=" user-info">
          <UserInfo />
        </div>
        <div className="helpful-links">
          <HelpfulLinks />
        </div>
      </div>
      <div className="col-12 col-sm-9 right-panel">
        <PayEquityExport />
      </div>
    </div>
  );
};

export default PayExport;
