import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

export const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (
  props
) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enterdText = todoTextInputRef.current!.value;
    if (enterdText?.trim().length == 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enterdText);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label className={classes.label} htmlFor="text">
        Todo Text
      </label>
      <input
        className={classes.input}
        type="text"
        id="text"
        ref={todoTextInputRef}
      />
      <button className={classes.button}>Add todo</button>
    </form>
  );
};
