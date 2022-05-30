import React from "react";
import HeaderNav from "../../components/molecules/header-nav";
import * as pageData from "../../data/who-we-are";
import css from "./who-we-are.module.scss";
import Footer from "../../components/organisms/footer";
import Hero from "../../components/molecules/hero";
import ButtonHorizontal from "../../components/molecules/button-horizontal";
import SectionCard from "../../components/organisms/section-card";
import CarouselHorizontal from "../../components/molecules/carousel-horizontal";

export default function WhoWeAre(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div
      className={`${css["page__who-we-are-container"]} ${className}`}
      {...other}
    >
      <HeaderNav/>
      <Hero 
        className={css.hero} 
        image="/images/banner-hero.png" 
        logo='Quem Somos' 
      >
        <span> Qualidade em educação integral</span>
        <ButtonHorizontal   className={css.button}  style="orange">Saiba mais</ButtonHorizontal>
      </Hero>
      {/* <SectionCard className={css.sectionCard} dataCard={pageData.dataCard} /> */}
      <CarouselHorizontal images={pageData.featuresCarousel} text={pageData.text} title={pageData.title}/>
      <Footer/>
    </div>
  );
}
