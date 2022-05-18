import React, { useState, useEffect} from "react";
import firebase from "firebase/app";
import css from "./create-get.module.scss";




export default function CreateGet(props) {
  const { className = "", style, children, ...other } = props;
  const [info, setInfo] = useState([]);
  console.log(2222222222,info)

  useEffect(() => {
    Fetchdata();
  }, []);
  
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

  return (
    <div
      className={`${css["organism__create-get-container"]} ${className}`}
      data-style={style}
      {...other}
    >
      <div  className={css["card-container"]}>
        <h2>Eventos</h2>
        {info.map((data) => (
          <>
          <p>Título: {data.title}</p>
          <p>Descrição: {data.content}</p>
          <p>Data: {data.dateEvent}</p>
          </>
        ))}
      </div>
    </div>
  );
}
