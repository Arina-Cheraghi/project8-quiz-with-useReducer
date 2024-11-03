import React from "react";

function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  const handleClick = () => {
    if (index < numQuestions - 1) {
      dispatch({ type: "nextQuestion" });
    } else {
      dispatch({ type: "finished" });
    }
  };

  return (
    <div className="flex w-1/3 justify-end">
      <button
        className="bg-teal-800 text-white font-semibold py-2 px-4 rounded hover:bg-teal-700 hover:shadow-lg transition duration-300"
        onClick={handleClick}
      >
        {index < numQuestions - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
}

export default NextButton;
