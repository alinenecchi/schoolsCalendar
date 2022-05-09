import React, { useState, useCallback, useEffect } from "react";
import Input from "../../atoms/input";
import ButtonHorizontal from "../../molecules/button-horizontal";
import FormRadioGroup from "../../atoms/form-radio-group";
import CheckControl from "../../atoms/check-control";
import css from "./FormUser.module.scss";
import { isEmpty, omit } from "lodash";
import { Card } from "@material-ui/core";

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
  ];

  const [isFormIncomplete, setIsFormIncomplete] = useState(true);
  const [state, setState] = useState("default");
  const [checkedList, setCheckedList] = React.useState(uncheckAll(options));
  console.log(checkedList);

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

  const [dataCard, setDataCard] = useState({
    name: "",
    password: "",
    status: "",
  });

  console.log(dataCard);

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

    console.log(data);

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
      className={`${css["organism__form-user-container"]} ${className}`}
      {...other}
    >
      {state === "default" && (
        <>
          <form className={css["form"]}>
            <div className={css["checked"]}>
              {checkedList.map(({ id, name, checked }) => (
                <>
                  <div className={css["checked-item"]}>
                    <label key={id}>
                      <input
                        type="radio"
                        name="options"
                        value={!checked && (dataCard.status = name)}
                        checked={checked}
                        onChange={(e) => changeList(id, e.target.checked)}
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
