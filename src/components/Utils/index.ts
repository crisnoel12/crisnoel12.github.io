import { WorkRounded } from "@material-ui/icons"

export const sortByDESC = (data) => (
  data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
)

export const sortByASC = (data) => (
  data.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
)

export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}