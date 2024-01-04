import { readingTime } from 'reading-time-estimator'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import React from 'react';
import { ServerState } from '../Types';
import { toast } from 'react-toastify';

const isBrowser = typeof window !== "undefined";

interface SortObj {
  [key: string]: any
  createdAt: string | number | Date
}

// MISC
export const sortByDESC = (data: any) => {
  return data.sort((a: SortObj, b: SortObj) => {
    return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
  });
}

export const sortByASC = (data: any) => {
  return data.sort((a: SortObj, b: SortObj) => {
    new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
  });
}

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const estimatedReadTime = (richText: string) => {
  return readingTime(documentToPlainTextString(JSON.parse(richText)));
}

export const getLocalStorageItem = (item: string) => {
  if (isBrowser) {
    return window.localStorage.getItem(item);
  }
}

export const setLocalStorageItem = (key: string, value: any) => {
  if (isBrowser) {
    return window.localStorage.setItem(key, value);
  }
}

// DARK MODE
export const darkModeInitState = () => {
  const darkModeSystem = window.matchMedia("(prefers-color-scheme: dark)");

  return JSON.parse(window.localStorage.darkMode || !window.localStorage.hasOwnProperty("darkMode") &&
  darkModeSystem.matches);
}

export const toggleDarkMode = (setDarkMode: React.Dispatch<React.SetStateAction<boolean>>, darkMode: boolean) => {
  setDarkMode(!darkMode);
  setLocalStorageItem("darkMode", !darkMode);
};

// SERVER & NOTIFICATIONS
export const notify = (serverState: ServerState, setServerState: React.Dispatch<React.SetStateAction<ServerState>>) => {
  const resetServerState = () => setServerState({ submitting: false, response: null });

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

export const handleServerResponse = (setServerState: React.Dispatch<React.SetStateAction<ServerState>>,status: any, msg: any) => {
  setServerState({
    submitting: false,
    response: { status, msg },
  });
};