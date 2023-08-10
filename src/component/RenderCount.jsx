import React from "react";

function RenderCount({ text }) {
  const word = text.split(" ");
  word.join(" ").split("\n");
  const wordCount = word.filter((e) => e !== "" && e !== "\n");
  const para = text.split("\n");
  const paraCount = para.filter((e) => e !== "");
  const letter = text.split("");
  const letterCount = letter.filter((e) => e !== " ");
  return (
    <div className="wrapper">
      <div className="title">
        Word
        <p>{wordCount.length}</p>
      </div>
      <div className="title">
        Letter
        <p>{letterCount.length}</p>
      </div>
      <div className="title">
        Paragraph
        <p>{paraCount.length}</p>
      </div>
    </div>
  );
}

export default RenderCount;
