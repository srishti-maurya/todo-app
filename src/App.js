import React from "react";
import "./style.css";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }
  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem item={item} key={item.id} />
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
