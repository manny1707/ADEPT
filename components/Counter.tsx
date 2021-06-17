import React from "react";

export const Counter = () => {
  const [count, updateCount] = React.useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>You have clicked {count} times</p>
      <button onClick={() => updateCount(count + 1)}> Click Me!</button>
    </div>
  );
};
