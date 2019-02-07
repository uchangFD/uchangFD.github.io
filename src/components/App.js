import React from "react";
import { observer } from "mobx-react";

import store from "../store/Todo";

const App = () => {
  return (
    <div>
      {store.getTodo}
      <button
        onClick={() => {
          store.addTodo("test");
        }}
      >
        추가
      </button>
    </div>
  );
};

export default observer(App);
