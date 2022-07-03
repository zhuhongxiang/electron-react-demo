import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { AppContainer as ReactHotContainer } from "react-hot-loader";
import "./index.css";
import App from "../../components/App";
import reportWebVitals from "../../reportWebVitals";

const AppContainer = process.env.NODE_ENV === "development" ? ReactHotContainer : Fragment;

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <App />
    </AppContainer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
