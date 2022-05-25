import React from "react";
import { Segment } from "semantic-ui-react";
import Title from "../components/atoms/title";
import Bell from "../components/icons/bell";
import ContactForm from "../components/organisms/contact-form";
import ContactTable from "../components/organisms/event-table";
import { ContactContextProvider } from "../context/contact-context";
import css from "./contact.module.scss";

export default function Contacts(props) {
  const { className = "", children, sectionHero, ...other } = props;
  return (
    <div
      className={`${css["page__contact-container"]} ${className}`}
      {...other}
    >
      <ContactContextProvider>
        <div className={css["container"]}>
          <div className={css["header"]}>
            <Title className={css["title"]}>
              <Bell className={css["icon-bell"]}/> 
              Adicionar Eventos
            </Title>
          </div>
          <ContactForm />
          {/* <ContactTable /> */}
        </div>
      </ContactContextProvider>
    </div>
  );
}
