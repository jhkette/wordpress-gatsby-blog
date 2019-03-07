import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <nav
    style={{
      background: '#f4f4f4',
      paddingTop: '10px',
      width: '15rem'
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: "column",
        
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/page-2">About</Link>
        </li>
        <li>
        <Link to="/posts">All posts</Link>
      </li>
      
    </ul>
  </nav>
)

export default Menu