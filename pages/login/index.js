/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FormUser from "../../components/organisms/form-user";
import * as pageData from "../../data/login";
import css from "./login.module.scss";

const activated = { contact: true, home: true, whoWeAre: true, login: false };
export default function Login(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div className={`${css["page__login-container"]} ${className}`} {...other}>
      <div className={css.column1}>
        <FormUser className={css.form} userStatus={pageData.UserStatus} />
      </div>
      <div className={css.column2}>
        <img src="/images/login/children.png"></img>
      </div>
    </div>
  );
}
