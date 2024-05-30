import { useEffect, useState } from "react";
import HelpfulLink from "./Cppe_HanTraining_HelpfulLink";

const HelpfulLinks = () => {
  const [helpLinks, setHelpLinks] = useState([]);

  useEffect(() => {
    function setDefaultHelpLinks() {
      setHelpLinks([
        {
          icon: "icon-sa-chaine",
          title: "www.mycompanywebsite.com",
          href: "https://google.com",
          textColor: "text-blue",
        },
        {
          icon: "icon-sa-data_cloud",
          title: "BambooHR",
          href: "https://google.com",
          textColor: "text-blue",
        },
        {
          icon: "icon-sa-article",
          title: "Company/Employee HandBook",
          href: "https://google.com",
          textColor: "text-blue",
        },
        {
          icon: "icon-sa-service",
          title: "Need Help?",
          href: "https://google.com",
          textColor: "text-black",
        },
      ]);
    }
    setDefaultHelpLinks();
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <div className="accordion" id="accordionPanel">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button text-blue font-weight-700"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Helpful Links for Massive Dynamics Inc.
                <i className="icon-sa-angles-up"></i>
                <i className="icon-sa-angles-down"></i>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <ul className="list-helpful-link">
                  {helpLinks.map((item) => (
                    <HelpfulLink
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      href={item.href}
                      textColor={item.textColor}
                    />
                  ))}
                  <li>
                    <div className="row">
                      <div className="col-1 icon"></div>
                      <div className="col-1">
                        <img src=""></img>
                      </div>
                      <div className="col-10">
                        <span className="text-blue font-weight-0">
                          Contact your{" "}
                        </span>
                        <span className="font-weight-700 text-blue">
                          HR Manager
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpfulLinks;
