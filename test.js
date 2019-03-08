import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./navigation/menu"
import navHeader from "./navigation/navheader" 

const Header = ({ siteTitle }) => (
  <header
    style={{
      
      marginBottom: `1.45rem`,
    }}
  >
     <navHeader/>  
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
