import React from "react";
function Button({ linkDetail, item }) {
  const { classLink, name, href } = linkDetail;
  console.log(classLink, name, href);
  return (
    <React.Fragment>
      {item === "link" ? (
        <a href={href} className={classLink}>
          {name}
        </a>
      ) : (
        <button className={classLink}>{name}</button>
      )}
    </React.Fragment>
  );
}
export default Button;
