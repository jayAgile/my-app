import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// React.FC for defining props or making custom component

const Todos: React.FC<{ items: Todo[]; onTodoRemove: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClick={props.onTodoRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
