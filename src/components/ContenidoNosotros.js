import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Contenido = styled.main`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

function ContenidoNosotros() {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        edges {
          node {
            titulo
            contenido
            imagen {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    }
  `)

  const { titulo, imagen, contenido } = data.allDatoCmsPagina.edges[0].node

  return (
    <>
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        {titulo}
      </h2>
      <Contenido>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </Contenido>
    </>
  )
}

export default ContenidoNosotros
