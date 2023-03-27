import { addResponse } from "@/helper/graph";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import React, { useState, useMemo } from "react";
import { toast } from "react-hot-toast";

function Form({ className }) {
  const [formData, setFormData] = useState({
    domain: "",
    leadName: "",
    leadRollNumber: "",
    leadEmailId: "",
    member2Name: "",
    member2RollNumber: "",
    member2EmailId: "",
    member3Name: "",
    member3RollNumber: "",
    member3EmailId: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const response = await addResponse(formData);
    if (response.success) {
      setLoading(false);
      toast.success(response.message);
      setFormData({
        domain: "",
        leadName: "",
        leadRollNumber: "",
        leadEmailId: "",
        member2Name: "",
        member2RollNumber: "",
        member2EmailId: "",
        member3Name: "",
        member3RollNumber: "",
        member3EmailId: "",
      });
    } else {
      setLoading(false);
      const message = response.message;
      const duplicateKey = message.match(/"(.*?)"/)[1];
      switch (duplicateKey) {
        case "leadEmailId":
          toast.error("Lead email already exists");
          break;
        case "leadRoll":
          toast.error("Lead roll number already exists");
          break;
        case "member2Email":
          toast.error("Member 2 email already exists");
          break;
        case "member2Roll":
          toast.error("Member 2 roll number already exists");
          break;
        case "member3Email":
          toast.error("Member 3 email already exists");
          break;
        case "member3Roll":
          toast.error("Member 3 roll number already exists");
          break;
        default:
          toast.error("Something went wrong");
          break;
      }
    }
  };

  return (
    <div className={`${className} py-10 relative`}>
      <h1 className="text-white uppercase text-2xl font-bold text-center">
        Registration Form
      </h1>
      <div className="flex items-center justify-center">
        <div className="w-[30%] h-[1px] bg-white mt-3"></div>
      </div>
      <div className="px-10 mt-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (formData.domain.length === 0) {
              toast.error("Domain is required");
              return;
            } else if (formData.leadName.length === 0) {
              toast.error("Lead name is required");
              return;
            } else if (
              formData.leadEmailId.includes("@kiit.ac.in") === false ||
              formData.member2EmailId.includes("@kiit.ac.in") === false ||
              formData.member3EmailId.includes("@kiit.ac.in") === false
            ) {
              toast.error("Email is not valid");
              return;
            }

            handleSubmit();
          }}
        >
          <Select
            onChange={(e) => {
              setFormData({ ...formData, domain: e.toString() });
            }}
            label="Select domain"
            size="lg"
            className="text-white"
            error={formData.leadName.length > 0 && formData.domain.length === 0}
          >
            <Option value="Web development">Web development</Option>
            <Option value="App development">App development</Option>
            <Option value="Resources">Resource</Option>
          </Select>

          <div className="mt-5 space-y-5 w-full">
            <Input
              value={formData.leadName}
              onChange={(e) => {
                setFormData({ ...formData, leadName: e.target.value });
              }}
              label="Lead name"
              size="lg"
              className="text-white w-full"
            />
            <Input
              label="Lead roll number"
              required={formData.leadName.length > 0}
              value={formData.leadRollNumber}
              onChange={(e) => {
                setFormData({ ...formData, leadRollNumber: e.target.value });
              }}
              size="lg"
              className="text-white w-full"
            />
            <Input
              label="Lead email id"
              required={formData.leadName.length > 0}
              error={
                formData.leadEmailId.includes("@") &&
                !formData.leadEmailId.includes("@kiit.ac.in")
              }
              value={formData.leadEmailId}
              onChange={(e) => {
                setFormData({ ...formData, leadEmailId: e.target.value });
              }}
              type={"email"}
              size="lg"
              className="text-white w-full"
            />
            <Input
              label="Member 2 name"
              value={formData.member2Name}
              onChange={(e) => {
                setFormData({ ...formData, member2Name: e.target.value });
              }}
              size="lg"
              className="text-white w-full"
            />
            <Input
              label="Member 2 roll number"
              value={formData.member2RollNumber}
              onChange={(e) => {
                setFormData({ ...formData, member2RollNumber: e.target.value });
              }}
              required={formData.member2Name.length > 0}
              size="lg"
              className="text-white w-full"
            />
            <Input
              label="Member 2 email id"
              error={
                formData.member2EmailId.includes("@") &&
                !formData.member2EmailId.includes("@kiit.ac.in")
              }
              value={formData.member2EmailId}
              onChange={(e) => {
                setFormData({ ...formData, member2EmailId: e.target.value });
              }}
              type={"email"}
              required={formData.member2Name.length > 0}
              size="lg"
              className="text-white w-full"
            />
            <Input
              label="Member 3 name"
              value={formData.member3Name}
              onChange={(e) => {
                setFormData({ ...formData, member3Name: e.target.value });
              }}
              size="lg"
              className="text-white w-full"
            />
            <Input
              label="Member 3 roll number"
              value={formData.member3RollNumber}
              onChange={(e) => {
                setFormData({ ...formData, member3RollNumber: e.target.value });
              }}
              required={formData.member3Name.length > 0}
              size="lg"
              className="text-white w-full"
            />
            <Input
              label="Member 3 email id"
              error={
                formData.member3EmailId.includes("@") &&
                !formData.member3EmailId.includes("@kiit.ac.in")
              }
              value={formData.member3EmailId}
              onChange={(e) => {
                setFormData({ ...formData, member3EmailId: e.target.value });
              }}
              required={formData.member3Name.length > 0}
              type={"email"}
              size="lg"
              className="text-white w-full"
            />
          </div>
          <div className="flex items-center justify-center py-10">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white px-10 py-2 rounded-full transition-all"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      {loading && (
        <div className="fixed inset-0 z-10 bg-slate-primary/80 h-full w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-24 w-24 border-2 border-t-white border-white/30"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
