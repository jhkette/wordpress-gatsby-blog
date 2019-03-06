import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      
      marginBottom: `1.45rem`,
    }}
  >
   
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#1a1a1a`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
   
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
