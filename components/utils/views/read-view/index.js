import React from "react";
import CreateReadmeEvents from "../../../organisms/create-readme-events";
import css from "./read-view.module.scss";

export default function Contacts(props) {
  const { className = "", children, sectionHero, show = true, ...other } = props;
  return (
    <div
      className={`${css["page__read-view-container"]} ${className}`}
      {...other}
    >
      <CreateReadmeEvents show= {show}/>
    </div>
  );
}
