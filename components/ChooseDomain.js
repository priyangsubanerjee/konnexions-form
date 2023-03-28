import React, { useState } from "react";

function ChooseDomain({ setStep, step, form, setForm }) {
  const [chooseDomain, setChooseDomain] = useState(false);
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 w-fit">
        Choose your <span className="text-indigo-500">domain</span>
      </h1>
      <div className="mt-7 lg:h-20 bg-slate-50 flex flex-col lg:flex-row lg:items-center justify-between p-4 lg:p-3 rounded-md lg:space-x-4">
        <label
          htmlFor=""
          className="text-slate-600 font-medium shrink-0 lg:ml-7"
        >
          Select domain
        </label>
        <div className="lg:w-[70%] h-full mt-3">
          <div
            onClick={() => {
              setChooseDomain(!chooseDomain);
            }}
            className="w-full h-12 lg:h-full bg-white border border-slate-200 rounded-md flex items-center cursor-pointer"
          >
            {form.domain.length == 0 ? (
              <span className="text-slate-400 px-6">
                Choose from available domains
              </span>
            ) : (
              <span className="text-slate-700 px-6">{form.domain}</span>
            )}
          </div>
          <div className="relative w-full">
            {chooseDomain && (
              <div className="absolute z-10 w-full bg-white rounded-lg shadow-xl shadow-black/[0.05] border border-slate-200 mt-2 p-2">
                <ul>
                  <li
                    onClick={() => {
                      setForm({ ...form, domain: "Web development" });
                      setChooseDomain(false);
                    }}
                    className="flex text-sm items-center px-6 py-3 text-slate-500 hover:bg-slate-100 rounded-md transition-all tracking-wide cursor-pointer"
                  >
                    Web development
                  </li>
                  <li
                    onClick={() => {
                      setForm({ ...form, domain: "App development" });
                      setChooseDomain(false);
                    }}
                    className="flex text-sm items-center px-6 py-3 text-slate-500 hover:bg-slate-100 rounded-md transition-all tracking-wide cursor-pointer"
                  >
                    App development
                  </li>
                  <li
                    onClick={() => {
                      setForm({ ...form, domain: "Ui/Ux Development" });
                      setChooseDomain(false);
                    }}
                    className="flex text-sm items-center px-6 py-3 text-slate-500 hover:bg-slate-100 rounded-md transition-all tracking-wide cursor-pointer"
                  >
                    Ui/Ux development
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-10">
        <button
          disabled={form.domain.length == 0}
          onClick={() => {
            setStep(step + 1);
          }}
          className="flex items-center space-x-3 disabled:opacity-50 bg-indigo-500 hover:bg-indigo-600 shadow px-4 py-3 text-white rounded transition-all duration-200 text-sm"
        >
          <span>Team leader details</span>
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
    </div>
  );
}

export default ChooseDomain;
