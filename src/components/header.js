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
    <div className="mobileheader">
      <button className="mobilenav"></button>
      <h1>
        <Link
          to="/"
          style={{
            color: `#1a1a1a`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          {console.log('this is the' + siteTitle)}
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
