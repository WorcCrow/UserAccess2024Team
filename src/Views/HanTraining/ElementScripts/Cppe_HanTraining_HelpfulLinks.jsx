import { useState } from "react";
import HelpfulLink from "./Cppe_HanTraining_HelpfulLink";

const HelpfulLinks = () => {
  let helpLinks = [
    {
      icon: "icon-sa-chaine",
      title: "www.mycompanywebsite.com",
      href: "https://google.com",
      textColor: "text-blue",
    },
  ];

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
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <ul className="list-helpful-link">
                  <li>
                    <div className="row">
                      <div className="col-1 icon">
                        <span className="icon-sa-chaine"></span>
                      </div>
                      <div className="col-11">
                        <a
                          className="text-blue font-weight-600"
                          href="https://google.com"
                        >
                          www.mycompanywebsite.com
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-1 icon">
                        <span className="icon-sa-data_cloud"></span>
                      </div>
                      <div className="col-11">
                        <a
                          className="text-blue font-weight-600"
                          href="https://goolge.com"
                        >
                          BambooHR
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-1 icon">
                        <span className="icon-sa-article"></span>
                      </div>
                      <div className="col-11">
                        <a
                          className="text-blue font-weight-600"
                          href="https://goolge.com"
                        >
                          Company/Employee HandBook
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-1 icon">
                        <span className="icon-sa-service"></span>
                      </div>
                      <div className="col-11">
                        <span className="font-weight-600">Need Help?</span>
                      </div>
                    </div>
                  </li>
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
                  {/* {helpLinks.map((item) => (
                    <HelpfulLink
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      href={item.href}
                      textColor={item.textColor}
                    />
                  ))} */}
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
