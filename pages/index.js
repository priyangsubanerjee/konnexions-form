/* eslint-disable @next/next/no-img-element */
import { addResponse } from "@/helper/graph";
import Head from "next/head";
import { useState } from "react";
import { toast } from "react-hot-toast";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ChooseDomain from "@/components/ChooseDomain";
import TeamLeader from "@/components/TeamLeader";
import Member2 from "@/components/Member2";
import Member3 from "@/components/Member3";

export default function Home() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    domain: "",
    leaderName: "",
    leaderRoll: "",
    leaderEmail: "",
    member2Name: "",
    member2Roll: "",
    member2Email: "",
    member3Name: "",
    member3Roll: "",
    member3Email: "",
  });
  return (
    <div className="lg:h-screen w-screen overflow-auto lg:overflow-hidden fixed inset-0 bg-white lg:flex lg:items-center">
      <div className="lg:block lg:w-[700px] shrink-0 bg-transparent lg:h-full lg:overflow-hidden lg:p-8">
        <div className="bg-slate-100 w-full h-full lg:rounded-xl overflow-hidden pb-8">
          <div className="flex items-center justify-center p-6">
            <img
              src="https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Tech-Events.jpg"
              alt=""
              className="w-[100%] h-[250px] object-cover rounded-xl shadow-slate-300"
            />
          </div>
          <div className="px-8 mt-5">
            <h1 className="text-2xl font-semibold text-slate-800">
              An amazing event name here !
            </h1>
            <p className="text-sm leading-7 text-slate-600 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea
              vero nemo aspernatur neque nam quam consectetur tempora, quas
              nobis impedit quisquam repudiandae molestiae? Quam ducimus
              similique expedita aperiam delectus.
            </p>
            <div className="mt-7 space-y-5">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-sm text-slate-700">
                  20th - 21st march 2023
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="text-sm text-slate-700">
                  Campus 14, KiiT University
                </span>
              </div>
            </div>
            <div className="mt-10 pt-10 flex items-center space-x-6 border-t">
              <button className="bg-indigo-500 hover:bg-indigo-600 shadow px-4 py-3 text-white rounded-md transition-all duration-200 text-sm">
                Contact us
              </button>
              <button className="flex items-center justify-center px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </button>
              <button className="flex items-center justify-center px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden py-6 lg:py-16 px-5 lg:px-8 mt-5 lg:mt-0">
        <div className="flex uppercase justify-between">
          <span className="text-xs tracking-widest">REGISTER</span>
          <span className="text-xs tracking-widest">STEP {step} / 4</span>
        </div>
        <div className="mt-10 lg:mt-20">
          {step == 1 ? (
            <ChooseDomain
              form={form}
              setForm={setForm}
              setStep={setStep}
              step={step}
            />
          ) : step == 2 ? (
            <TeamLeader
              form={form}
              setForm={setForm}
              setStep={setStep}
              step={step}
            />
          ) : step == 3 ? (
            <Member2
              setStep={setStep}
              step={step}
              form={form}
              setForm={setForm}
            />
          ) : (
            <Member3
              setStep={setStep}
              step={step}
              form={form}
              setForm={setForm}
            />
          )}
        </div>
      </div>
    </div>
  );
}
