import React from "react";
import CardContent from "./CardContent";
function CardBody() {
  const cardContents = [
    {
      title: "About",
      content:
        "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
    },
    {
      title: "Interests",
      content:
        "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
    },
  ];
  return (
    <div className="card__body">
      {cardContents.map(({ title, content }, index) => (
        <CardContent key={index} title={title} content={content} />
      ))}
    </div>
  );
}
export default CardBody;
