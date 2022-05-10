import React, { useReducer, createContext } from "react";

export const ContactContext = createContext();

const initialState = {
  contacts: [
    {
      id: "001",
      eventName: "Dia do fantoche",
      date: "20-05-2022",
      description: "Trazer material para confecção de fantoche"

    },
    {
      id: "002",
      eventName: "Dia do fantoche",
      date: "20-05-2022",
      description: "Trazer material para confecção de fantoche"
    },
    {
      id: "003",
      eventName: "Dia do fantoche",
      date: "20-05-2022",
      description: "Trazer material para confecção de fantoche"
    }
  ],
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        contacts: [...state.contacts, action.payload]
      };
    case "DEL_EVENT":
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "START":
      return {
        loading: true
      };
    case "COMPLETE":
      return {
        loading: false
      };
    default:
      throw new Error();
  }
};

export const ContactContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};
