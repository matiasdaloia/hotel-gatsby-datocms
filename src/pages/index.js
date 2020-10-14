import React from "react"
import ImagenHotel from "../components/ImagenHotel"
import Layout from "../components/Layout"
import ContenidoInicio from "../components/ContenidoInicio"
import Habitacion from "../components/Habitacion"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 1200px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        edges {
          node {
            slug
            id
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

  const habitaciones = data.allDatoCmsHabitacion.edges.map(edge => ({
    titulo: edge.node.titulo,
    contenido: edge.node.contenido,
    imagen: edge.node.imagen.fluid.srcSet,
    slug: edge.node.slug,
  }))

  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
      <h2
        css={css`
          font-size: 4rem;
          text-align: center;
          margin-top: 2rem;
        `}
      >
        Habitaciones
      </h2>
      <Container>
        {habitaciones.map(habitacion => (
          <Habitacion
            key={habitacion.id}
            titulo={habitacion.titulo}
            imagen={habitacion.imagen}
            contenido={habitacion.contenido}
            slug={habitacion.slug}
          />
        ))}
      </Container>
    </Layout>
  )
}

export default IndexPage
