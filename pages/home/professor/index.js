import React from "react";
import HeaderNav from "../../../components/molecules/header-nav";
import Footer from "../../../components/organisms/footer";
import Create from "../../../components/utils/create";
import Read from "../../../components/utils/read";
import Update from "../../../components/utils/update";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Router>
          <div className="main">
            <h2 className="main-header">React Crud Operations</h2>
            <div>
              <Route exact path="/create" component={Create} />
            </div>
            <div style={{ marginTop: 20 }}>
              <Route exact path="/read" component={Read} />
            </div>

            <Route path="/update" component={Update} />
          </div>
        </Router>
      </div>
      <Footer className={css.footer} />
    </div>
  );
}
