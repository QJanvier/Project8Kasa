import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import App from "./App";

import './Assets/style/Scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);