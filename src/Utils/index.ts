import { readingTime } from 'reading-time-estimator'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export const sortByDESC = (data) => (
  data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
)

export const sortByASC = (data) => (
  data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
)

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const estimatedReadTime = (richText: string) => {
  return readingTime(documentToPlainTextString(JSON.parse(richText)));
}

export const getLocalStorageItem = (item: string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(item);
  }
}

export const setLocalStorageItem = (key: string, value: any) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, value);
  }
}