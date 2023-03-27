import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <div className="w-full h-screen overflow-hidden bg-teal-100"></div>
        <Form className="h-full max-h-screen bg-slate-primary ml-auto w-[500px] shrink-0 overflow-auto scrollbar-hide" />
      </div>
    </div>
  );
}
