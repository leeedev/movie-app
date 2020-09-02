import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="heart__button" onClick={() => setCount(count + 1)}>
        <span className="heart__emoji">
          <span>❤️</span>
        </span>
      </button>
      <button className="heart__button" onClick={() => setCount(count - 1)}>
        <span className="heart__emoji">
          <span>🤍</span>
        </span>
      </button>
      <span className="heart__text">좋아요 {count}개</span>
    </div>
  );
}

export default Counter;
