import React from "react";

export default function Button({ onClick, type = "number", value, props }) {
  return (
    <button
      {...props}
      onClick={(e) => onClick(e.target.textContent)}
      className={`h-full w-full ${
        type === "number"
          ? "bg-gray-300 hover:bg-gray-400"
          : "bg-orange-500 hover:bg-orange-600 transition-all font-bold text-white"
      }  transition-all`}
    >
      {value}
    </button>
  );
}
