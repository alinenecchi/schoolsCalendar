import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const transparent = 'transparent';
const color = '#04a4b6';
const formLabelsTheme = createMuiTheme({
  overrides: {
    shape: {
      borderRadius: 0
    },
    select: {
      '&:before': {
        borderColor: color,
      },
      '&:after': {
        borderColor: color,
      },
      icon: {
        fill: transparent,
        color: transparent,
        display: 'none',

        '&.Mui-disabled': {
          fill: transparent,
          color: transparent,
          display: 'none',
        }
      }
    },
    MuiFormLabel: {
      asterisk: {
        color: color,
        display: 'inline-block',
        transform: 'scale(2) translate(2px, 4px)',
        '&$error': {
          color: '#db3131'
        },
      }
    }
  }
})

const DEFAULT_VALUES = {
  status: 'pending',
  counter: 9,
  data: {
    ping: 'wating'
  }
};

// The reducer is used to update values for the context
const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return DEFAULT_VALUES;
    case "update":
      return { ...state, ...action.data };
    default:
      return state;
  }
};

// CREATING THE CONTEXT
const PageContext = React.createContext(DEFAULT_VALUES);

// CREATING THE PROVIDER
export const PageProvider = (props) => {

  if (process.browser) {
    window.document.body.scrollTop = 0;
  }

  const { children } = props;

  let [state, dispatch] = React.useReducer(reducer, DEFAULT_VALUES);
  let value = { state, dispatch };

  return (
    <ThemeProvider theme={formLabelsTheme}>
      <PageContext.Provider value={value}>{children}</PageContext.Provider>
    </ThemeProvider>
  );
};

export { PageContext };
