import Footer from "../ElementScripts/Cppe_BrianTraining_Footer";
import Header from "../ElementScripts/Cppe_BrianTraining_Header";
import ShareInfo from "../ElementScripts/Cppe_BrianTraining_ShareInfo";
import UserInfo from "../ElementScripts/Cppe_BrianTraining_UserInfo";

export default function UserAccess() {
  return (
    <div className="sa-tmpl-dashboard">
      <Header />
      <div className="welcome-text">
        <h2>Welcome Ted!</h2>
      </div>
      <div className="row">
        <UserInfo />
        <ShareInfo />
      </div>
      <Footer />
    </div>
  );
}
