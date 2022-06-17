import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import ModalConfirmation from "../../molecules/modal-confirmation";
import { useRouter } from "next/router";
import Warning from "../../atoms/warning-circle";
import Loader from "../../atoms/loader";
import Success from "../../atoms/success-circle";
import { isEmpty, omit } from "lodash";
import css from "./create-readme.module.scss";
import ButtonHorizontal from "../../molecules/button-horizontal";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function CreateReadme(props) {
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

  const options = [
    { id: 1, type: "Professor", name: "Teacher" },
    { id: 2, type: "Estudante", name: "Student" },
    { id: 3, type: "Admin", name: "Administrador" },
  ];

  const [state, setState] = useState("default");
  const [checkedList, setCheckedList] = React.useState(uncheckAll(options));

  function uncheckAll(options) {
    return options.map((option) => ({
      ...option,
      checked: false,
    }));
  }

  function toggleOption(id, checked) {
    return options.map((option) =>
      option.id === id ? { ...option, checked } : option
    );
  }

  const changeList = (id, checked) => {
    const newCheckedList = toggleOption(id, checked);
    setCheckedList(newCheckedList);
  };

  function onClose() {
    setState("default");
  }
  function onCloseSuccess() {
    getData();
  }

  const [optionsStatus, setOptionsStatus] = useState({
    type: "",
    name: "",
  });

  console.log(optionsStatus);

  const getData = () => {
    setState("loading");
    const url = `https://schoolscalendar-heroku.herokuapp.com/api/${optionsStatus.name}`;
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        const error =
          (data && "Erro ao atualizar os dados do login") || response.status;
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
    const url = `https://schoolscalendar-heroku.herokuapp.com/api/${optionsStatus.name}/`;
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
          content="Estamos validando a requisição, aguarde"
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
          title={`O usuário foi deletado com sucesso`}
          onClick={onCloseSuccess}
          buttonText={"Fechar"}
        />
      ) : null}
      {state === "default" && (
        <>
          <div className={css["checked"]}>
            {checkedList.map(({ id, name, type, checked }) => (
              <>
                <div className={css["checked-item"]}>
                  <label key={id}>
                    <input
                      key={id}
                      type="radio"
                      name="options"
                      value={
                        !!checked &&
                        (optionsStatus.type = type) &&
                        (optionsStatus.name = name)
                      }
                      checked={checked}
                      onChange={(e) => changeList(id, e.target.checked)}
                    />
                    {type}
                  </label>
                </div>
              </>
            ))}
            <ButtonHorizontal
              style="transparent"
              disabled={!optionsStatus.name}
              onClick={getData}
            >
              Ver Lista {optionsStatus.type}
            </ButtonHorizontal>
          </div>
          <Table singleLine>
            {isLarge ? (
              <Table.Header className={css["table-header"]}>
                <Table.Row className={css["table-row"]}>
                  <Table.HeaderCell>Id</Table.HeaderCell>
                  <Table.HeaderCell>Nome</Table.HeaderCell>
                  <Table.HeaderCell>E-mail</Table.HeaderCell>
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
                        {!isLarge ? "Nome:" : null} {data.name}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        {!isLarge ? "E-mail:" : null} {data.email}
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
        </>
      )}
    </div>
  );
}
