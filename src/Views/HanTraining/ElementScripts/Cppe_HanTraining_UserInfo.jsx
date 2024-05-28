const UserInfo = () => {
  return (
    <div className="row">
      <div className="col-4">
        <div className="row">
          <div className="col-12">
            <div className="user-logo circle">
              <span>TL</span>
            </div>
          </div>
        </div>
        <div className="edit-profile text-blue">
          <a>Edit Profile</a>
        </div>
      </div>
      <div className="col-8 user-section">
        <span className="name">Ted Leonard, CCP</span>
        <span className="position">CHRO</span>
        <span className="company-name">Massive Dynamics Inc.</span>
      </div>
    </div>
  );
};

export default UserInfo;
