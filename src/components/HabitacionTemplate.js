import React from "react"
import { graphql } from "gatsby"
import Layout from "./Layout"
import Image from "gatsby-image"
import { css } from "@emotion/core"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          titulo
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
          contenido
        }
      }
    }
  }
`

function HabitacionTemplate({
  data: {
    allDatoCmsHabitacion: { edges },
  },
}) {
  const { titulo, contenido, imagen } = edges[0].node

  return (
    <Layout>
      <div
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          width: 95%;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-top: 4rem;
          `}
        >
          {titulo}
        </h1>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </div>
    </Layout>
  )
}

export default HabitacionTemplate
