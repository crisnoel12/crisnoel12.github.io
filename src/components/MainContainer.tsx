import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PageHelmet from "../Utils/PageHelmet";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.min.css";
import { ServerState } from "../Types";
import ServerStateContext from "../context/ServerStateContext";
import { darkModeInitState, notify } from "../Utils";
import DarkModeContext from "../context/DarkModeContext";
import Notifications from "./Notifications";

interface Props {
  title: string;
  href: string;
  children: any;
  is404?: boolean;
}

export default function MainContainer(props: Props) {
  const [darkMode, setDarkMode] = useState<boolean>();
  const [serverState, setServerState] = useState<ServerState>({
    submitting: false,
    response: null,
  });

  useEffect(() => {
    setDarkMode(darkModeInitState);
  }, []);

  useEffect(() => {
    if (serverState.response) {
      notify(serverState, setServerState);
    }
  }, [serverState.response]);

  const { title, href, is404 = false } = props;

  return (
    <ServerStateContext.Provider value={{ serverState, setServerState }}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <PageHelmet title={title} href={href} />
        <div className={`grid h-auto${darkMode ? " dark" : ""}`}>
          <div className={"dark:bg-neutral-900 dark:text-white"}>
            {!is404 && <Navbar />}
            {props.children}
            <Notifications />
            {!is404 && <Footer />}
          </div>
        </div>
      </DarkModeContext.Provider>
    </ServerStateContext.Provider>
  );
}
