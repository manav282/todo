import React, { useRef } from "react";
import { AiFillEdit,AiFillDelete } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className="card">
      <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}/>
      <div className="btns">
        <button
          onClick={() => changeFocus()}
          style={{ color: "orange" }}
        >
          
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button
            style={{ color: "orange" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button
          style={{ color: "orange" }}
          onClick={() => removeTodo(item.id)}
        >
          
          <AiFillDelete />
        </button>
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoItem;


