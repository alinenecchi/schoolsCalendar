import React, { useState, useContext } from "react";
import css from "./create-get.module.scss";


export default function CreateGet(props) {
  const { className = "", style, children, ...other } = props;
  const [info, setInfo] = useState([]);

  console.log(55555555555, info);

  async function fetchGet() {

    const data = '';
    const Options = {
      method: " GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = "https://schoolscalendar-heroku.herokuapp.com/api/Student";
    //const retornoApi = await fetch(url, Options);

    await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => setInfo(json));
    
  }

  return (
    <div
      className={`${css["organism__create-post-container"]} ${className}`}
      data-style={style}
      {...other}
    >
      <div>
        {" "}
        <div>
          <button onClick={fetchGet}>Buscar</button>
          <div className={css["card-div"]}>
            <main className={css["card-scroll"]}>
              {info.map((entry, index) => {
                return (
                  <>
                    <div className={css["img"]}>
                      <ul key={index} >
                        <li>{entry.id}</li>
                        <li>{entry.name}</li>
                        <li>{entry.email}</li>
                      </ul>
                    </div>
                  </>
                );
              })}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
