

import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { useTransition, animated } from "react-spring";

const emojis = ["😄", "🤪", "✌️"];

function Transition() {
  const [toggle, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1) % 3), []);
  const transitions = useTransition(toggle, true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div className="App" onClick={onClick}>
      {transitions.map(({ key, props }) => {
        return (
          <animated.div key={key} style={props} className="div-emoji">
            {emojis[key]}
          </animated.div>
        );
      })}
    </div>
  );
}
export default Transition;
