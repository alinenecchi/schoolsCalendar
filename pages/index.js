import React from "react";
import * as pageData from "../data/main";
import Hero from "../components/molecules/hero";
import css from "./index.module.scss";
import SectionCard from "../components/organisms/section-card";
import SectionWhoWeAre from "../components/organisms/section-who-we-are";
import SectionInfo from "../components/organisms/section-info";
import SectionContactUs from "../components/organisms/section-contact-us";
import HeaderNav from "../components/molecules/header-nav";
import Footer from "../components/organisms/footer";

export default function Home(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div className={`${css["page__home-container"]} ${className}`} {...other}>
      <HeaderNav />
      <Hero className={css.hero} image="/images/banner-hero.png">
        <div className={css.mainText}>
          {" "}
          {pageData.mainText}
          <br />
        </div>
      </Hero>

      <SectionCard className={css.sectionCard} dataCard={pageData.dataCard} />
      <SectionWhoWeAre
        className={css.sectionWhoWeAre}
        data={pageData.whoWeAre}
      />
      <SectionInfo className={css.sectionInfo} dataInfo={pageData.dataInfo} />
      <SectionContactUs
        className={css.sectionContact}
        dataContact={pageData.dataContact}
      />
      <Footer />
    </div>
  );
}
