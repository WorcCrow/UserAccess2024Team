import ExportHeader from "../ElementScripts/Cppe_HanTraining_ExportHeader";
import Logout from "../ElementScripts/Cppe_HanTraining_Logout";

const Header = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-6">
        <ExportHeader />
      </div>
      <div className="col-12 col-sm-6">
        <Logout></Logout>
      </div>
    </div>
  );
};

export default Header;
