import React, { useState } from "react";
import RenderCount from "./RenderCount";
import EnterText from "./EnterText";

function Container() {
  const [text, setText] = useState("");
  const handleCText = (e) => {
    setText(e);
  };

  return (
    <div className="word">
      <div className="container">
        <header>
          <h2>Word Counter</h2>
        </header>
        {/* render coaunt */}
        <RenderCount text={text} />
        {/* textenter */}
        <EnterText handleCText={handleCText} />
        <div className="button_click">
          <button>Click to UpperCase</button>
          <button>Click to Lowercase</button>
        </div>
      </div>
    </div>
  );
}

export default Container;
