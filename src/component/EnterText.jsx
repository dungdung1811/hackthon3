import React from "react";

function EnterText({ handleCText }) {
  return (
    <div className="text_content">
      <textarea
        onChange={(e) => handleCText(e.target.value)}
        name=""
        id=""
        cols="30"
        rows="20"
      ></textarea>
    </div>
  );
}

export default EnterText;
