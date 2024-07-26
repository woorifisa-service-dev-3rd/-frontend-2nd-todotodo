import React from "react";
import TodoItemV2 from "./TodoItemV2";

const TodoBody = ({ todos, onUpdate, onDelete }) => {
  return (
    <ul className="px-0 my-8">
      {todos.map((todo) => (
        <TodoItemV2
          todo={todo}
          key={todo.id}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoBody;
