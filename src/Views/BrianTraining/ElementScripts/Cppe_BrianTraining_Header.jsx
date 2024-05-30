export default function Header() {
  return (
    <div>
      <nav className="sa-header-global navbar navbar-static-top">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">
            <img
              src="https://www.salary.com/research/Styles/Salary/img/salary-logo-reversed.svg"
              className="sa-logo"
              alt="Salary.com"
            />
          </a>
        </div>
        <div className="sa-header-global-menu">
          <div className="collapse navbar-collapse sa-header-global-navcontainer">
            <div className="sa-header-global-menu-content">
              <div className="sa-header-global-nav-btns">
                <div className="sa-header-global-nav-btns-desc icon-i margin-bottom0">
                  <span className="sa-btn-cta sa-header-global-btns-search-demo">
                    <a className="btn header_global-demo" href="#">
                      Sign Out
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
