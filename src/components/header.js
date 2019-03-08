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
  <div className="mobileheader">
  <nav className ="mobilenav"></nav>
      <h1>
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
  </div>   
   
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
