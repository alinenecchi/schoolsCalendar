import React, { useState, useCallback, useEffect } from 'react';
import Input from '../../atoms/input';
import ButtonHorizontal from '../../molecules/button-horizontal';
import FormRadioGroup from '../../atoms/form-radio-group';
import css from './FormUser.module.scss';
import { isEmpty, omit } from 'lodash';

function FormUser(props) {
  const {
    className = "",
    civilStatus = [],
    children,
    onMoveNext,
    ...other
  } = props;


  const [isFormIncomplete, setIsFormIncomplete] = useState(true);
  const [state, setState]                       = useState("default");
  const [lastError, setLastError]               = useState(null);

  const [dataCard, setDataCard] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });

  function onClose() {
    setState("default");
  }

  useEffect(() => {
    const isUserEmpty = Object.values(dataCard).some(x => isEmpty(x));
    if(isUserEmpty) {
      setIsFormIncomplete(true);
    } else {
      setIsFormIncomplete(false);
    }
  },
  [dataCard]);

  const handleChange = useCallback((event) => {
    setDataCard({
      ...dataCard,
      [event.target.name]: event.target.value,
    });
  }, [dataCard]);

  const handleSubmit = (event) => {
    setState("loading");
    event.preventDefault();

    const dataCard = {
      name: dataCard.name,
      password: dataCard.password,
    };

    const data = {
      ...dataCardCredit
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch("/api/login", requestOptions)
      .then(async response => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && "Erro ao atualizar os dados do login") || response.status;
          setLastError(data.message || error);
          setState("error");
          pageView({page_path: '/paylment/error'});
          return Promise.reject(error);
        }
        pageView({page_path: '/paylment/success'});
        setState("success");
      })
      .catch(error => {
        setState("error");
        pageView({page_path: '/paylment/error'});
        console.error('There was an error!', error);
      });
  };

  return <div
    className={`${css["organism__form-user-container"]} ${className}`}
    {...other}
  >
    {
      state === "default" &&
        <>
          <div className={css["container-card-form"]}>
            <form className={css["form"]}>
              <Input
                required
                label="Nome"
                type="text"
                autoComplete="new-password"
                name="ProspectName"
                className={css["column-1-3"]}
                value={dataCard.name}
                onChange={handleChange}
              />

              {/* <FormRadioGroup
                className={css["column-1-3"]}
                label='Estado civil'
                radioGroupName='ProspectCivilStatus'
                radioGroupAriaLabel='civilStatus'
                list={civilStatus}
                selected={user.ProspectCivilStatus}
              /> */}

              <Input
                required
                label="Senha"
                autoComplete="new-password"
                type="text"
                name="ProspectMonthlyIncome"
                className={css["column-1-3"]}
                value={dataCard.password}
                onChange={handleChange}
              />

              <ButtonHorizontal
                disabled={isFormIncomplete}
                style="orange"
                onClick={handleSubmit}
                className={css['button']}
                type="submit"
              >
                Login
              </ButtonHorizontal>
            </form>
          </div>
        </>
  }
  </div>;
}

export default FormUser;
