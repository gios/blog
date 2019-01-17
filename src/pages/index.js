import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { linksColor, dateColor } from '../utils/colors';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gios`, `application`, `react`, `blog`]} />
    <h4>We have <span style={{ color: linksColor }}>{data.allMarkdownRemark.totalCount}</span> posts for you to read.</h4>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3 style={{ color: linksColor }}>{node.frontmatter.title}</h3>
        </Link>
        <div style={{ color: dateColor }}>{node.frontmatter.date} - {node.timeToRead}min</div>
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
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
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
