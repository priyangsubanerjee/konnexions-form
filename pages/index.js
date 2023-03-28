/* eslint-disable @next/next/no-img-element */
import { addResponse } from "@/helper/graph";
import Head from "next/head";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  const [chooseDomainOpen, setChooseDomainOpen] = useState(false);
  const domains = ["Web development", "App development", "Machine learning"];
  const [form, setForm] = useState({
    domain: "",
    teamLeaderName: "",
    teamLeaderEmail: "",
    teamLeaderRoll: "",
    member2Name: "",
    member2Email: "",
    member2Roll: "",
    member3Name: "",
    member3Email: "",
    member3Roll: "",
  });
  const handleSubmit = async () => {
    if (form.domain.length == 0) {
      toast.error("Please select a domain");
      return;
    }
    if (form.teamLeaderName.length == 0) {
      toast.error("Please enter team leader name");
      document.getElementById("teamLeaderName").focus();
      return;
    } else if (form.teamLeaderRoll.length == 0) {
      toast.error("Please enter team leader roll");
      document.getElementById("teamLeaderRoll").focus();
      return;
    } else if (form.teamLeaderEmail.length == 0) {
      toast.error("Please enter team leader email");
      document.getElementById("teamLeaderEmail").focus();
      return;
    } else if (
      form.teamLeaderEmail.length !== 0 &&
      !form.teamLeaderEmail.includes("@kiit.ac.in")
    ) {
      toast.error("Please enter a valid kiit email");
      document.getElementById("teamLeaderEmail").focus();
      return;
    }

    // member 2
    else if (form.member2Name.length == 0) {
      toast.error("Please enter member 2 name");
      document.getElementById("member2Name").focus();
      return;
    } else if (form.member2Roll.length == 0) {
      toast.error("Please enter member 2 roll");
      document.getElementById("member2Roll").focus();
      return;
    } else if (form.member2Email.length == 0) {
      toast.error("Please enter member 2 email");
      document.getElementById("member2Email").focus();
      return;
    } else if (
      form.member2Email.length !== 0 &&
      !form.member2Email.includes("@kiit.ac.in")
    ) {
      toast.error("Please enter a valid kiit email");
      document.getElementById("member2Email").focus();
      return;
    }

    // member 3
    else if (form.member3Name.length == 0) {
      toast.error("Please enter member 3 name");
      document.getElementById("member3Name").focus();
      return;
    } else if (form.member3Roll.length == 0) {
      toast.error("Please enter member 3 roll");
      document.getElementById("member3Roll").focus();
      return;
    } else if (form.member3Email.length == 0) {
      toast.error("Please enter member 3 email");
      document.getElementById("member3Email").focus();
      return;
    } else if (
      form.member3Email.length !== 0 &&
      !form.member3Email.includes("@kiit.ac.in")
    ) {
      toast.error("Please enter a valid kiit email");
      document.getElementById("member3Email").focus();
      return;
    }

    const resp = await addResponse(JSON.stringify(form));
    if (resp.success) {
      toast.success("Form submitted successfully");
    } else {
      // find key wrapped in double quotes
      const key = resp.message.match(/"(.*?)"/)[1];
      switch (key) {
        case "leadEmail":
          toast.error("Team leader email already exists");
          document.getElementById("teamLeaderEmail").focus();
          break;
        case "leadRoll":
          toast.error("Team leader roll already exists");
          document.getElementById("teamLeaderRoll").focus();
          break;
        case "member2Email":
          toast.error("Member 2 email already exists");
          document.getElementById("member2Email").focus();
          break;
        case "member2Roll":
          toast.error("Member 2 roll already exists");
          document.getElementById("member2Roll").focus();
          break;
        case "member3Email":
          toast.error("Member 3 email already exists");
          document.getElementById("member3Email").focus();
          break;
        case "member3Roll":
          toast.error("Member 3 roll already exists");
          document.getElementById("member3Roll").focus();
          break;
        default:
          toast.error("Something went wrong");
          break;
      }
    }
  };
  return (
    <div className="lg:h-screen w-screen lg:flex bg-[#1c1d21] scrollbar-hide">
      <div className="lg:w-[500px] shrink-0 h-full bg-[#111213]">
        <div className="p-0 relative">
          <img
            src="https://s35764.pcdn.co/wp-content/uploads/2021/09/tech2-1024x630.png"
            alt=""
            className="rounded-md h-60 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111213]"></div>
        </div>
        <div className="p-10">
          <h1 className="text-2xl font-montserrat text-gray-100 font-bold ">
            Tech event 2023
          </h1>
          <p className="text-sm text-gray-400 leading-8 mt-4 font-montserrat">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            aperiam necessitatibus eos quos, doloribus ullam id, quas assumenda
            autem labore maxime. Cupiditate est esse pariatur, reiciendis quis
            illo temporibus.
          </p>
          <p className="text-sm text-gray-400 leading-8 mt-4 font-montserrat">
            <strong className="text-gray-200">Date:</strong> 12th December 2023
          </p>
          <p className="text-sm text-gray-400 leading-8 mt-4 font-montserrat">
            <strong className="text-gray-200">Venue:</strong> Campus 14
          </p>
          <button className=" border text-white px-4 py-3 text-sm mt-7">
            Contact us
          </button>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-full px-0 py-8 lg:p-20 lg:h-screen lg:overflow-auto scrollbar-hide"
      >
        <h1 className="ml-6 uppercase text-3xl font-montserrat font-bold text-white border-b w-fit pb-2">
          Register
        </h1>
        <div className="mt-16 bg-black/10 px-6 py-7 font-montserrat select-none">
          <div>
            <span className="text-gray-300 font-semibold ">
              Choose your domain
            </span>
          </div>
          <div className="flex justify-end mt-5 lg:mt-0">
            <div className="w-full lg:w-96">
              <div
                className={`h-14 ${
                  chooseDomainOpen ? "bg-white/10" : "bg-white/5"
                } rounded-md flex items-center px-6 ${
                  form.domain.length == 0 ? "text-white/50" : "text-white"
                }`}
              >
                <span
                  className="h-full flex items-center w-full"
                  onClick={() => setChooseDomainOpen(!chooseDomainOpen)}
                >
                  {form.domain.length == 0 ? "Select domain" : form.domain}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  onClick={() => setChooseDomainOpen(!chooseDomainOpen)}
                  stroke="currentColor"
                  class={`w-4 h-4 ml-auto shrink-0 ${
                    chooseDomainOpen ? "rotate-180" : "rotate-0"
                  } transition-all`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="relative">
                {chooseDomainOpen && (
                  <div className="absolute top-0 inset-x-0">
                    <div className="bg-[#100f14] rounded-md shadow-2xl mt-2 h-44 w-full">
                      <ul className="p-3">
                        {domains.map((domain, index) => {
                          return (
                            <li
                              key={index}
                              onClick={() => {
                                setForm({ ...form, domain: domain });
                                setChooseDomainOpen(false);
                              }}
                              className="px-5 py-3 hover:bg-white/5 rounded-md transition-all cursor-pointer"
                            >
                              <span className="text-white/70 text-sm">
                                {domain}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 bg-black/10 px-6 py-7 font-montserrat">
          <div>
            <span className="text-gray-300 font-semibold ">
              Team lead details
            </span>
          </div>
          <div className="lg:flex justify-end mt-5 lg:mt-0">
            <div className="space-y-4">
              <input
                placeholder="Name"
                id="teamLeaderName"
                value={form.teamLeaderName}
                onChange={(e) => {
                  setForm({
                    ...form,
                    teamLeaderName: e.target.value,
                  });
                }}
                type={"text"}
                className="w-full lg:w-96 h-14 outline-none focus-within:bg-white/10 placeholder-white/50 bg-white/5 rounded-md flex items-center px-6 r text-white/90 transition-all"
              />
              <input
                placeholder="Roll number"
                id="teamLeaderRoll"
                value={form.teamLeaderRoll}
                onChange={(e) => {
                  setForm({
                    ...form,
                    teamLeaderRoll: e.target.value,
                  });
                }}
                type={"text"}
                className="w-full lg:w-96 h-14 outline-none focus-within:bg-white/10 placeholder-white/50 bg-white/5 rounded-md flex items-center px-6 r text-white/90 transition-all"
              />
              <input
                placeholder="Email address"
                id="teamLeaderEmail"
                value={form.teamLeaderEmail}
                onChange={(e) => {
                  setForm({
                    ...form,
                    teamLeaderEmail: e.target.value,
                  });
                }}
                type={"email"}
                className="w-full lg:w-96 h-14 outline-none focus-within:bg-white/10 placeholder-white/50 bg-white/5 rounded-md flex items-center px-6 r text-white/90 transition-all"
              />
            </div>
          </div>
        </div>
        <div className="mt-7 bg-black/10 px-6 py-7 font-montserrat">
          <div>
            <span className="text-gray-300 font-semibold ">
              Member 2 details
            </span>
          </div>
          <div className="lg:flex justify-end mt-5 lg:mt-0">
            <div className="space-y-4">
              <input
                placeholder="Name"
                value={form.member2Name}
                id="member2Name"
                onChange={(e) => {
                  setForm({
                    ...form,
                    member2Name: e.target.value,
                  });
                }}
                type={"text"}
                className="w-full lg:w-96 h-14 outline-none focus-within:bg-white/10 placeholder-white/50 bg-white/5 rounded-md flex items-center px-6 r text-white/90 transition-all"
              />
              <input
                placeholder="Roll number"
                id="member2Roll"
                value={form.member2Roll}
                onChange={(e) => {
                  setForm({
                    ...form,
                    member2Roll: e.target.value,
                  });
                }}
                type={"text"}
                className="w-full lg:w-96 h-14 outline-none focus-within:bg-white/10 placeholder-white/50 bg-white/5 rounded-md flex items-center px-6 r text-white/90 transition-all"
              />
              <input
                placeholder="Email address"
                id="member2Email"
                value={form.member2Email}
                onChange={(e) => {
                  setForm({
                    ...form,
                    member2Email: e.target.value,
                  });
                }}
                type={"email"}
                className="w-full lg:w-96 h-14 outline-none focus-within:bg-white/10 placeholder-white/50 bg-white/5 rounded-md flex items-center px-6 r text-white/90 transition-all"
              />
            </div>
          </div>
        </div>
        <div className="mt-7 bg-black/10 px-6 py-7 font-montserrat">
          <div>
            <span className="text-gray-300 font-semibold ">
              Member 3 details
            </span>
          </div>
          <div className="lg:flex justify-end mt-5 lg:mt-0">
            <div className="space-y-4">
              <input
                placeholder="Name"
                id="member3Name"
                value={form.member3Name}
                onChange={(e) => {
                  setForm({
                    ...form,
                    member3Name: e.target.value,
                  });
                }}
                type={"text"}
                className="w-full lg:w-96 h-14 outline-none focus-within:bg-white/10 placeholder-white/50 bg-white/5 rounded-md flex items-center px-6 r text-white/90 transition-all"
              />
              <input
                placeholder="Roll number"
                id="member3Roll"
                value={form.member3Roll}
                onChange={(e) => {
                  setForm({
                    ...form,
                    member3Roll: e.target.value,
                  });
                }}
                type={"text"}
                className="w-full lg:w-96 h-14 outline-none focus-within:bg-white/10 placeholder-white/50 bg-white/5 rounded-md flex items-center px-6 r text-white/90 transition-all"
              />
              <input
                placeholder="Email address"
                id="member3Email"
                value={form.member3Email}
                onChange={(e) => {
                  setForm({
                    ...form,
                    member3Email: e.target.value,
                  });
                }}
                type={"email"}
                className="w-full lg:w-96 h-14 outline-none focus-within:bg-white/10 placeholder-white/50 bg-white/5 rounded-md flex items-center px-6 r text-white/90 transition-all"
              />
            </div>
          </div>
        </div>
        <div className="mt-7 flex justify-end font-montserrat">
          <button
            type="submit"
            className="bg-white text-black px-10 py-3 mt-7 mr-6 lg:mr-0 font-medium rounded"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
