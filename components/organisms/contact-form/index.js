import React, { useState, useContext } from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import _ from "lodash";
import { ContactContext } from "../../../context/contact-context";

export default function ContactForm() {
  const eventName = useFormInput("");
  const description = useFormInput("");
  const date = useFormInput("");
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(ContactContext);

  const onSubmit = () => {
    dispatch({
      type: "ADD_EVENT",
      payload: { id: _.uniqueId(10), eventName: eventName.value, description: description.value, date: date.value }
    });
    // Reset Form
    eventName.onReset();
    date.onReset();
    description.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <Input placeholder="Nome da tarefa" {...eventName} required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Data" {...date} type="date" required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Descrição" {...description} type="text" required />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              Novo evento
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset
  };
}
