import { Image } from "react-bootstrap";

export default function UserInfo() {
  return (
    <div className="col-lg-3 col-sm-12 left-col display-custom">
      <div className="user-infor">
        <div className="image-profile">TL</div>
        <div className="profile-info">
          <strong>Ted Leonard, CCP</strong>
          <div>CHRO</div>
          <div>Massive Dynamics Inc</div>
        </div>
        <div className="edit-profile">
          <a href="#">Edit profile</a>
        </div>
      </div>
      <div className="help-link">
        <div className="help-link-item">
          <a href="#">
            <strong>Helpful Links for Massive Dynamics Inc.</strong>
            <span className="icon-sa-angles-up button-icon"></span>
          </a>
        </div>
        <div className="help-link-item">
          <a href="#">
            <span className="icon-sa-chaine button-icon"></span>
            <strong>www.mycompanywebsite.com</strong>
          </a>
        </div>
        <div className="help-link-item">
          <a href="#">
            <span className="icon-sa-data_cloud button-icon"></span>
            <strong>BambooHR</strong>
          </a>
        </div>
        <div className="help-link-item">
          <a href="#">
            <span className="icon-sa-overview button-icon"></span>
            <strong>Company/Employee Handbook</strong>
          </a>
        </div>
        <div className="help-link-item">
          <span className="icon-sa-comment button-icon"></span>
          <strong>Need Help?</strong>
        </div>
        <div className="help-link-item">
          <a href="#">
            <Image
              className="contact-hr-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyE0-O33KOT6r2ALdps4vpWiTY_erO7TgAnw&s"
            />
            Contact your <strong>HR Adminstrator</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
