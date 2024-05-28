import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//Lazy-loaded components
const CommonIssue = lazy(() =>
  import("Views/CommonProblem/CommonIssue/LayoutScripts/Cppl_CommonIssue")
);

const BrianTraining = lazy(() =>
  import("Views/BrianTraining/LayoutScripts/Cppl_BrianTraining_UserAccess")
);

const Loading = () => {
  return <>Loading...</>;
};
const RouterComponent = () => {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Routes>
        <Route path="common-issue" element={<CommonIssue />}></Route>
        <Route path="brian-training" element={<BrianTraining />}></Route>
      </Routes>
    </Suspense>
  );
};

export default RouterComponent;
