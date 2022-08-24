import React from "react";
function CardContent({ title, content }) {
  return (
    <div className="card__content">
      <h3 className="title">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
export default CardContent;
