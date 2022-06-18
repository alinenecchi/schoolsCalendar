import React, { useState, useCallback, useEffect } from "react";
import ButtonHorizontal from "../../molecules/button-horizontal";
import ModalConfirmation from "../../molecules/modal-confirmation";
import { useRouter } from "next/router";
import Warning from "../../atoms/warning-circle";
import Loader from "../../atoms/loader";
import { validatePassword, validateEmail } from "../../../utils/functions";
import css from "./FormUser.module.scss";
import { isEmpty, omit } from "lodash";
import Title from "../../atoms/title";

function FormUser(props) {
  const {
    className = "",
    userStatus = [],
    professor = "professor",
    aluno = "aluno",
    selected,
    children,
    onMoveNext,
    ...other
  } = props;

  const options = [
    { id: 1, name: "professor" },
    { id: 2, name: "aluno" },
    { id: 3, name: "admin" },
  ];
  const router = useRouter();
  const [isFormIncomplete, setIsFormIncomplete] = useState(true);
  const [state, setState] = useState("default");
  const [user, setUser] = useState("");
  const [checkedList, setCheckedList] = React.useState(uncheckAll(options));
  const [lastErrorEmail, setLastErrorEmail] = useState(false);
  const [lastErrorPassword, setLastErrorPassword] = useState(false);

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

  const [dataCard, setDataCard] = useState({
    email: "",
    password: "",
    status: "",
  });

  useEffect(() => {
    const isUserEmpty = Object.values(dataCard).some((x) => isEmpty(x));
    const isValidEmail = validateEmail(dataCard.email);
    const isValidPassword = validatePassword(dataCard.password);

    isValidPassword ? setLastErrorPassword(false) : setLastErrorPassword(true);
    isValidEmail ? setLastErrorEmail(false) : setLastErrorEmail(true);

    if (isUserEmpty || !isValidEmail || !isValidPassword) {
      setIsFormIncomplete(true);
    } else {
      setIsFormIncomplete(false);
    }
  }, [dataCard]);

  const handleChange = useCallback(
    (event) => {
      setDataCard({
        ...dataCard,
        [event.target.name]: event.target.value,
      });
    },
    [dataCard]
  );

  const handleSubmit = (event) => {
    setState("loading");
    event.preventDefault();

    const data = {
      email: dataCard.email,
      password: dataCard.password,
      status: dataCard.status,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("/api/login", requestOptions)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error =
            (data && "Erro ao atualizar os dados do login") || response.status;
          setLastError(data.message || error);
          setState("error");
          router.push("/home");
          return Promise.reject(error);
        }
        setState("success");
        setUser(dataCard.status);
        router.push("/home");
      })
      .catch((error) => {
        setState("error");
        console.error("There was an error!", error);
        //router.push('/home');
        router.push(`/home/${dataCard.status}`);
      });
  };

  return (
    <div
      className={`${css["organism__form-user-container"]} ${className}`}
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

      {state === "error" ? (
        <ModalConfirmation
          style="warning"
          alert={<Warning />}
          title="Erro ao realizar o login"
          content="Verifique os dados e tente novamente."
          onClick={onClose}
          buttonText={"Tentar novamente"}
        />
      ) : null}
      {state === "default" && (
        <>
        <Title level="2">Faça o login:</Title>
          <form className={css["form"]}>
            <div className={css["checked"]}>
              {checkedList.map(({ id, name, checked }) => (
                <>
                  <div className={css["checked-item"]}>
                    <label key={id}>
                      <input
                        key={id}
                        type="radio"
                        name="options"
                        value={!!checked && (dataCard.status = name)}
                        checked={checked}
                        onChange={(e) => changeList(id, e.target.checked)}
                        required
                      />
                      {name}
                    </label>
                  </div>
                </>
              ))}
            </div>

            <input
              required
              label="E-mail"
              placeholder="E-mail"
              type="email"
              name="email"
              className={css["input"]}
              value={dataCard.email}
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

            <input
              required
              label="Senha"
              autoComplete="new-password"
              placeholder="Senha"
              type="text"
              name="password"
              className={css["input"]}
              value={dataCard.password}
              onChange={handleChange}
            />
            {lastErrorPassword && (
              <>
                <span></span>
                <span className={css["error-message"]}>
                  A senha deve ter tamanho mínimo 6 e no máximo 15 caracteres,
                  letras e numero e caractere especial(!#@$%&). No mínimo uma
                  letra maiúscula e minúscula, um numero, um caractere
                  especial(!#@$%&).
                </span>
              </>
            )}

            <ButtonHorizontal
              disabled={isFormIncomplete}
              style="orange"
              onClick={handleSubmit}
              className={css["button"]}
              type="submit"
            >
              Login
            </ButtonHorizontal>
          </form>
        </>
      )}
    </div>
  );
}

export default FormUser;
