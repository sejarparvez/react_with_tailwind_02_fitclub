import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ht1iup",
        "template_1gbx2ky",
        form.current,
        "Ze-dexfZq0VovnJB-"
      )
      .then(
        (result) => {
          alert(
            "Your mail has been successfuly added to our list. We to mail back to you as soon as possible."
          );
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <div className=" flex gap-40 px-8 flex-col md:flex-row">
      <div className=" relative text-[3rem] font-bold text-white">
        <hr className=" absolute w-40 border-[2px] border-solid border-orange-500 rounded-full" />
        <div className=" flex flex-col md:flex-row md:gap-4">
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div className=" flex md:gap-4 flex-col md:flex-row">
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="flex justify-center items-end -mt-16">
        <form
          ref={form}
          action=""
          className="flex gap-12 bg-gray-500 p-4"
          onSubmit={sendEmail}
        >
          <input
            className=" bg-transparent border-none outline-none text-gray-300"
            type="email"
            name="your_email"
            placeholder="Enter Your Email Address"
          />
          <button className="btn !bg-orange-500 !text-white border-[2px] border-orange-500 focus:border-2 focus:border-black">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
