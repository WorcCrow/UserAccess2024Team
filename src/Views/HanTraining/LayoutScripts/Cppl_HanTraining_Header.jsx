import ExportHeader from "../ElementScripts/Cppe_HanTraining_ExportHeader";
import Logout from "../ElementScripts/Cppe_HanTraining_Logout";

const Header = () => {
  return (
    <div className="row">
      <div className="col-6 col-sm-6">
        <ExportHeader />
      </div>
      <div className="col-6 col-sm-6 d-block d-sm-none">
        <div className="user-profile-mobile">
          <div className="user-logo user-logo-mobile">
            <span>TL</span>
          </div>
          <div className="user-option">
            <div class="dropdown-center">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Action two
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Action three
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 d-none d-sm-block">
        <Logout></Logout>
      </div>
    </div>
  );
};

export default Header;
