import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./components/store/store.ts";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <Provider store={store}>
    <ParallaxProvider>
      <ThemeProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </ParallaxProvider>
      </Provider>
  </React.StrictMode>
);
