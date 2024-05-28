import React from "react";
import Logo from "./Cppl_HanTraining_Logo";
import Section from "../ElementScripts/Cppe_HanTraining_Section";
import PayExport from "./Cppl_HanTraining_PayExport";
import Header from "./Cppl_HanTraining_Header";
import styles from "Styles/HanTraining/Cpps_HanTraining_PayExport.scss";

const PayExportLayout = () => {
  return (
    <div className="pay-export">
      {/* <Section>
        <Logo />
      </Section> */}
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
