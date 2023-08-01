import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const DisplayTodos = () => {
  const [sort, setSort] = useState("active");
  const todos = useSelector(state => state.todoList);
  const dispatch = useDispatch();
  const removeTodo = (id) => dispatch(removeTodos(id));
  const updateTodo = (obj) => dispatch(updateTodos(obj));
  const completeTodo = (id) => dispatch(completeTodos(id));

  return (
    <div className="displaytodos">
      <div className="buttons">
        <button
          onClick={() => setSort("active")}
        >
          Active
        </button>
        <button
          onClick={() => setSort("completed")}
        >
          Completed
        </button>
        <button
          onClick={() => setSort("all")}
        >
          All
        </button>
      </div>
      <ul>
        {todos.length > 0 && sort === "active"
          ? todos.map((item) => {
            return (
              item.completed === false && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  completeTodo={completeTodo}
                />
              )
            );
          })
          : null}
        {/* for completed items */}
        {todos.length > 0 && sort === "completed"
          ? todos.map((item) => {
            return (
              item.completed === true && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  completeTodo={completeTodo}
                />
              )
            );
          })
          : null}
        {/* for all items */}
        {todos.length > 0 && sort === "all"
          ? todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                completeTodo={completeTodo}
              />
            );
          })
          : null}
      </ul>
    </div>
  );
};

export default DisplayTodos;
