import React from "react";
import * as pageData from "../data/main";
import Hero from "../components/molecules/hero";
import Title from "../components/atoms/title";
import Footer from '../components/organisms/footer';
import css from "../utils/styles/home.module.scss";

export default function Home(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div className={`${css["page__home-container"]} ${className}`} {...other}>
      <Hero className={css.hero} image="/images/banner-hero.png">
        <div className={css.mainText}>
          {" "}
          {pageData.mainText}
          <br />
        </div>
      </Hero>

      <div className={css["title"]}>
        <Title> Hello SchollsCalendar</Title>
      </div>
      <Footer/>
    </div>
  );
}
