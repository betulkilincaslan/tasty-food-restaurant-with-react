import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "alertifyjs/build/css/alertify.min.css";
import "aos/dist/aos.css";
import configureStore from "./redux/reducers/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
