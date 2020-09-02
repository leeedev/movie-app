import React, { useState, useMemo } from "react";
import "./Rating.css";

const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <div>
        <div className="rating__text">
          My rating is <span role="img">⭐</span> {avg.toFixed(1)} points
        </div>
      </div>
      <form>
        <input
          value={number}
          onChange={onChange}
          placeholder="From 0 to 10"
          className="rating__input"
        />
        <button onClick={onInsert} className="rating__button">
          <span role="img">✏️</span>
        </button>
      </form>
    </div>
  );
};

export default Average;
