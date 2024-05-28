import { Button } from "react-bootstrap";

const Logout = () => {
  return (
    <div className="logout float-right pr-15px">
      <Button variant="light" className="btn-sign-out">
        Sign Out
      </Button>
    </div>
  );
};

export default Logout;
