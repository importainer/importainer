// const element = document.createElement('h1')
// element.innerText = 'Hola React'
// const container = document.getElementById('root')
// container.appendChild(element)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import Store from "./rutaPaginaNueva/src/Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import "./firebase";
import "../src/index.css";

// const container = document.getElementById('root')

const { persistor, store } = Store;


// ReactDOM.render(__QUE__,__DONDE__)
ReactDOM.render(
    <Provider store={store} >
        <PersistGate loading={null} persistor={persistor} >
            <App />
        </PersistGate>
    </Provider>, 
document.getElementById('root'));