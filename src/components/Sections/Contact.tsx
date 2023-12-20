import React, { useContext, useRef } from "react";
import HomePageSection from "../HomePageSection";
import { IoMdSend } from "react-icons/io";
import { BiReset } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import ServerStateContext from "../../context/ServerStateContext";
import { IContactField } from "../../Types";
import GoogleMap from "../GoogleMap";

const Contact: React.FC = () => {
  const form = useRef();

  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const { serverState, setServerState, handleServerResponse }: any =
    useContext(ServerStateContext);

  const handleOnChange = (event: any) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    setServerState({ submitting: true });
    emailjs
      .sendForm(
        `${process.env.EMAILJS_SERVICE_ID}`,
        `${process.env.EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.EMAILJS_PUBLIC_ID}`
      )
      .then(
        (result) => {
          handleServerResponse(result.status, "Message sent successfully!");
          handleReset();
          console.log(result.text);
        },
        (error) => {
          handleServerResponse(
            error.status,
            "There was an error trying to submit your request."
          );
          console.log(error);
        }
      );
  };

  const handleReset = () => {
    setInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  const contactFields: IContactField[] = [
    {
      id: "to_name",
      name: "to_name",
      type: "hidden",
      value: "Cris",
    },
    {
      id: "from_name",
      name: "from_name",
      type: "hidden",
      value: "crisnoel12.github.io",
    },
    {
      id: "name",
      name: "user_name",
      placeholder: "NAME*",
      value: inputs.name,
      onChange: handleOnChange,
      required: true,
    },
    {
      id: "email",
      name: "reply_to",
      type: "email",
      placeholder: "E-MAIL*",
      value: inputs.email,
      onChange: handleOnChange,
      required: true,
    },
    {
      id: "message",
      name: "message",
      placeholder: "MESSAGE*",
      value: inputs.message,
      onChange: handleOnChange,
      rows: 8,
      required: true,
    },
  ];

  const contactFieldClassName =
    "w-full mb-3 p-5 bg-gray-200 border-solid border-b-2 border-gray-500 rounded";

  return (
    <HomePageSection title={"contact"} noDivider>
      <div className="grid lg:grid-cols-2 gap-4">
        <form
          ref={form}
          onSubmit={handleOnSubmit}
          noValidate
          autoComplete="off"
        >
          {contactFields.map((field: IContactField) => {
            if (!field.rows) {
              return (
                <input
                  key={field.id}
                  {...field}
                  className={contactFieldClassName}
                />
              );
            }
            return (
              <textarea
                key={field.id}
                {...field}
                className={contactFieldClassName}
              />
            );
          })}
          <div className={"flex justify-end"}>
            <button
              type="submit"
              className={
                "bg-red-700 border-2 border-red-700 hover:bg-red-800 hover:border-red-800 transition ease-in-out w-full lg:w-36 p-2 rounded text-white mr-2"
              }
              disabled={serverState.submitting}
            >
              {!serverState.submitting ? (
                <div className="inline-flex items-center">
                  <IoMdSend className="h-5 w-5 mr-2" color={"white"} />
                  <span>SEND</span>
                </div>
              ) : (
                <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 text-white mx-auto" />
              )}
            </button>
            <button
              type={"reset"}
              className="border-2 border-black hover:bg-black hover:text-white transition ease-in-out w-full lg:w-36 p-2 rounded"
              onClick={handleReset}
            >
              <div className="inline-flex items-center">
                <BiReset className="h-5 w-5 mr-2" />
                <span>RESET</span>
              </div>
            </button>
          </div>
        </form>
        <GoogleMap />
      </div>
    </HomePageSection>
  );
};

export default Contact;
