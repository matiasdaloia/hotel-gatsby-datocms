import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  padding: 1.5rem;

  @media (min-width: 768px) {
    display: grid;
    column-gap: 100px;
    grid-template-columns: repeat(2, 1fr);
  }
  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

function ContenidoInicio() {
  //GraphQL query:
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
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

  //destructuring the query results:
  const {
    titulo,
    imagen,
    contenido,
  } = informacion.allDatoCmsPagina.edges[0].node

  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextoInicio>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </TextoInicio>
    </>
  )
}

export default ContenidoInicio
