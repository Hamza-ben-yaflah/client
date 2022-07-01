import React, { Fragment } from "react";
import "./App.css";
import InputTodo from "./Component/InputTodo";
import ListTodo from "./Component/ListTodo";
function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
