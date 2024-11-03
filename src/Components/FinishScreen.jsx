import React from "react";

function FinishScreen({ points, allPoints }) {
  const percentage = (points / allPoints) * 100;
  return (
    <p className="bg-cyan-700 p-4 w-2/6 rounded-full text-gray-200 mt-6 text-center">
      You Scored <strong className="text-orange-200">{points}</strong> out of { allPoints} ({Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
