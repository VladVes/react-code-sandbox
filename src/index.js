import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // для биндинга redux на react

import { store } from "./store/store.js";

import "./styles.css";

import Ref from "./components/Ref.jsx";
import ParentAndChildern from "./components/ParentAndChildren.jsx";
import NameSpace from "./components/NameSpace.jsx";
import TestContainer from "./containers/containers.js";


// storTestFn();

function App(props) {
  return (
    <div className="App">
      <h1>High charts playground</h1>

      {/* <hr> */}
      <h1>React stuff</h1>
      <h2>React + redux playground</h2>

      <Ref />

      <ParentAndChildern>
        <p>Child 01</p>
        <p>Child 02</p>
        <p>Child 03</p>
      </ParentAndChildern>

      <NameSpace>
        <NameSpace.Body>
          <NameSpace.Title>Title</NameSpace.Title>
        </NameSpace.Body>
      </NameSpace>

      <TestContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
// обернуть корневаой элемент в провайдер
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
