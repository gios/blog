import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { linksColor, dateColor } from '../utils/colors';

const Post = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.fields.slug.replace(/\//g, "")} keywords={[`gios`, `application`, `react`, `blog`]} />
      <div>
        <h1 style={{ color: linksColor }}>{post.frontmatter.title}</h1>
        <div style={{ color: dateColor }}>{post.frontmatter.date} - {post.timeToRead}min</div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
      fields {
        slug
      }
    }
  }
`

export default Post
