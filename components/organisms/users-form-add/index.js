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

import css from "./users-form-add.module.scss";

export default function UsersFormAdd(props) {
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
  const [lastErrorEmail, setLastErrorEmail] = useState(false);
  const [lastErrorPassword, setLastErrorPassword] = useState(false);
  const [lastErrorName, setLastErrorName] = useState(false);

  const options = [
    { id: 1, type: "Professor", name: "Teacher" },
    { id: 2, type: "Estudante", name: "Student" },
    { id: 3, type: "Admin", name: "Admin" },
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
    typeName: "",
  });

  const [listShow, setListShow] = useState(false);

  useEffect(() => {
    const isUserEmpty = Object.values(dataUsers).some((x) => isEmpty(x));
    const isValidEmail = validateEmail(dataUsers.email);
    const isValidPassword = validatePassword(dataUsers.password);
    const isValidName = validateName(dataUsers.name);

    isValidPassword ? setLastErrorPassword(false) : setLastErrorPassword(true);
    isValidEmail ? setLastErrorEmail(false) : setLastErrorEmail(true);
    isValidName ? setLastErrorName(false) : setLastErrorName(true);

    if (isUserEmpty || !isValidEmail || !isValidPassword || !isValidName) {
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
        setDataUsers({
          name: "",
          password: "",
          email: "",
          type: "",
          typeName: "",
        });
      })
      .catch((error) => {
        setState("error");
        console.error("There was an error!", error);
      });
  };

  return (
    <div
      className={`${css["organism__user-form-add-container"]} ${className}`}
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
                {checkedList.map(({ id, type, name, checked }) => (
                  <>
                    <div className={css["checked-item"]}>
                      <label key={id}>
                        <input
                          key={id}
                          type="radio"
                          name="options"
                          value={
                            !!checked &&
                            (dataUsers.type = name) &&
                            (dataUsers.typeName = type)
                          }
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
                  placeholder="Nome e sobrenome do usuário"
                  type="text"
                  name="name"
                  value={dataUsers.name}
                  onChange={handleChange}
                  required
                />
                {lastErrorName && (
                  <>
                    <span></span>
                    <span className={css["error-message"]}>
                      Digite nome e sobrenome. O nome deve conter no mínimo 3
                      caracteres. O sobrenome deve conter no mínimo 3
                      caracteres. Não pode conter números.
                    </span>
                  </>
                )}
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

                {lastErrorPassword && (
                  <>
                    <span></span>
                    <span className={css["error-message"]}>
                      A senha deve ter tamanho mínimo 6 e no máximo 15
                      caracteres, letras e numero e caractere especial(!#@$%&).
                      No mínimo uma letra maiúscula e minúscula, um numero, um
                      caractere especial(!#@$%&).
                    </span>
                  </>
                )}
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
                {lastErrorEmail && (
                  <>
                    <span></span>
                    <span className={css["error-message"]}>
                      Digite um email válido.
                    </span>
                  </>
                )}
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
      <ButtonHorizontal
        style={"transparent"}
        className={css["button-read"]}
        onClick={listGet}
      >
        Ver usuários cadastrados
      </ButtonHorizontal>
      {listShow ? <CreateReadme className={css["read"]} /> : null}
    </div>
  );
}
