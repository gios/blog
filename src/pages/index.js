import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gios`, `application`, `react`, `blog`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{' '}
            <span style={{ color: `#bbb` }}>— {node.frontmatter.date}</span>
          </h3>
        </Link>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
