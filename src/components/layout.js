import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0 1rem 1.5rem`,
    }}
  >
    {children}
    <footer>
      © Gios { (new Date()).getFullYear() }
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
