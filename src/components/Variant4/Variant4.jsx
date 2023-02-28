import React, { useState } from "react";
import Mail from "../Mail";
import "./variant4.css";

const Variant4 = () => {
  const [count, setCount] = useState(0);
  const increment = async () => {
    setCount(count + 1);
  };
  const decrement = async () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <>
      <div class="section border">
        <h2 id="borderNeon">Counter with Border Neon Effect Button</h2>
        <div class="content">
          <button onClick={decrement} class="btn4">
            -
          </button>
          <h1>{count}</h1>
          <button onClick={increment} class="btn4">
            +
          </button>
        </div>
        <a href="#neon">
          {" "}
          <div
            style={{ textAlign: "center", cursor: "pointer" }}
            className="scrollformore"
          >
            <h1 style={{ textAlign: "center" }}>
              <i class="bx bx-chevron-up"></i>
            </h1>
            <h5 style={{ textAlign: "center" }}>Scroll to top</h5>
          </div>
        </a>
        <Mail/>
      </div>
    </>
  );
};

export default Variant4;
