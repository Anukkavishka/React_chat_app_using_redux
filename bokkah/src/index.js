import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./Store/PrimaryStore";

const render = () => {
  //fancyLog();
  console.log(store.getState());
  return ReactDOM.render(<App />, document.getElementById("root"));
};

render();
store.subscribe(render);
/**
function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
  console.log(store.getState());
}
 */
serviceWorker.unregister();
