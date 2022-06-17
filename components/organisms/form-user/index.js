import React, { useState, useCallback, useEffect } from "react";
import ButtonHorizontal from "../../molecules/button-horizontal";
import ModalConfirmation from "../../molecules/modal-confirmation";
import { useRouter } from "next/router";
import Warning from "../../atoms/warning-circle";
import Loader from "../../atoms/loader";
import css from "./FormUser.module.scss";
import { isEmpty, omit } from "lodash";

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
    name: "",
    password: "",
    status: "",
  });

  useEffect(() => {
    const isUserEmpty = Object.values(dataCard).some((x) => isEmpty(x));
    if (isUserEmpty) {
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
      name: dataCard.name,
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
              label="Nome"
              autoComplete="new-password"
              placeholder="Nome"
              type="text"
              name="name"
              className={css["input"]}
              value={dataCard.name}
              onChange={handleChange}
            />

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
