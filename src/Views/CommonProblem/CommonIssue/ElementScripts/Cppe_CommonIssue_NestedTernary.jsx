import { NotHandlingSideEffectsProperlyModal } from "./Cppe_CommonIssue_NotHandlingSideEffectProperlyModal";
import { DirectlyModifyingStateModal } from "./Cppe_CommonIssue_DirectlyModifyingStateModal";
import { IncorrectlyUpdateState } from "./Cppe_CommonIssue_IncorrectlyUpdateStateModal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { NotHandlingSideEffectsProperly2Modal } from "./Cppe_CommonIssue_NotHandlingSideEffectProperly2Modal";
import { ExpensiveRender } from "./Cppe_CommonIssue_ExpensiveRenderModal";
import { NotCleaningSideEffect } from "./Cppe_CommonIssue_NotCleaningSideEffectModal";
import { useModal } from "UtilityScripts/Cppu_Common";

//2 Issue
//Improper use of ternary operator
//Not using Custom Hook

const NestedTernary = () => {
  const [bolIssue1, ShowIssue1, HideIssue1] = useModal();
  const [bolIssue2, ShowIssue2, HideIssue2] = useModal();
  const [bolIssue3, ShowIssue3, HideIssue3] = useModal();
  const [bolIssue4, ShowIssue4, HideIssue4] = useModal();
  const [bolIssue5, ShowIssue5, HideIssue5] = useModal();
  const [bolIssue6, ShowIssue6, HideIssue6] = useModal();

  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 d-flex flex-column gap-3">
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={ShowIssue1}
        >
          Directly Modifying State
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={ShowIssue2}
        >
          Not Handling Side Effect Properly
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={ShowIssue3}
        >
          Not Handling Side Effect Properly2
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={ShowIssue4}
        >
          Incorrectly Update State
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={ShowIssue5}
        >
          Expensive Render
        </Button>
        <Button
          variant="warning"
          className="icon-sa-preview"
          onClick={ShowIssue6}
        >
          Not Cleaning Side Effect
        </Button>
      </div>
      {bolIssue1 && <DirectlyModifyingStateModal HideModal={HideIssue1} />}
      {bolIssue2 && (
        <NotHandlingSideEffectsProperlyModal HideModal={HideIssue2} />
      )}
      {bolIssue3 && (
        <NotHandlingSideEffectsProperly2Modal HideModal={HideIssue3} />
      )}
      {bolIssue4 && <IncorrectlyUpdateState HideModal={HideIssue4} />}
      {bolIssue5 && <ExpensiveRender HideModal={HideIssue5} />}
      {bolIssue6 && <NotCleaningSideEffect HideModal={HideIssue6} />}
    </div>
  );
};

export default NestedTernary;
