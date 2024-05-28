import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//Lazy-loaded components
const CommonIssue = lazy(() =>
  import("Views/CommonProblem/CommonIssue/LayoutScripts/Cppl_CommonIssue")
);
const PayExportLayout = lazy(() =>
  import("Views/HanTraining/LayoutScripts/Cppl_HanTraining_PayExportLayout")
);

const Loading = () => {
  return <>Loading...</>;
};
const RouterComponent = () => {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Routes>
        <Route path="common-issue" element={<CommonIssue />}></Route>
        <Route path="pay-export" element={<PayExportLayout />}></Route>
      </Routes>
    </Suspense>
  );
};

export default RouterComponent;
