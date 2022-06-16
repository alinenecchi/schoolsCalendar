import React, { useState, useContext } from "react";
// import firebase from "../../../config/firebaseClient";
// import db from "./firbase";
// import db from "firbase";
import firebase from "firebase/app";
import css from "./create-get.module.scss";
// import firebase from "firebase/app";
// import db from './firebase.config';



export default function CreateGet(props, dadosCalendar, retornoApi) {
  const { className = "", style, children, ...other } = props;
  const [info, setInfo] = useState([]);
  console.log(44444444444,dadosCalendar)
  console.log(44444444444,retornoApi)



  //Fetch the required data using the get() method
  

  // Display the result on the page

  return (
    <div
      className={`${css["organism__create-post-container"]} ${className}`}
      data-style={style}
      {...other}
    >

      <div>

      </div>
    </div>
  );
}

export async function getStaticProps(context) {

  const retornoApi = await get(
    "https://schoolscalendar-heroku.herokuapp.com/api/Student"
  );
  const dadosCalendar = retornoApi.data;
  console.log(retornoApi)



  return {
    props: {
      dadosCalendar,
      retornoApi,
    },
  };
}

