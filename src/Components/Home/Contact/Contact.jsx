import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gi7huvv",
        "template_ykv6282",
        form.current,
        "2kmyArszpSdfHU9Js"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-fixed min-h-screen hero "  style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/neelimapriya/portfolio1/main/src/assets/abstract-digital-grid-black-background.jpg)",
      }}>
      
      

     <div className="  mx-auto  md:w-1/2">
     <h2 className="text-xl md:text-2xl font-semibold font-serif text-center text-slate-100"> Send me a Message</h2>
     <form onSubmit={sendEmail} ref={form} className="">
      
        <div className="form-control w-52 md:w-full mx-auto">
          <label className="label">
            <span className="label-text font-serif text-xl text-slate-100">Name</span>
          </label>
          <input
            type="text"
            name="form_name"
            placeholder=" Name"
            className="border text-black bg-slate-100 rounded-lg border-black p-2"
            required
          />
        </div>
        <div className="form-control w-52 md:w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl text-slate-100 font-serif">Email</span>
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="email"
            className="border w-full text-black border-black p-2 bg-slate-100 rounded-lg"
            required
          />
        </div>
        <div className="form-control w-52 md:w-full mx-auto">
          <label className="label">
            <span className="label-text text-xl text-slate-100 font-serif">Message</span>
          </label>
          <textarea
            className="border text-black border-black p-2 bg-slate-100 rounded-lg"
            name="message"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <div className="form-control w-52 md:w-full mx-auto mt-6">
          <input
            type="submit"
            value="Send"
            className="btn bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-700 hover:to-green-900 text-white text-xl font-serif"
          />
        </div>
      </form>
     </div>
    </div>
  );
};

export default Contact;
