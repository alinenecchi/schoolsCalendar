import React from "react";
import * as pageData from "data/home";
import SectionCard from "../../components/organisms/section-card";
import css from "./home.module.scss";

export default function Home(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div className={`${css["page__home-container"]} ${className}`} {...other}>
      <SectionCard dataCard={pageData.dataCard} />
    </div>
  );
}
