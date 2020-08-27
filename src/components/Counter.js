import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <span>좋아요 {value}개</span>
      <button onClick={() => setValue(value + 1)}>
        <span>❤️</span>
      </button>
      <button onClick={() => setValue(value - 1)}>
        <span>🤍</span>
      </button>
    </div>
  );
}

export default Counter;
