import React, { useEffect } from "react";
import HeaderNav from "../../../components/molecules/header-nav";
import Footer from "../../../components/organisms/footer";
import { Container } from "semantic-ui-react";
import FormUserAdd from "../../../components/organisms/users-form-add";
import css from "./admin.module.scss";

export default function Admin(props) {
  const { className = "", children, sectionHero, ...other } = props;
  return (
    <div className={`${css["page__adm-container"]} ${className}`} {...other}>
      <HeaderNav login={false} />
      <div className={css.main}>
        <Container>
          <div className={css.div}>
            <FormUserAdd />
          </div>
        </Container>
      </div>
      <Footer className={css.footer} />
    </div>
  );
}
