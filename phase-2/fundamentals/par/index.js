//Go to the "react-dom" package, enter the "client" submodule,
//and find and import the function called `createRoot`.
import {createRoot} from "react-dom/client";
import App from "./src/App";

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
// import {App} from "./src/App