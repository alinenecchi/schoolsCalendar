import React from "react";
import HeaderNav from "../../../components/molecules/header-nav";
import Footer from '../../../components/organisms/footer';
import css from "./professor.module.scss";

export default function Professor(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div className={`${css["page__professor-container"]} ${className}`} {...other}>
      <HeaderNav login= {false}/>
      <div className={css.main}>Professor</div>
      <Footer className={css.footer}/>
    </div>
  );
}
