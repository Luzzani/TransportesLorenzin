import React from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useInView, motion} from 'framer-motion';


const blank = "_blank";

const Contact = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const form = useRef();

  const changeEmailInput = (e) => {
    setEmailInput(emailInput.value);
  };
  const changeNameInput = (e) => {
    setNameInput(nameInput.value);
  };
  const changeTextInput = (e) => {
    setTextInput(textInput.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gvrdwg7",
        "template_4auaz4m",
        form.current,
        "BS8FnM2EAwB8buGPI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmailInput("");
    setNameInput("");
    setTextInput("");
  };

  return (
    <section id="contact">
      <h2
        ref={ref}
        style={{
          transform: isInView ? "none" : "translatex(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}>Contacto</h2>

      <div className="container contact__container"
         ref={ref2}
         style={{
           transform: isInView2 ? "none" : "translateY(200px)",
           opacity: isInView2 ? 1 : 0,
           transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
         }}>
        <div className={`contact__options`}
       >
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lorenzindiego@gmail.com</h5>
            <a href="mailto:lorenzindiego@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Logistica Lorenzin</h5>
            <a href="https://m.me/luzzanilucas" target={blank}>
              Envia un mensaje
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>115992-6483</h5>
            <a href="https://wa.me/5491159926483" target={blank}>
            Envia un mensaje
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <motion.input
            onChange={changeNameInput}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={nameInput}
          />
          <input
            onChange={changeEmailInput}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={emailInput}
          />
          <textarea
            onChange={changeTextInput}
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            value={textInput}
          ></textarea>
          <button type="submit" className="btn btn-primary">
          Envia un mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
