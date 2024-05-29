import "../../../../Styles/ElementStyles/TuanTraining/PeExport/Cpas_TuanTraining_PeExport _Profile.scss";
const Profile = () => {
  return (
    <div class="card mb-3">
      <div class="row g-0 align-items-center">
        <div class="col-md-4 d-flex flex-column align-items-center">
          <div className="profile-pic bg-success text-white d-flex align-items-center justify-content-center rounded-circle me-3 fw-bold">
            TL
          </div>
          <div className="profile-link">
            <a href="#" className="text-decoration-none fw-bold text-blue">
              Edit Profile
            </a>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fw-bold">Ted Leonard, CCP</h5>
            <span>CHRO</span>
            <p>Massive Dynamics Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
