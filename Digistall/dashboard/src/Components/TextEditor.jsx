import React from "react";

const TextEditor = ({ text, onTextChange }) => {
  return (
    <textarea
      className="w-full"
      rows="4"
      placeholder="Enter text here..."
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
    ></textarea>
  );
};

export default TextEditor;
