import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  border: 1px solid #e1e1e1;
  justify-content: space-between;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  overflow: hidden;
`

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem 0;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: white;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-family: "pt sans", sans-serif;
`

function Habitacion({ titulo, imagen, contenido, slug }) {
  return (
    <Card>
      <Image src={imagen} />
      <div
        css={css`
          padding: 1rem;
        `}
      >
        <h2>{titulo}</h2>
        <p>{contenido}</p>
      </div>

      <Button to={slug}>Ver Habitación</Button>
    </Card>
  )
}

export default Habitacion
