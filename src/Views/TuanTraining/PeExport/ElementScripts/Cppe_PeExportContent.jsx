import Header from "./Cppe_PeExport_Header";
import Welcome from "./Cppe_PeExport_Welcome";
import Profile from "./Cppe_PeExport_Profile";
import HelpfulLinks from "./Cppe_PeExport_HelpLink";
import TabPayEquity from "./Cppe_PeExport_TabPayEquity";
import PayEquity from "./Cppe_PeExport_PayEquity";
import FilterByDate from "./Cppe_PeExport_FilterByDate";
const PeExport = () => {
  return (
    <div className="row">
      <Header />
      <Welcome />
      <div className="col-3 d-none d-md-block">
        <Profile />
        <HelpfulLinks />
      </div>
      <div className="col-12 col-md-9">
        <TabPayEquity />
        <FilterByDate />
        <PayEquity />
      </div>
    </div>
  );
};

export default PeExport;
