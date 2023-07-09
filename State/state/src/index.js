import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Declarative from "./components/Declarative";
import Imperative from "./components/Imperative";

const declarative = ReactDOM.createRoot(document.getElementById("declarative"));
declarative.render(<Declarative />);

const imperative = ReactDOM.createRoot(document.getElementById("imperative"));
imperative.render(<Imperative />);
