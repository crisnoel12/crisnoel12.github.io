const readingTime = require('reading-time');
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export const sortByDESC = (data) => (
  data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
)

export const sortByASC = (data) => (
  data.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
)

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const estimatedReadTime = (richText: string) => {
  return readingTime(documentToPlainTextString(JSON.parse(richText))).text;
}

export const getLocalStorageItem = (item: string) => {
  return window.localStorage.getItem(item);
}

export const setLocalStorageItem = (key: string, value: any) => {
  return window.localStorage.setItem(key, value);
}