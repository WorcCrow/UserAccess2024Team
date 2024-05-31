import { Card, Image, useAccordionButton, Accordion } from "react-bootstrap";
import HelpLink from "./Cppe_BrianTraining_HelpLink";
export default function UserInfo() {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <span onClick={decoratedOnClick}>
        <strong>Helpful Links for Massive Dynamics Inc.</strong>
        <span className="icon-sa-angles-up button-icon"></span>
      </span>
    );
  }
  return (
    <div className="col-lg-3 col-sm-12 left-col">
      <div className="user-infor">
        <div className="image-profile">TL</div>
        <div className="profile-info">
          <strong>Ted Leonard, CCP</strong>
          <div>CHRO</div>
          <div>Massive Dynamics Inc</div>
        </div>
        <div className="edit-profile">
          <a href="#">Edit profile</a>
        </div>
      </div>
      <HelpLink />
    </div>
  );
}
