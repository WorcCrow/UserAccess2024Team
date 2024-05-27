import React from "react";

export default function UserInfo() {
  return (
    <div className="card">
      <div class="card-body">
        <div className="row">
          <div className="col-4 d-flex flex-column align-items-center">
            <div className="userinfo_avt-container">
              <span className="userinfo_avt-text">TL</span>
            </div>
            <span className="userinfo_edit-text-action">Edit Profile</span>
          </div>
          <div className="col-8">
            <p className="userinfo_user-title">Ted Leonard, CCP</p>
            <p className="userinfo_user-subtitle">CHRO</p>
            <p className="userinfo_user-dscription">Massive Dynamic Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
