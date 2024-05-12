import React from "react";

const Highlights = ({ stats }) => {
  return (
    <div className="p-3 bg-slate-600 flex justify-start flex-col items-center text-slate-200">
      <span className="text-md">{stats.title}</span>
      <div>
        <span className="text-3xl">{stats.value}</span>
        <span>{stats.unit}</span>
      </div>
      {stats.direction && (
        <div className="mt-1 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          <span className="ms-1">{stats.direction}</span>
        </div>
      )}
      {stats.title == "Humidity" && (
        <div className="mt-3 w-28 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Highlights;
