export default interface EXPERIENCE {
  id: string,
  contentful_id: string,
  position: string,
  company: string,
  logo: {
    file: {
      url: string
    }
  },
  responsibilities: string[],
  createdAt: string
}