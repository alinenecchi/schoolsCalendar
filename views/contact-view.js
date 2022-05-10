import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ContactForm from "../components/organisms/contact-form";
import ContactTable from "../components/organisms/event-table";
import { ContactContextProvider } from "../context/contact-context";

export default function Contacts() {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">Eventos</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </ContactContextProvider>
  );
}
