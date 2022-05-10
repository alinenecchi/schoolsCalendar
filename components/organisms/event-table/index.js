import React, { useState, useContext } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import { ContactContext } from "../../../context/contact-context";
import css from "./eventTable.module.scss";

export default function EventTable(props) {
  const { className = "", children, style, show = true, ...other } = props;
  // Subscribe to `contacts` state and access dispatch function
  const [state, dispatch] = useContext(ContactContext);
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();

  const delContact = (id) => {
    dispatch({
      type: "DEL_EVENT",
      payload: id,
    });
  };

  const onRemoveUser = () => {
    delContact(selectedId);
    setSelectedId(null); // Clear selection
  };

  const rows = state.contacts.map((contact) => (
    <Table.Row
      key={contact.id}
      onClick={() => setSelectedId(contact.id)}
      active={contact.id === selectedId}
    >
      <Table.Cell>{contact.id}</Table.Cell>
      <Table.Cell>{contact.eventName}</Table.Cell>
      <Table.Cell>{contact.date}</Table.Cell>
      <Table.Cell>{contact.description}</Table.Cell>
    </Table.Row>
  ));

  return (
    <div
      className={`${css["organism__event-table-container"]} ${className}`}
      data-style={style}
    >
      <Segment>
        <Table celled striped selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Nome da tarefa</Table.HeaderCell>
              <Table.HeaderCell>Data</Table.HeaderCell>
              <Table.HeaderCell>Descrição</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                {show && (
                  <Button
                    floated="right"
                    icon
                    labelPosition="left"
                    color="red"
                    size="small"
                    disabled={!selectedId}
                    onClick={onRemoveUser}
                  >
                    <Icon name="trash" /> Remover Evento
                  </Button>
                )}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    </div>
  );
}
