import React, { useState, useContext } from "react";
// import firebase from "../../../config/firebaseClient";
// import db from "./firbase";
// import db from "firbase";
import firebase from "firebase/app";
import css from "./create-get.module.scss";
// import firebase from "firebase/app";
// import db from './firebase.config';



export default function CreateGet(props) {
  const { className = "", style, children, ...other } = props;
  const [info, setInfo] = useState([]);
  console.log(2222222222,info)

  // window.addEventListener("load", () => {
  //   Fetchdata();
  // });

  // Fetch the required data using the get() method
  
  const Fetchdata = async () => {
      firebase
      .firestore()
      .collection("Events")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };

  // Display the result on the page

  return (
    <div
      className={`${css["organism__create-post-container"]} ${className}`}
      data-style={style}
      {...other}
    >
      <div>
          <h2>Eventos</h2>
        {info.map((data) => (
          <>
          <p>Título: {data.title}</p>

          <p>Descrição: {data.content}</p>
          </>
        ))}
        <button onClick={Fetchdata}>Ver mais</button>
      </div>
    </div>
  );
}
