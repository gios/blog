import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header';

export default class SEO extends Component {
  static defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
  }

  static propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
  }

  renderDetails(data) {
    const { description, lang, title, keywords, meta } = this.props
    const metaDescription = description || data.site.siteMetadata.description

    return (
      <div>
        <Header></Header>
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : []
            )
            .concat(meta)}
        />
      </div>
    )
  }

  render() {
    return (
      <StaticQuery
        query={detailsQuery}
        render={this.renderDetails.bind(this)}
      />
    )
  }
}

const detailsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
