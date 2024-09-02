"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function EmailSection() {
  const form = useRef<any>();
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_USER_ID}`
      )
      .then(
        (response) => {
          setMessage({
            text: "Email sent successfully",
            type: "success",
          });
          e.target.reset();
        },
        (error) => {
          setMessage({
            text: "Failed to send email.",
            type: "error",
          });
        }
      );
  };

  return (
    <>
      <p className="text-2xl font-medium">
        <span>
          <i className="bx bx-envelope text-2xl font-bold mr-2"></i>
        </span>{" "}
        Contact
      </p>
      <p className="text-lg py-3">
        I would be delighted if you were to contact me. Please do not hesitate
        to send me a message, and I will respond promptly.
      </p>
      <div>
        <p
          className={`${
            message.type === "error" ? "bg-red-500" : "bg-green-500"
          } ${
            message.text === "" ? "hidden" : ""
          } text-lg mb-2 text-white px-3 py-1 rounded-md`}
        >
          {message.text}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mx-auto" ref={form}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              className="block w-full p-2 border border-gray-300 rounded-md dark:bg-secondaryDark dark:border-secondaryDark dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className="block w-full p-2 border border-gray-300 rounded-md dark:bg-secondaryDark dark:border-secondaryDark dark:text-white"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            required
            className="block w-full p-2 border border-gray-300 rounded-md dark:bg-secondaryDark dark:border-secondaryDark dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Enter your message"
            required
            className="block w-full p-2 border border-gray-300 rounded-md dark:bg-secondaryDark dark:border-secondaryDark dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="block w-full p-2 text-white bg-gradient-to-r from-primary to-secondary rounded-md hover:bg-gradient-to-l hover:from-primary hover:to-secondary"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
