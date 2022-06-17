import React, { useState, useEffect, useCallback } from "react";
import ButtonHorizontal from "../../molecules/button-horizontal";
import _ from "lodash";
import ModalConfirmation from "../../molecules/modal-confirmation";
import Warning from "../../atoms/warning-circle";
import Loader from "../../atoms/loader";
import Success from "../../atoms/success-circle";
import css from "./contact-form.module.scss";
import { isEmpty } from "lodash";
import Title from "../../atoms/title";
import CreateReadme from "../create-readme";

export default function ContactForm(props) {
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

  const options = [
    { id: 1, type: "Teacher" },
    { id: 2, type: "Student" },
    { id: 3, type: "Admin" },
  ];

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

  const [dataUsers, setDataUsers] = useState({
    name: "",
    password: "",
    email: "",
    type: "",
  });

  const [listShow, setListShow] = useState(false);

  useEffect(() => {
    const isUserEmpty = Object.values(dataUsers).some((x) => isEmpty(x));

    if (isUserEmpty) {
      setIsFormIncomplete(true);
    } else {
      setIsFormIncomplete(false);
    }
  }, [dataUsers]);

  const handleChange = useCallback(
    (event) => {
      setDataUsers({
        ...dataUsers,
        [event.target.name]: event.target.value,
      });
    },
    [dataUsers]
  );

  async function listGet() {
    if (listShow) {
      setListShow(false);
    } else {
      setListShow(true);
    }
    console.log(listShow);
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
        name: dataUsers.name,
        email: dataUsers.email,
        password: dataUsers.password,
      }),
    };

    console.log("requestO", requestOptions);

    fetch(
      `https://schoolscalendar-heroku.herokuapp.com/api/${dataUsers.type}`,
      requestOptions
    )
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && "Erro ao enviar os dados") || response.status;
          setLastError(data.message || error);
          setState("error");
          return Promise.reject(error);
        }
        setState("success");
      })
      .catch((error) => {
        setState("error");
        console.error("There was an error!", error);
      });
  };

  return (
    <div
      className={`${css["organism__contact-form-container"]} ${className}`}
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
          title={`O usuário ${dataUsers.name} foi cadastrado com sucesso`}
          href="/"
        />
      ) : null}
      {state === "error" ? (
        <ModalConfirmation
          style="warning"
          alert={<Warning />}
          title={
            lastError
              ? "Falha ao cadastrar usuário"
              : "Falha ao cadastrar usuário"
          }
          content={
            lastError ||
            "Não conseguimos cadastrar o usuário. Verifique os dados e tente novamente."
          }
          onClick={onClose}
          buttonText="TENTAR NOVAMENTE"
        />
      ) : null}
      {state === "default" ? (
        <>
          <div className={css["container"]}>
            <Title className={css["title"]}>
              Cadastro de <strong>usuários</strong>
            </Title>
            <form className={css["form"]}>
              <div className={css["checked"]}>
                <Title level="3" className={css["sub-title"]}>
                  Qual o tipo de usuário que deseja cadastrar?
                </Title>
                {checkedList.map(({ id, type, checked }) => (
                  <>
                    <div className={css["checked-item"]}>
                      <label key={id}>
                        <input
                          key={id}
                          type="radio"
                          name="options"
                          value={!!checked && (dataUsers.type = type)}
                          //value={!!checked &&  dataUsers.type}
                          checked={checked}
                          onChange={(e) => changeList(id, e.target.checked)}
                          required
                        />
                        {type}
                      </label>
                    </div>
                  </>
                ))}
              </div>
              <div className={css["form-group"]}>
                <label>Nome do Usuário:</label>
                <input
                  className={css["input"]}
                  placeholder="Nome do estudante"
                  type="text"
                  name="name"
                  value={dataUsers.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={css["form-group"]}>
                <label>Cadastre uma senha:</label>
                <input
                  placeholder="Senha"
                  className={css["input"]}
                  type="text"
                  name="password"
                  value={dataUsers.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={css["form-group"]}>
                <label>Email do usuário:</label>
                <input
                  required
                  className={css["input"]}
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  value={dataUsers.email}
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
                Adicionar usuário
              </ButtonHorizontal>
            </form>
          </div>
        </>
      ) : null}
      <ButtonHorizontal style={"transparent"}  className={css["button-read"]} onClick={listGet}>
        Ver usuários cadastrados
      </ButtonHorizontal>
      {listShow ? <CreateReadme className={css["read"]} /> : null}
    </div>
  );
}
