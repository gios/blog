import React from 'react'
import PropTypes from 'prop-types'

import { rhythm } from '../utils/typography'

const Layout = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `${rhythm(0.5)}`,
      paddingTop: `${rhythm(1)}`,
    }}
  >
    {children}
    <footer style={{
      textAlign: `center`
    }}>Gios {new Date().getFullYear()}</footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
