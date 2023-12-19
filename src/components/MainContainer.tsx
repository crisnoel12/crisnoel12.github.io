import React, { useEffect } from "react";
import Navbar from "./Navbar";
import PageHelmet from "../Utils/PageHelmet";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.min.css";
import { IServerState } from "../Types";
import ServerStateContext from "../context/ServerStateContext";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  title: string;
  href: string;
  children: any;
  is404?: boolean;
}

export default function MainContainer(props: Props) {
  const [serverState, setServerState] = React.useState<IServerState>({
    submitting: false,
    response: null,
  });

  useEffect(() => {
    serverState.response && notify();
  }, [serverState.response]);

  const handleServerResponse = (status: any, msg: any) => {
    setServerState({
      submitting: false,
      response: { status, msg },
    });
  };

  const notify = () => {
    if (serverState.response) {
      if (serverState.response.status === 200) {
        return toast.success(serverState.response.msg, {
          onClose: resetServerState,
        });
      }
      return toast.error(serverState.response.msg, {
        onClose: resetServerState,
      });
    }
  };

  const resetServerState = () => {
    setServerState({
      submitting: false,
      response: null,
    });
  };

  const { title, href, is404 = false } = props;

  return (
    <ServerStateContext.Provider
      value={{ serverState, setServerState, handleServerResponse }}
    >
      <div className={"grid h-full"}>
        <PageHelmet title={title} href={href} />
        {!is404 && <Navbar />}
        {props.children}
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {!is404 && <Footer />}
      </div>
    </ServerStateContext.Provider>
  );
}
