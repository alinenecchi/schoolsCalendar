import React, { useEffect } from "react";
import HeaderNav from "../../../components/molecules/header-nav";
import Footer from "../../../components/organisms/footer";
import { Container } from "semantic-ui-react";
import ContactView from "../../../components/utils/views/contact-view";
import css from "./professor.module.scss";

export default function Professor(props) {
  const { className = "", children, sectionHero, ...other } = props;

  return (
    <div
      className={`${css["page__professor-container"]} ${className}`}
      {...other}
    >
      <HeaderNav login={false} />
      <div className={css.main}>
        <Container>
          <ContactView />
        </Container>
      </div>
      <Footer className={css.footer} />
    </div>
  );
}
