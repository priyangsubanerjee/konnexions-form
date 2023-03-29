import React from "react";

function RegisteredSuccessfully({ step, setStep }) {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 w-fit">
        Registration <span className="text-indigo-500">successful!</span>
      </h1>
      <p className="text-sm text-gray-500 mt-5">
        You have successfully registered for the event. We will get back to you
        soon.
      </p>
      <button
        onClick={() => {
          setStep(1);
        }}
        className="flex mt-16 disabled:opacity-50 items-center space-x-3 bg-indigo-500 hover:bg-indigo-600 shadow px-4 py-3 text-white rounded transition-all duration-200 text-sm"
      >
        <span>Submit another response</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default RegisteredSuccessfully;
