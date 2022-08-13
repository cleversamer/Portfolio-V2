import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import configureStore from "./store/configureStore";
import App from "./App";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider resetCSS={false}>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
