import React, { useEffect } from "react";
import HeaderNav from "../../../components/molecules/header-nav";
import Footer from "../../../components/organisms/footer";
import { Container } from "semantic-ui-react";
import ContactView from "../../../views/contact-view";
import CreatePost from "../../../components/organisms/create-post";
import firebase from "firebase/app";

import css from "./professor.module.scss";
import CreateGet from "../../../components/organisms/create-get";

export default function Professor(props) {
  const { className = "", children, sectionHero, ...other } = props;
  useEffect(() => {
    firebase
      .firestore()
      .collection("Events")
      .get()
      .then((docs) => console.log(docs.docs.map((doc) => doc.data())));
  });

  return (
    <div
      className={`${css["page__professor-container"]} ${className}`}
      {...other}
    >
      <HeaderNav login={false} />
      <div className={css.main}>
        <Container>
          <div className={css.div}>
            <CreatePost />
            <CreateGet />
          </div>
          <ContactView />
        </Container>
      </div>
      <Footer className={css.footer} />
    </div>
  );
}
