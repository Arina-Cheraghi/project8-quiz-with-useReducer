import React from "react";

function Questions({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div
      className="text-white flex flex-col w-2/5"
      style={{ direction: "rtl" }}
    >
      <h4 className="text-xl font-semibold mb-2">{question.question}</h4>
      <div className="flex flex-col w-4/5 mx-auto my-5">
        {question.options.map((option, index) => (
          <button
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            key={option}
            disabled={hasAnswered}
            className={`flex py-3 bg-slate-600 text-white font-semibold px-4 rounded-3xl transition-all duration-300 mb-2 
            ${index === answer ? "mr-3" : ""} 
            ${
              hasAnswered
                ? index === question.correctAnswer
                  ? "bg-cyan-600 text-black cursor-not-allowed"
                  : "bg-orange-400 cursor-not-allowed"
                : "hover:bg-gray-800 hover:mr-3 hover:shadow-md"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
