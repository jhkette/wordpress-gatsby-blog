import React from 'react'
import Link from 'gatsby-link'
import PropTypes from "prop-types"

const navHeader = () => (

    <div className="mobileheader">
        <button className="mobilenav"></button>
        <h1>
            <Link to="/" style={{
                color: `#1a1a1a`,
                textDecoration: `none`,
            }}>
            {this.props.siteTitle}
            </Link>
        </h1>
    </div>

)

export default navHeader