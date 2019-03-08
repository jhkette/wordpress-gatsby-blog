import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import FluidGrid from 'react-fluid-grid'
import Layout from '../components/layout'


const styleStrategies = [
  { mediaQuery: '(max-width: 719.9px)', style: { numberOfColumns: 1, gutterHeight: 5, gutterWidth: 0 } },
  { mediaQuery: '(min-width: 720px) and (max-width: 1023.9px)', style: { numberOfColumns: 2, gutterHeight: 15, gutterWidth: 15 } },
  { mediaQuery: '(min-width: 1024px)', style: { numberOfColumns: 2, gutterHeight: 30, gutterWidth: 30 } }
]
const transition = 'top 200ms ease-in-out, left 200ms ease-in-out'

class Home extends Component {
  render() {
    const data = this.props.data
    return (
    <Layout>
      <h1>Projects</h1>
      <FluidGrid className ="posts" styleStrategies={styleStrategies} transition={transition}>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug} className="homepost" >
            <Img className="bloglead" fluid={node.featured_media.localFile.childImageSharp.fluid} />
            <Link to={`/post/${node.slug}/`} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
           
          </div>
        ))}
        </FluidGrid>
        <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
              ))}
          </div>
        </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage  {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(
      
      filter: { acf: {social:{eq: ""}}} 
     
      ), 
  {
      edges  {
        node {
          title
          excerpt
          slug
          featured_media{
            localFile{
                childImageSharp{
                   fluid(maxWidth: 600, maxHeight: 600){
                     ...GatsbyImageSharpFluid
                   }
                }
                
            }
        }
         
        }
      }
    }
  }
`