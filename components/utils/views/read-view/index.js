import React from "react";
import EventTable from "../../components/organisms/event-table";
import { ContactContextProvider } from "../../context/contact-context";
import css from "./read-view.module.scss";

export default function Contacts(props) {
  const { className = "", children, sectionHero, ...other } = props;
  return (
    <div
      className={`${css["page__read-view-container"]} ${className}`}
      {...other}
    >
      <ContactContextProvider>
        <EventTable show={false} />
      </ContactContextProvider>
    </div>
  );
}