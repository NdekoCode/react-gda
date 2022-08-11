import React from "react";
function Link({ linkDetail }) {
  const { classLink, name, href } = linkDetail;
  console.log(classLink, name, href);
  return (
    <a href={href} className={classLink}>
      {name}
    </a>
  );
}
export default Link;
