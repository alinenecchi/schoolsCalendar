import React, { useState, useContext } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import { ContactContext } from "../../../context/contact-context";
import ButtonHorizontal from "../../molecules/button-horizontal";
import Title from "../../atoms/title";
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
      <div className={css["result"]}>
        <Title className={css["title"]}>Lista de Eventos</Title>
        <Table className={css["table-container"]} celled striped selectable>
          <Table.Header className={css["table-header"]}>
            <Table.Row className={css["table-row"]}>
              <Table.HeaderCell className={css["table-th"]}>
                Id
              </Table.HeaderCell>
              <Table.HeaderCell className={css["table-th"]}>
                Nome da tarefa
              </Table.HeaderCell>
              <Table.HeaderCell className={css["table-th"]}>
                Data
              </Table.HeaderCell>
              <Table.HeaderCell className={css["table-th"]}>
                Descrição
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body className={css["table-body"]}>{rows}</Table.Body>
        </Table>
        {show && (
          <ButtonHorizontal
            className={css["button-remove"]}
            style="orange"
            disabled={!selectedId}
            onClick={onRemoveUser}
          >
            Remover Evento
          </ButtonHorizontal>
        )}
      </div>
    </div>
  );
}
