import React from "react"
import { css } from "@emotion/core"
import Nav from "./Nav"

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
        <h1
          css={css`
            color: white;
            text-align: center;
          `}
        >
          Gatsby Hotel
        </h1>
        <Nav />
      </div>
    </header>
  )
}

export default Header
