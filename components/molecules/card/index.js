import React from "react";
import Title from "../../atoms/title";
import css from "./loader.module.scss";

function Card(props) {
  const { className = "", children, icon, title, text, ...other } = props;

  return (
    <div
      className={`${css["molecule__card-container"]} ${className}`}
      {...other}
    >
      <div className={css["icon"]}>{icon}</div>
      <Title level={3} className={css["title"]}>{title}</Title>
      <span className={css["text"]}>{text}</span>
      {children}
    </div>
  );
}

export default Card;
