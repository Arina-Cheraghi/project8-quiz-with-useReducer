import React from "react";

function FinishScreen({ points, allPoints, dispatch }) {
  const percentage = (points / allPoints) * 100;
  return (
    <>
      <p className="bg-cyan-700 p-4 w-2/6 rounded-full text-gray-200 mt-10 text-center">
        You Scored <strong className="text-orange-200">{points}</strong> out of{" "}
        {allPoints} ({Math.ceil(percentage)}%)
      </p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="bg-teal-800 mt-20 text-white font-semibold py-2 px-4 rounded hover:bg-teal-700 hover:shadow-lg transition duration-300"
      >
        ReStart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
