import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Logo = ({ siteTitle, fixed }) => {
  return (
    <div>
      <span className="text-primary">Data</span>
      <span className="text-secondary">4</span>
      <span className="text-primary">Humanity</span>
    </div>
  )
}

Logo.propTypes = {
  siteTitle: PropTypes.string,
}

Logo.defaultProps = {
  siteTitle: ``,
}

export default Logo
