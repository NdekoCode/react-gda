import React from "react";
import { Link } from "react-router-dom";
function Button({ linkDetail, item }) {
  const { classLink, name, href } = linkDetail;
  console.log(classLink, name, href);
  return (
    <React.Fragment>
      {item === "link" ? (
        <Link to={href} className={classLink}>
          {name}
        </Link>
      ) : (
        <button className={classLink}>{name}</button>
      )}
    </React.Fragment>
  );
}
export default Button;
