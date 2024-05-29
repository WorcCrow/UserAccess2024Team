import { NotHandlingSideEffectsProperlyModal } from "./Cppe_CommonIssue_NotHandlingSideEffectProperlyModal";
import { DirectlyModifyingStateModal } from "./Cppe_CommonIssue_DirectlyModifyingStateModal";
import { IncorrectlyUpdateState } from "./Cppe_CommonIssue_IncorrectlyUpdateStateModal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { NotHandlingSideEffectsProperly2Modal } from "./Cppe_CommonIssue_NotHandlingSideEffectProperly2Modal";
import { ExpensiveRender } from "./Cppe_CommonIssue_ExpensiveRenderModal";
import { NotCleaningSideEffect } from "./Cppe_CommonIssue_NotCleaningSideEffectModal";
import CustomHook from "./Cppe_CommonIssue_CustomHook";

//2 Issue
//Improper use of ternary operator
//Not using Custom Hook
const NestedTernary = () => {
  const [showIssue1, hideIssue1, bolIssue1] = CustomHook();
  const [showIssue2, hideIssue2, bolIssue2] = CustomHook();
  const [showIssue3, hideIssue3, bolIssue3] = CustomHook();
  const [showIssue4, hideIssue4, bolIssue4] = CustomHook();
  const [showIssue5, hideIssue5, bolIssue5] = CustomHook();
  const [showIssue6, hideIssue6, bolIssue6] = CustomHook();

  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 d-flex flex-column gap-3">
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue1}
        >
          Directly Modifying State
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue2}
        >
          Not Handling Side Effect Properly
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue3}
        >
          Not Handling Side Effect Properly2
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue4}
        >
          Incorrectly Update State
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue5}
        >
          Expensive Render
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={showIssue6}
        >
          Not Cleaning Side Effect
        </Button>
      </div>
      {bolIssue1 && <DirectlyModifyingStateModal HideModal={hideIssue1} />}
      {bolIssue2 && (
        <NotHandlingSideEffectsProperlyModal HideModal={hideIssue2} />
      )}
      {bolIssue3 && (
        <NotHandlingSideEffectsProperly2Modal HideModal={hideIssue3} />
      )}
      {bolIssue4 && <IncorrectlyUpdateState HideModal={hideIssue4} />}
      {bolIssue5 && <ExpensiveRender HideModal={hideIssue5} />}
      {bolIssue6 && <NotCleaningSideEffect HideModal={hideIssue6} />}
    </div>
  );
};

export default NestedTernary;
