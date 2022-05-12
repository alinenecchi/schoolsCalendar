import React, { useState }from "react";
import * as pageData from "../data/main";
// import { firestore } from "../firebase/clientApp";
// import {
//   collection,
//   QueryDocumentSnapshot,
//   DocumentData,
//   query,
//   where,
//   limit,
//   getDocs,
// } from "@firebase/firestore";
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

// const todosCollection = collection(firestore, "todos");
// const [todos, setTodos] =
//   useState < QueryDocumentSnapshot < DocumentData > [] > [];
// const [loading, setLoading] = useState < boolean > true;

// const getTodos = async () => {
//   // construct a query to get up to 10 undone todos 
//   const todosQuery = query(todosCollection,where('done','==',false),limit(10));
//   // get the todos
//   const querySnapshot = await getDocs(todosQuery);
  
//   // map through todos adding them to an array
//   const result = useState < QueryDocumentSnapshot< DocumentData >[] > [];
//   querySnapshot.forEach((snapshot) => {
//   result.push(snapshot);
//   });
//   // set it to state
//   setTodos(result);
// };

// useEffect( () => {
//   // get the todos
//   getTodos();
//   // reset loading
//   setTimeout( () => {
//     setLoading(false);
//   },2000)
// },[]);
