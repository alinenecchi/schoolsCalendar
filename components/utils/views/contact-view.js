import React from "react";
import Title from "../../atoms/title";
import Bell from "../../icons/bell";
import EventsFormAdd from "../../organisms/events-form-add";
import css from "./contact.module.scss";

export default function Contacts(props) {
  const { className = "", children, sectionHero, ...other } = props;
  return (
    <div
      className={`${css["page__contact-container"]} ${className}`}
      {...other}
    >
      <div className={css["container"]}>
        <div className={css["header"]}>
          <Title className={css["title"]}>
            <Bell className={css["icon-bell"]} />
            Adicionar Eventos
          </Title>
        </div>
        <EventsFormAdd />
      </div>
    </div>
  );
}
