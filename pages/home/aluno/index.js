import React from "react";
import HeaderNav from "../../../components/molecules/header-nav";
import Footer from '../../../components/organisms/footer';
import ReadView from '../../../components/utils/views/read-view'
import css from "./aluno.module.scss";

export default function Aluno(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div className={`${css["page__aluno-container"]} ${className}`} {...other}>
      <HeaderNav login= {false}/>
      <div className={css.main}>
      <ReadView show= {false} />
      </div>
      <Footer className={css.footer}/>
    </div>
  );
}
