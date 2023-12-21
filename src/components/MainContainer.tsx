import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PageHelmet from "../Utils/PageHelmet";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.min.css";
import { IServerState } from "../Types";
import ServerStateContext from "../context/ServerStateContext";
import { toast } from "react-toastify";
import { setLocalStorageItem } from "../Utils";
import DarkModeContext from "../context/DarkModeContext";
import ThemeButton from "./ThemeButton";
import Notifications from "./Notifications";

interface Props {
  title: string;
  href: string;
  children: any;
  is404?: boolean;
}

export default function MainContainer(props: Props) {
  const [serverState, setServerState] = useState<IServerState>({
    submitting: false,
    response: null,
  });

  const darkModeSystem =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(
    JSON.parse(
      (typeof window !== "undefined" && window.localStorage.darkMode) ||
        (typeof window !== "undefined" &&
          !window.localStorage.hasOwnProperty("darkMode") &&
          darkModeSystem.matches)
    )
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setLocalStorageItem("darkMode", !darkMode);
  };

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
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <div className={`grid h-auto ${darkMode ? "dark" : ""}`}>
          <PageHelmet title={title} href={href} />
          <div className={"dark:bg-neutral-900 dark:text-white"}>
            {!is404 && <Navbar />}
            {props.children}
            <Notifications />
            {!is404 && <ThemeButton />}
            {!is404 && <Footer />}
          </div>
        </div>
      </DarkModeContext.Provider>
    </ServerStateContext.Provider>
  );
}
