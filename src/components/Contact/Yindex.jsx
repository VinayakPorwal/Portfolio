"use client";
// import mailer from "@/helper/nodemailer";
import { validateForm } from "@/helper/validateForm";
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    const result = validateForm({ name, email, message });
    if (result.isValid) {
      try {
        const response = await fetch("/api/sendmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
      } catch (e) {
        console.log(e);
      }
      alert("Email sent successfully");
    } else {
      alert(result.message);
    }
  }
  return (
    <section className="h-[80vh] w-full flex flex-col items-center justify-center border">
      <h1 className="text-center font-medium text-4xl border border-solid border-white p-4">
        Send Me an Email
      </h1>
      <div className="mx-auto p-2 w-max bg-white transiton duration-200 border-2 border-b-[6px] border-gray-700 hover:border-purple shadow-custom rounded-lg text-purple text-center flex flex-col justify-center m-2">
        <div className=" max-w-xs text-left">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="text-black border-2 p-2 w-full rounded-lg border-b-[6px] border-gray-800 mb-2"
            placeholder="Name"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="text-black border-2 p-2 w-full rounded-lg border-b-[6px] border-gray-800 mb-2"
            placeholder="Your email address"
          />
          <label htmlFor="msg">Message</label>
          <textarea
            id="msg"
            onChange={(e) => setMessage(e.target.value)}
            className="text-black border-2 p-2 w-full rounded-lg border-b-[6px] border-gray-800 mb-2"
            placeholder="Enter your message"
          />

          <button
            onClick={handleSubmit}
            className="border-2 bg-purple text-white p-2 w-full rounded-lg border-b-[6px] border-gray-800 mb-2"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
