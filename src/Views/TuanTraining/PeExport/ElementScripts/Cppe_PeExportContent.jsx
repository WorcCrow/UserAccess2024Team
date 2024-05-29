import Header from "./Cppe_PeExport_Header";
import Welcome from "./Cppe_PeExport_Welcome";
import Profile from "./Cppe_PeExport_Profile";
import HelpfulLinks from "./Cppe_PeExport_HelpLink";
import PayEquity from "./Cppe_PeExport_PayEquity";
const PeExport = () => {
  return (
    <div className="row">
      <Header />
      <Welcome />
      <div className="col-3">
        <Profile />
        <HelpfulLinks />
      </div>
      <div className="col-9">
        <PayEquity />
      </div>
    </div>
  );
};

export default PeExport;
