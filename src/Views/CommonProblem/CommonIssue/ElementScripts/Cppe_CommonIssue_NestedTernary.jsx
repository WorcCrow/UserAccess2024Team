import { NotHandlingSideEffectsProperlyModal } from "./Cppe_CommonIssue_NotHandlingSideEffectProperlyModal";
import { DirectlyModifyingStateModal } from "./Cppe_CommonIssue_DirectlyModifyingStateModal";
import { IncorrectlyUpdateState } from "./Cppe_CommonIssue_IncorrectlyUpdateStateModal";
import { Button } from "react-bootstrap";
import { useModal } from "UtilityScripts/Cppu_Common";


const DirectlyModifyingState = () => {
   const [bolIssue1, ShowIssue1, HideIssue1] = useModal();
   const [bolIssue2, ShowIssue2, HideIssue2] = useModal();
   const [bolIssue3, ShowIssue3, HideIssue3] = useModal();

   return (
      <div className="d-flex justify-content-center">
         <div className="w-50 d-flex flex-column gap-3">
            <Button variant="warning" onClick={ShowIssue1}>Directly Modifying State</Button>
            <Button variant="warning" onClick={ShowIssue2}>Not Handling Side Effect Properly</Button>
            <Button variant="warning" onClick={ShowIssue3}>Incorrectly Update State</Button>
         </div>
         {
            bolIssue1 ? <DirectlyModifyingStateModal HideModal={HideIssue1} /> :
               bolIssue2 ? <NotHandlingSideEffectsProperlyModal HideModal={HideIssue2} /> :
                  bolIssue3 ? <IncorrectlyUpdateState HideModal={HideIssue3} /> :
                     <></>
         }
      </div>
   );
};



export default DirectlyModifyingState;