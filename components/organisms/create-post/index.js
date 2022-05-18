import React, { useState, useContext } from "react";
// import firebase from "../../../services/services.ts";
// import firebase from "../../../config/firebaseClient.ts";
import firebase from "firebase/app";
import css from "./create-post.module.scss";

export default function CreatePost(props) {
  const { className = "", style, children, ...other } = props;

  // const database = firebase.database();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateEvent, setDateEvent] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.firestore().collection("Events").add({
      title: title,
      content: content,
      dateEvent: dateEvent,
      date: date,
    });
    setTitle("");
    setContent("");
    setDateEvent("");
    setDate(new Date());
    setNotification("Evento adicionado");
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };



  // function handleSubmit (event) {
  //   event.preventDefault();
  //   const ref = database.ref('Events');
  //   const dados = {
  //     title,
  //     content,
  //     dateEvent,
  //     date
  //   }
  //   ref.push(dados);
  // }

  return (
    <div
      className={`${css["organism__create-post-container"]} ${className}`}
      data-style={style}
      {...other}
    >
      <h2>Adicionar Eventos</h2>
      {notification}
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <div>
          Title
          <br />
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            // onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Content
          <br />
          <textarea
            value={content}
            onChange={event => setContent(event.target.value)}
            // onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <div>
          Data
          <br />
          <input
            type="date"
            value={dateEvent}
            onChange={event => setDateEvent(event.target.value)}
            // onChange={({ target }) => setDateEvent(target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
