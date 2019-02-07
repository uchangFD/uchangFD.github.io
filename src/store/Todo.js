import { observable, action, computed } from "mobx";

class Todo {
  @observable todos = ["blog 작성"];

  @computed getTodo = () => {
    return this.todos.join(" ");
  };

  @action addTodo(todo) {
    this.todos.push(todo);
  }
}

export default new Todo();
