export default interface Project {
  id: string,
  contentful_id: string,
  title: string,
  description: {
    description: string
  },
  technologies: string[],
  personalProject: boolean,
  url: string
  createdAt: string,
  image: {
    file: {
      url: string
    }
  }
}