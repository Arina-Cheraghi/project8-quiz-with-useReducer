import React from "react";

function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="bg-teal-800 text-white font-semibold py-2 px-4 rounded hover:bg-teal-700 hover:shadow-lg transition duration-300"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
