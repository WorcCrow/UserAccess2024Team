import "../../../../Styles/ElementStyles/TuanTraining/PeExport/Cpas_TuanTraining_PeExport _Profile.scss";
const Profile = () => {
  return (
    <div className="card mb-3 mx-auto custom-card">
      <div className="row g-0 align-items-center">
        <div className="col-4 d-flex flex-column align-items-center text-center">
          <div className="profile-pic bg-success text-white d-flex align-items-center justify-content-center rounded-circle fw-bold">
            TL
          </div>
          <div className="profile-link">
            <a href="#" className="text-decoration-none fw-bold text-blue">
              Edit Profile
            </a>
          </div>
        </div>
        <div className="col-8 profile-info">
          <div className="card-body">
            <h5 className="card-title fw-bold">Ted Leonard, CCP</h5>
            <span>CHRO</span>
            <p>Massive Dynamics Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
