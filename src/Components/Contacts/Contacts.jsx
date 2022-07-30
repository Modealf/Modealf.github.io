import React from "react";
import "./contacts.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gbvtu38",
        "template_pd8t5i1",
        form.current,
        "4Vp9YOf8pYo8eTnaO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Moala057@gmail.com</h5>
            <a href="mailto:Moala057@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@Modealf</h5>
            <a href="https://t.me/Modealf">Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+966 555113075</h5>
            <a href="https://api.whatsapp.com/send?phone=+966555113075">
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
