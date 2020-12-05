import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
// import App from './NotesApp';
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
