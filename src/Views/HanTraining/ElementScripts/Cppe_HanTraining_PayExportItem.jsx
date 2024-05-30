import { Button } from "react-bootstrap";
import PayExportItemSummary from "./Cppe_HanTraining_PayExportItemSummary";
import React, { useEffect, useState } from "react";

const PayExportItem = ({ title, tag, summaries }) => {
  return (
    <div className="equity-export-item">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-9">
          <div className="equity-export-title">
            <div className="equity-title">
              <span>{title}</span>
              {tag !== "" ? <span className="title-tag">{tag}</span> : ""}
            </div>
            <div className="equity-summary">
              {summaries?.map((item, index) => (
                <PayExportItemSummary key={index} title={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-3 view-export">
          <div className="equity-export-button">
            <Button className="float-right" variant="success">
              View Full Export
              <i className="icon-sa-arrow-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayExportItem;
