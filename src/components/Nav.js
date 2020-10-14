import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`

const NavLink = styled(Link)`
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1;
  font-family: "pt sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  /* Class to add border bottom when on that page */
  &.pagina-actual {
    border-bottom: 2px solid #fff;
  }
`

function Nav() {
  return (
    <Navbar>
      <NavLink activeClassName="pagina-actual" to="/">
        Inicio
      </NavLink>
      <NavLink activeClassName="pagina-actual" to="/nosotros">
        Nosotros
      </NavLink>
    </Navbar>
  )
}

export default Nav
