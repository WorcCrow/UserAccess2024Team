import React from "react";
import Section from "../ElementScripts/Cppe_HanTraining_Section";
import PayExport from "../ElementScripts/Cppe_HanTraining_PayExport";
import Header from "../ElementScripts/Cppe_HanTraining_Header";
import styles from "Styles/HanTraining/Cpps_HanTraining_PayExport.scss";

const PayExportLayout = () => {
  return (
    <div className="pay-export">
      <Section>
        <Header />
      </Section>
      <Section>
        <PayExport />
      </Section>
    </div>
  );
};

export default PayExportLayout;
