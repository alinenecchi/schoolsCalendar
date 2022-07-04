import React from "react";
import Title from "../../atoms/title";
import Line from "../../icons/line";
import css from "./card.module.scss";

function Card(props) {
  const { className = "", children, icon, title, style, text, text2, ...other } = props;

  return (
    <div
      className={`${css["molecule__card-container"]} ${className}`}
      data-style={style}
      {...other}
    >
      <div className={css["icon"]}>{icon}</div>
      <Title level={3} className={css["title"]}>
        {title}
      </Title>
      <div className={css["line"]}>
        <Line />
      </div>
      <span className={css["text"]}>{text}</span>
      <span className={css["text2"]}>{text2}</span>
      {children}
    </div>
  );
}

export default Card;
