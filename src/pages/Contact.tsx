import { Button } from "flowbite-react";
import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_t9564z3",
          "template_gcp44gu",
          form.current,
          "user_zGZ7M9G7Yd20lIrSMAwL9"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Email sent successfully!", {
              position: "bottom-left",
              className: "foo-bar",
            });
          },
          (error) => {
            console.log(error.text);
            toast.error("Failed to send email. Please try again.", {
              position: "bottom-left",
              className: "foo-bar",
            });
          }
        );
    }
  };
  return (
    <div className="relative flex justify-center items-center">
      <div className="bg-MainBG rounded-2xl absolute h-[93vh] w-full top-5 flex justify-center ">
        <ToastContainer />
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold text-white">
            Contact <span className="text-second">Me</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-3 w-[35vh] lg:w-[60vh] pt-3"
          >
            <input
              className="rounded-2xl"
              type="text"
              name="Name"
              placeholder="Your Name"
            />
            <input
              className="rounded-2xl"
              type="Email"
              name="Email"
              placeholder="Your Email Address"
            />
            <textarea
              className="rounded-2xl"
              placeholder="Your Message"
              name="message"
              rows={10}
            ></textarea>
            <Button
              type="submit"
              className="bg-second btn-primary flex items-center justify-center"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
