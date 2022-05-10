import React from "react";
import { Segment, Header } from "semantic-ui-react";
import EventTable from "../../components/organisms/event-table";
import { ContactContextProvider } from "../../context/contact-context";

export default function Contacts() {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">Eventos</Header>
        <EventTable show = {false}/>
      </Segment>
    </ContactContextProvider>
  );
}
