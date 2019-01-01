import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Link } from "gatsby"

const MenuLink = props => {
  return (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

MenuLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default class header extends Component {

  render() {
    return (
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/">
          <h3>Gios Blog Animated Img</h3>
        </Link>
        <ul style={{ listStyle: `none` }}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/about/">About</MenuLink>
          <MenuLink to="/contact/">Contact</MenuLink>
        </ul>
      </header>
    )
  }
}
