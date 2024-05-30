const HelpfulLink = ({ icon, title, href, textColor }) => {
  return (
    <li>
      <div className="row">
        <div className="col-1 icon">
          <span className={icon}></span>
        </div>
        <div className="col-11">
          <a className={`font-weight-600 ${textColor}`} href={href}>
            {title}
          </a>
        </div>
      </div>
    </li>
  );
};
export default HelpfulLink;
