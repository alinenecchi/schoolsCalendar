import React, { useEffect } from "react";
import HeaderNav from "../../../components/molecules/header-nav";
import Footer from "../../../components/organisms/footer";
import { Container } from "semantic-ui-react";
import Create from "../../../components/organisms/users-form-add";
import Read from '../../../components/organisms/create-readme';
//import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import css from "./admin.module.scss";

export default function Admin(props) {
  const { className = "", children, sectionHero, ...other } = props;
  return (
    <div className={`${css["page__adm-container"]} ${className}`} {...other}>
      <HeaderNav login={false} />
      <div className={css.main}>
        <Container>
          <div className={css.div}>
            <Create/>
          </div>
        </Container>
      </div>
      <Footer className={css.footer} />
    </div>
  );
}
