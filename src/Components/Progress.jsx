import React from "react";

function Progress({ index, numQuestions, points, allPoints, answer }) {
  const progressValue = (index + Number(answer !== null)) / numQuestions * 100;

  return (
    <header className="flex flex-col w-2/6 items-center my-4">
      <div className="w-full h-2 rounded-md bg-slate-300 overflow-hidden">
        <div
          className="h-full rounded-md bg-blue-500 transition-all"
          style={{ width: `${progressValue}%` }}
        />
      </div>
      <div className="flex justify-between w-full mt-2 text-gray-200">
        <p className="text-md">Question <strong>{index + 1}</strong> / {numQuestions}</p>
        <p className="text-md ">
          <strong>{points} / {allPoints}</strong>
        </p>
      </div>
    </header>
  );
}

export default Progress;
