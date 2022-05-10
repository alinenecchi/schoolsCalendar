import React from "react";
import HeaderNav from "../../components/molecules/header-nav";
import Footer from '../../components/organisms/footer';
import css from "./home.module.scss";

export default function Home(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div className={`${css["page__home-container"]} ${className}`} {...other}>
      <HeaderNav login= {false}/>
      <div className={css.main}></div>
      <Footer className={css.footer}/>
    </div>
  );
}
