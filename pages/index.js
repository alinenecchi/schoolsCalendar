import React from "react";
import * as pageData from "../data/main";
import Hero from "../components/molecules/hero";
import Title from "../components/atoms/title";
import css from "./index.module.scss";
import SectionCard from "../components/organisms/section-card";
import SectionWhoWeAre from "../components/organisms/section-who-we-are";
import SectionInfo from "../components/organisms/section-info";
import SectionContactUs from "../components/organisms/section-contact-us";

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

      <SectionCard className={css.sectionCard} dataCard={pageData.dataCard} />
      <SectionWhoWeAre className={css.sectionWhoWeAre} data={pageData.whoWeAre}/>
      <SectionInfo className={css.sectionInfo} dataInfo={pageData.dataInfo}/>
      <SectionContactUs className={css.sectionContact} dataContact={pageData.dataContact}/>
    </div>
  );
}
