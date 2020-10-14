import React from "react"
import { css } from "@emotion/core"
import Nav from "./Nav"
import { Link } from "gatsby"

function Header() {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link
          to="/"
          css={css`
            color: white;
            text-align: center;
            text-decoration: none;
            font-size: 4rem;
            font-family: "pt sans", sans-serif;
          `}
        >
          Gatsby Hotel
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header
