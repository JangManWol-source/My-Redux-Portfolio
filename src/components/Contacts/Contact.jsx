import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsg from "@mui/icons-material/PermPhoneMsg";
import { motion } from "framer-motion";
import variants from "../Animation/in-out";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Modal from "../UI/Modal";
const Contact = () => {
  const form = useRef();
  const buttonColor = useSelector((state) => state.toggle.textColor);
  const color = useSelector((state) => state.toggle.mode);
  const [error, setError] = useState({
    title: "",
    message: "",
  });
  const [open, setOpen] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (form.current.from_name.value.length === 0) {
      setError({ title: "Warning", message: "Input your username." });
      setOpen(true);
      return;
    } else if (form.current.message.value.length === 0) {
      setError({
        title: "Warning",
        message: "Give some feedback or message to the developer.",
      });
      setOpen(true);
    } else if (form.current.user_email.value.length === 0) {
      setError({ title: "Warning", message: "Please type your email." });
      setOpen(true);
    } else {
      emailjs
        .sendForm(
          "service_u7r2g48",
          "template_50j08a4",
          form.current,
          "jORiEf6m2Ak_v7UKh"
        )
        .then(
          (result) => {
            console.log(result.text);
            setError({title: `Response: '${result.text}'`, message: 'Email send successfully.'});
            setOpen(true)
            clearInput()
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  const onCloseHandler = () => {
    setOpen(false);
    setError(null);
  };
  const clearInput = () => {
    form.current.message.value = null
    form.current.from_name.value = null
    form.current.user_email.value = null
  }
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex flex-col min-h-screen  items-center justify-start sm:justify-start"
    >
      <form
        ref={form}
        onSubmit={onSubmitHandler}
        className=" w-full flex flex-col items-end rounded px-8 pt-1 pb-8 mb-4 m-10"
      >
        {error && (
          <Modal
            title={error.title}
            desc={error.message}
            closeModal={onCloseHandler}
            button={"OK"}
            isOpen={open}
          ></Modal>
        )}
        <div className="title w-full text-left py-5 text-x1">Let's talk</div>
        <div className="mb-4 w-full">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="from_name"
            placeholder="Username"
          />
        </div>

        <div className="mb-4 w-full">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="user_email"
            placeholder="Email"
          />
        </div>

        <textarea
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          name="message"
          rows="3"
          placeholder="Your message"
        ></textarea>

        <Button
          type="submit"
          value="Send"
          variant="contained"
          sx={{ backgroundColor: buttonColor, color: color, marginTop: 5 }}
        >
          Submit
        </Button>
      </form>

      <div className="w-full pl-7 flex pb-7">
        <div className="infos_details">
          <div className="info_">
            <LocationOnIcon /> <span>Quezon City, NCR 1119 Philippines</span>
          </div>
          <div className="info_">
            <EmailIcon /> <span>jamisjoecristian@gmail.com</span>
          </div>
          <div className="info_">
            <PermPhoneMsg /> <span>09914219787/09213479586</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
