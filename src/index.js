import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Search from "./Search";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Search />
  </StrictMode>,
  rootElement
);
