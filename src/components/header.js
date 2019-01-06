import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, Link, graphql } from 'gatsby'

const MenuLink = props => {
  return (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <a href={props.to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  )
}

MenuLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default class header extends Component {
  renderSiteSocials(data) {
    const components = []
    const socials = data.site.siteMetadata.socials

    for (const [key, value] of Object.entries(socials)) {
      components.push(
        <MenuLink key={key} to={value}>
          {key.toLowerCase()}
        </MenuLink>
      )
    }
    return components
  }

  render() {
    return (
      <header
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
        }}
      >
        <Link to="/">
          <h3 style={{ textTransform: 'uppercase' }}>Gios Blog</h3>
        </Link>
        <ul style={{ listStyle: `none` }}>
          <StaticQuery
            query={siteSocials}
            render={this.renderSiteSocials.bind(this)}
          />
        </ul>
      </header>
    )
  }
}

const siteSocials = graphql`
  query {
    site {
      siteMetadata {
        socials {
          github
          linkedin
          twitter
        }
      }
    }
  }
`
