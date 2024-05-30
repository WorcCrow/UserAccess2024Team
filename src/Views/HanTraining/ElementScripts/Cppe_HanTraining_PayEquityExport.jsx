import PayExportFilter from "./Cppe_HanTraining_PayExportFilter";
import PayExportItem from "./Cppe_HanTraining_PayExportItem";
import { useEffect, useState } from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";

const PayEquityExport = () => {
  const [exportItems, SetExportItems] = useState([]);

  useEffect(() => {
    function setDefaultExportItems() {
      SetExportItems([
        {
          title: "IndividualAnalysisDashboardExport",
          tag: "NEW",
          summaries: [
            "Shared today",
            "Shared by HanDoan",
            "Expires September 20, 2022",
          ],
        },
        {
          title: "IndividualAnalysisDashboardExport",
          tag: "",
          summaries: [
            "Shared today",
            "Shared by HanDoan",
            "Expires September 20, 2022",
          ],
        },
        {
          title: "IndividualAnalysisDashboardExport",
          tag: "",
          summaries: [
            "Shared today",
            "Shared by HanDoan",
            "Expires September 20, 2022",
          ],
        },
      ]);
    }
    setDefaultExportItems();
  }, []);

  return (
    <>
      <div className="pay-export-filter-mobile d-block d-md-none">
        <div className="row">
          <div className="col">
            <PayExportFilter />
          </div>
        </div>
      </div>
      <div className="pay-equity-export">
        {/* <div className="row">
          <Tabs
            defaultActiveKey="equityExport"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="equityView" title="Pay Equity Executive View">
              Pay Equity Executive View
            </Tab>
            <Tab eventKey="equityExport" title="Pay Equity Exports">
              Pay Equity Exports
            </Tab>
          </Tabs>
        </div> */}
        <div className="row">
          <div className="col-12 col-sm-12">
            <div className="pay-equity-export-title">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="section-title">
                    <h4>Pay Equity Exports Shared With You</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-6 d-none d-md-block">
                  <PayExportFilter />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="equity-export-body">
              <div className="row">
                <div className="col-12">
                  {exportItems?.map((item, index) => (
                    <PayExportItem
                      key={index}
                      title={item.title}
                      tag={item.tag}
                      summaries={item.summaries}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayEquityExport;
