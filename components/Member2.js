import React, { useState, useEffect } from "react";

function Member2({ step, setStep, form, setForm }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [canProceed, setCanProceed] = useState(false);
  useEffect(() => {
    if (
      form.member2Name.length == 0 ||
      form.member2Email.length == 0 ||
      form.member2Roll.length == 0
    ) {
      setCanProceed(false);
      return;
    } else if (!form.member2Email.toLowerCase().includes("@")) {
      setErrorMessage("Please enter a valid email address");
      setCanProceed(false);
      return;
    } else if (
      form.member2Email.toLowerCase().includes("@") &&
      !form.member2Email.toLowerCase().includes("@kiit.ac.in")
    ) {
      setCanProceed(false);
      setErrorMessage("Please use KiiT email address");
      return;
    }
    setErrorMessage("");
    setCanProceed(true);
  }, [form]);
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 w-fit">
        Member 2 <span className="text-indigo-500">details</span>
      </h1>
      <div className="bg-slate-50 rounded-md">
        <div className="mt-7 lg:h-20 bg-slate-50 flex flex-col lg:flex-row lg:items-center justify-between p-4 lg:p-3 rounded-md lg:space-x-4">
          <span className="text-slate-600 font-medium shrink-0 lg:ml-7">
            Full name
          </span>
          <input
            placeholder="John Doe"
            value={form.member2Name}
            onChange={(e) => {
              setForm({ ...form, member2Name: e.target.value });
            }}
            className="lg:w-[70%] h-12 lg:h-full bg-white border border-slate-200 rounded-md flex items-center px-6 mt-2 lg:mt-0 outline-none"
          />
        </div>
        <div className="lg:mt-7 lg:h-20 bg-slate-50 flex flex-col lg:flex-row lg:items-center justify-between p-4 lg:p-3 rounded-md lg:space-x-4">
          <span className="text-slate-600 font-medium shrink-0 lg:ml-7">
            Email address
          </span>
          <input
            placeholder="abc@kiit.ac.in"
            value={form.member2Email}
            onChange={(e) => {
              setForm({ ...form, member2Email: e.target.value });
            }}
            className="lg:w-[70%] h-12 lg:h-full bg-white border border-slate-200 rounded-md flex items-center px-6 mt-2 lg:mt-0 outline-none"
          />
        </div>
        <div className="lg:mt-7 lg:h-20 bg-slate-50 flex flex-col lg:flex-row lg:items-center justify-between p-4 lg:p-3 rounded-md lg:space-x-4">
          <span className="text-slate-600 font-medium shrink-0 lg:ml-7">
            Roll number
          </span>
          <input
            placeholder="134XXXX"
            value={form.member2Roll}
            onChange={(e) => {
              setForm({ ...form, member2Roll: e.target.value });
            }}
            className="lg:w-[70%] h-12 lg:h-full bg-white border border-slate-200 rounded-md flex items-center px-6 mt-2 lg:mt-0 outline-none"
          />
        </div>
      </div>
      <p className="h-10 mt-4 text-sm tracking-wide flex items-center text-red-500 px-3">
        {errorMessage}
      </p>
      <div className="flex items-center justify-between mt-7 lg:mt10">
        <button
          onClick={() => {
            setStep(step - 1);
          }}
          className="text-indigo-500 space-x-2 flex items-center text-sm"
        >
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          <span>Back </span>
        </button>
        <button
          disabled={!canProceed}
          onClick={() => {
            setStep(step + 1);
          }}
          className="flex disabled:opacity-50 items-center space-x-3 bg-indigo-500 hover:bg-indigo-600 shadow px-4 py-3 text-white rounded transition-all duration-200 text-sm"
        >
          <span>Member 3 details</span>
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

export default Member2;
