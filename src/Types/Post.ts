export default interface POST {
  id: string,
  contentful_id: string,
  date: string,
  title: string
  slug: string
  image: {
    file: {
      url: string
    }
  },
  content: {
    raw: string
  }
}