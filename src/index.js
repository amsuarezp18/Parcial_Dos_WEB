import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";
import espanish from "./languages/es.json";
import "bootstrap/dist/css/bootstrap.min.css";
import english from "./languages/en.json";

const messages = {
  'es': espanish,
  'en': english
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App lang={language}/>
  </IntlProvider>
,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
