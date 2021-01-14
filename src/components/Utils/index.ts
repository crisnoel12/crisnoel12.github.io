export const sortByDESC = (data) => (
  data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
)

export const sortByASC = (data) => (
  data.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
)