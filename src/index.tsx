import React, { Profiler } from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Get DOM element to render the app in.
const container = document.getElementById("root")!;

// Create a root
const root = ReactDOMClient.createRoot(container);

type RenderCallBackPhases = "mount" | "update";

const onRenderCallback = (id: string, phase?: RenderCallBackPhases) => {
  console.log("PHASE", phase, id);
  // if (phase === "mount") {
  //   document.documentElement.setAttribute("data-theme", "light");
  //   document.documentElement.setAttribute("data-vars", "frse");
  // }
};

root.render(
  <Profiler id="rsc-enterprises" onRender={onRenderCallback}>
    <App />
  </Profiler>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
