import React, { useState, useContext } from "react";
import { Input, Button, Label, Table, Icon, Segment } from "semantic-ui-react";
import ButtonHorizontal from "../../molecules/button-horizontal";
import _ from "lodash";
import { ContactContext } from "../../../context/contact-context";
import css from "./contact-form.module.scss";

export default function ContactForm(props) {
  const {
    className = "",
    children,
    sectionHero,
    show = true,
    style,
    ...other
  } = props;
  const [selectedId, setSelectedId] = useState();

  const eventName = useFormInput("");
  const description = useFormInput("");
  const date = useFormInput("");
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(ContactContext);

  const delContact = (id) => {
    dispatch({
      type: "DEL_EVENT",
      payload: id,
    });
  };

  const onRemoveUser = () => {
    delContact(selectedId);
    setSelectedId(null);
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

  const onSubmit = () => {
    dispatch({
      type: "ADD_EVENT",
      payload: {
        id: _.uniqueId(10),
        eventName: eventName.value,
        description: description.value,
        date: date.value,
      },
    });
    // Reset Form
    eventName.onReset();
    date.onReset();
    description.onReset();
  };

  return (
    <div
      className={`${css["organism__contact-form-container"]} ${className}`}
      {...other}
    >
      <div className={css["container"]}>
        <form className={css["form"]} onSubmit={onSubmit}>
          <div className={css["form-group"]}>
            <Label>Nome da tarefa:</Label>
            <Input placeholder="Nome da tarefa" {...eventName} required />
          </div>

          <div className={css["form-group"]}>
            <Label>Data:</Label>
            <Input
              placeholder="Data"
              className={css["input"]}
              {...date}
              type="date"
              required
            />
          </div>

          <div className={css["form-group"]}>
            <Label>Descrição:</Label>
            <Input
              placeholder="Descrição"
              {...description}
              type="text"
              required
            />
          </div>

          <ButtonHorizontal className={css["button"]} fluid style="orange">
            Novo evento
          </ButtonHorizontal>
        </form>

        <div className={css["result"]}>
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
    </div>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
}
