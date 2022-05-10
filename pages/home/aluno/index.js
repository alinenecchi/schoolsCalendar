import React from "react";
import ReadView from "../../../views/read-view";
import HeaderNav from "../../../components/molecules/header-nav";
import Footer from '../../../components/organisms/footer';
import css from "./aluno.module.scss";

export default function Aluno(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div className={`${css["page__aluno-container"]} ${className}`} {...other}>
      <HeaderNav login= {false}/>
      <div className={css.main}>
      <ReadView />
      </div>
      <Footer className={css.footer}/>
    </div>
  );
}
