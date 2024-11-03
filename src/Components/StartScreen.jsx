import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="flex flex-col items-center h-1/2 justify-center p-3 rounded-md text-white">
      <h2 className="text-3xl mb-4">Welcome to React Quiz!</h2>
      <h3 className="text-xl mb-6">
        {numQuestions} questions to test your React mastery
      </h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="bg-teal-800 text-white font-semibold py-2 px-4 rounded hover:bg-teal-700 hover:shadow-lg transition duration-300"
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
