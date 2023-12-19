import { GatsbyImageProps } from "gatsby-plugin-image"

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
    references: {
      contentful_id: string
      id: string
      gatsbyImageData: GatsbyImageProps
    }
  }
}