import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from '../components/layout'


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const resolutions =post.featured_media.localFile.childImageSharp.resolutions

        return (
            <Layout>
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <Img resolutions ={resolutions} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                {post.acf !== null ?
                <p dangerouslySetInnerHTML={{__html:post.acf.social }}></p>
                : ''}
            </div>
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            acf{
                social
              }
              featured_media{
                localFile{
                    childImageSharp{
                        resolutions(width:500, height: 300){
                            src
                            width
                            height
                        }
                    }
                }
            }
        }
        
        site {
            siteMetadata {
                title
            
            }
        }
    }
`