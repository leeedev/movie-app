import React, { useReducer, useState } from "react";
import reducer, { initialState, ADD } from "./reducer";
import "./Comment.css";

function Rating() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  return (
    <div>
      <div className="comment__text">My comment</div>
      <div className="comment">
        <form onSubmit={onSubmit}>
          <input
            value={newToDo}
            type="text"
            placeholder="Write a comment"
            onChange={onChange}
            className="comment__input"
          />
        </form>
        <button onClick={onSubmit} className="comment__button">
          <span role="img">✏️</span>
        </button>
      </div>
      <ul>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rating;
