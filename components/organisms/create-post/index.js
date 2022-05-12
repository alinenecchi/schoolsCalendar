import React, { useState, useContext } from "react";
// import firebase from "../../../config/firebaseClient";
import firebase from "firebase/app";
import css from "./create-post.module.scss";

export default function CreatePost(props) {
  const { className = "", style, children, ...other } = props;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
//   const [dateEvent, setDateEvent] = useState(new Date());
  const [notification, setNotification] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.firestore().collection("Events").add({
      title: title,
      content: content,
    //   date: dateEvent,
    });
    setTitle("");
    setContent("");
    // setDateEvent(new Date()), 1000;
    setNotification("Evento adicionado");
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <div
      className={`${css["organism__create-post-container"]} ${className}`}
      data-style={style}
      {...other}
    >
      <h2>Adicionar Eventos</h2>
      {notification}
      <form onSubmit={handleSubmit}>
        <div>
          Title
          <br />
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Content
          <br />
          <textarea
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        {/* <div>
          Data
          <br />
          <input
            type="date"
            value={dateEvent}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div> */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
