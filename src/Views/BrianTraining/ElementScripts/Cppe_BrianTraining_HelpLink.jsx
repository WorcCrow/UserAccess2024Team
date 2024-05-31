import { Card, Image, useAccordionButton, Accordion } from "react-bootstrap";
export default function HelpLink() {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <a href="#" onClick={decoratedOnClick}>
        <strong>Helpful Links for Massive Dynamics Inc.</strong>
        <span className="icon-sa-angles-up button-icon"></span>
      </a>
    );
  }
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0" />
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="help-link-item">
              <a href="#">
                <span className="icon-sa-chaine button-icon"></span>
                <strong>www.mycompanywebsite.com</strong>
              </a>
            </div>
            <div className="help-link-item">
              <a href="#">
                <span className="icon-sa-data_cloud button-icon"></span>
                <strong>BambooHR</strong>
              </a>
            </div>
            <div className="help-link-item">
              <a href="#">
                <span className="icon-sa-overview button-icon"></span>
                <strong>Company/Employee Handbook</strong>
              </a>
            </div>
            <div className="help-link-item">
              <span className="icon-sa-comment button-icon"></span>
              <strong>Need Help?</strong>
            </div>
            <div className="help-link-item">
              <a href="#">
                <Image
                  className="contact-hr-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyE0-O33KOT6r2ALdps4vpWiTY_erO7TgAnw&s"
                />
                Contact your <strong>HR Adminstrator</strong>
              </a>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
