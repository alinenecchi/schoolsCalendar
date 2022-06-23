import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import Title from "../../atoms/title";
import ModalConfirmation from "../../molecules/modal-confirmation";
import Warning from "../../atoms/warning-circle";
import Loader from "../../atoms/loader";
import Success from "../../atoms/success-circle";
import css from "./create-readme-events.module.scss";
import ButtonHorizontal from "../../molecules/button-horizontal";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function CreateReadmeEvents(props) {
  const {
    className = "",
    children,
    sectionHero,
    show = true,
    style,
    ...other
  } = props;
  const [APIData, setAPIData] = useState([]);
  const [lastError, setLastError] = useState(null);
  const isLarge = useMediaQuery("(min-width:767px)");
  const [state, setState] = useState("default");

  function onClose() {
    setState("default");
  }
  function onCloseSuccess() {
    getData();
  }

  React.useEffect(() => {
    getData();
  })

  const getData = () => {
    setState("loading");
    const url = `https://schoolscalendar-heroku.herokuapp.com/api/task`;
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        const error =
          (data && "Erro ao atualizar os dados dos eventos") || response.status;
        setLastError(data.message || error);
        setState("error");
        return Promise.reject(error);
      }
      setAPIData(data);
      setState("default");
    });
  };

  const onDelete = async (id) => {
    setState("loading");
    const url = `https://schoolscalendar-heroku.herokuapp.com/api/task/`;
    const response = await fetch(url + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setState("success");
      })
      .catch((err) => {
        console.error(err);
        setState("error");
      });
  };
  return (
    <div
      className={`${css["organism__create-readme-container"]} ${className}`}
      data-style={style}
      {...other}
    >
      {state === "loading" ? (
        <ModalConfirmation
          style="loader"
          alert={<Loader />}
          title="Isso deve durar apenas alguns segundos."
          content="Estamos buscando a lista de eventos, aguarde"
        />
      ) : null}

      {state === "error" ? (
        <ModalConfirmation
          style="warning"
          alert={<Warning />}
          title="Erro"
          content="Tente novamente"
          onClick={onClose}
          buttonText={"Tentar novamente"}
        />
      ) : null}
      {state === "success" ? (
        <ModalConfirmation
          style="success"
          alert={<Success />}
          title={`Atarefa foi deletada com sucesso`}
          onClick={onCloseSuccess}
          buttonText={"Fechar"}
        />
      ) : null}
      {state === "default" && (
        <>
         <div className={css["result"]}>
        <Title className={css["title"]}>Lista de Eventos</Title>
          <Table singleLine>
            {isLarge ? (
              <Table.Header className={css["table-header"]}>
                <Table.Row className={css["table-row"]}>
                  <Table.HeaderCell>Id do evento</Table.HeaderCell>
                  <Table.HeaderCell>Nome do evento</Table.HeaderCell>
                  <Table.HeaderCell>Descrição</Table.HeaderCell>
                  <Table.HeaderCell>Data</Table.HeaderCell>
                  <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            ) : null}

            <Table.Body>
              {APIData?.map((data, index) => {
                return (
                  <>
                    <Table.Row key={index}>
                      <Table.Cell>
                        {!isLarge ? "Id:" : null} {data.id}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        {!isLarge ? "Nome da tarefa:" : null} {data.name}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        {!isLarge ? "Descrição da tarefa:" : null} {data.description}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        {!isLarge ? "Data:" : null} {data.date}
                      </Table.Cell>
                      <Table.Cell>
                        <ButtonHorizontal
                          style="orange"
                          onClick={() => onDelete(data.id)}
                        >
                          Delete
                        </ButtonHorizontal>
                      </Table.Cell>
                    </Table.Row>
                  </>
                );
              })}
            </Table.Body>
          </Table>
          </div>
        </>

      )}
    </div>
  );
}
