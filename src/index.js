import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { rootReducer } from "./redux/rootReducer";

import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
