import React from "react";

function Main({children}) {
  return (
    <main className="p-5 flex flex-col items-center bg-gray-700 h-screen">
      {children}
    </main>
  );
}

export default Main;
