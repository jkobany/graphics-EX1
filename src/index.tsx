import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import RouterApplication from "./routes/Router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
        <RouterApplication />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();