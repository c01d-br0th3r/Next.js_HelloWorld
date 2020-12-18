import React, { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>This is About page.</div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
};

export default About;
