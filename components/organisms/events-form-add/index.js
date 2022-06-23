import React, { useState, useEffect, useCallback } from "react";
import ButtonHorizontal from "../../molecules/button-horizontal";

import ModalConfirmation from "../../molecules/modal-confirmation";
import Title from "../../atoms/title";
import CreateReadme from "../create-readme";
import Warning from "../../atoms/warning-circle";
import Loader from "../../atoms/loader";
import Success from "../../atoms/success-circle";
import {
  validatePassword,
  validateEmail,
  validateName,
} from "../../../utils/functions";
import { isEmpty } from "lodash";
import _ from "lodash";

import css from "./events-form-add.module.scss";

export default function EventsFormAdd(props) {
  const {
    className = "",
    children,
    sectionHero,
    show = true,
    style,
    ...other
  } = props;

  const [state, setState] = useState("default");
  const [isFormIncomplete, setIsFormIncomplete] = useState(true);
  const [lastError, setLastError] = useState(null);
  const [dataEvents, setDataEvents] = useState({
    name: "",
    description: "",
    date: "",
  });

  function onClose() {
    setState("default");
  }

  console.log(dataEvents);

  const [listShow, setListShow] = useState(false);

  useEffect(() => {
    const isUserEmpty = Object.values(dataEvents).some((x) => isEmpty(x));

    if (isUserEmpty) {
      setIsFormIncomplete(true);
    } else {
      setIsFormIncomplete(false);
    }
  }, [dataEvents]);

  const handleChange = useCallback(
    (event) => {
      setDataEvents({
        ...dataEvents,
        [event.target.name]: event.target.value,
      });
    },
    [dataEvents]
  );

  async function listGet() {
    if (listShow) {
      setListShow(false);
    } else {
      setListShow(true);
    }
  }

  const handleSubmit = (event) => {
    setState("loading");
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: dataEvents.name,
        description: dataEvents.description,
        date: dataEvents.date + "T23:53:20.098Z",
      }),
    };

    console.log("request", requestOptions);

    fetch(`https://schoolscalendar-heroku.herokuapp.com/api/task`, requestOptions)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && "Erro ao enviar os dados") || response.status;
          setLastError(data.message || error);
          setState("error");
          return Promise.reject(error);
        }
        setState("success");
        setDataEvents({
          name: "",
          description: "",
          date: "",
        });
      })
      .catch((error) => {
        setState("error");
        console.error("There was an error!", error);
      });
  };

  return (
    <div
      className={`${css["organism__events-form-add-container"]} ${className}`}
      {...other}
    >
      {state === "loading" ? (
        <ModalConfirmation
          style="loader"
          alert={<Loader />}
          title="Isso deve durar apenas alguns segundos."
          content="Estamos validando o envio dos dados, aguarde"
        />
      ) : null}
      {state === "success" ? (
        <ModalConfirmation
          style="success"
          alert={<Success />}
          title={`O Evento ${dataEvents.name} foi cadastrado com sucesso`}
          onClick={onClose}
          buttonText="Fechar"
        />
      ) : null}
      {state === "error" ? (
        <ModalConfirmation
          style="warning"
          alert={<Warning />}
          title={
            lastError
              ? "Falha ao cadastrar evento"
              : "Falha ao cadastrar evento"
          }
          content={
            lastError ||
            "Não conseguimos cadastrar o evento. Aguarde alguns segundos e tente novamente."
          }
          onClick={onClose}
          buttonText="TENTAR NOVAMENTE"
        />
      ) : null}
      {state === "default" ? (
        <>
          <div className={css["container"]}>
            <form className={css["form"]}>
              <div className={css["form-group"]}>
                <label>Nome do Evento:</label>
                <input
                  className={css["input"]}
                  placeholder="Nome do evento"
                  type="text"
                  name="name"
                  value={dataEvents.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={css["form-group"]}>
                <label>Data do evento</label>
                <input
                  placeholder="Data"
                  className={css["input"]}
                  type="date"
                  name="date"
                  value={dataEvents.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={css["form-group"]}>
                <label>Descrição do evento</label>
                <input
                  required
                  className={css["input"]}
                  placeholder="Descrição do evento"
                  type="text"
                  name="description"
                  value={dataEvents.description}
                  onChange={handleChange}
                />
              </div>

              <ButtonHorizontal
                className={css["button-add"]}
                style="orange"
                onClick={handleSubmit}
                disabled={isFormIncomplete}
                type="submit"
              >
                Adicionar evento
              </ButtonHorizontal>
            </form>
          </div>
        </>
      ) : null}
      {/* <ButtonHorizontal
        style={"transparent"}
        className={css["button-read"]}
        onClick={listGet}
      >
        Ver usuários cadastrados
      </ButtonHorizontal>
      {listShow ? <CreateReadme className={css["read"]} /> : null} */}
    </div>
  );
}
