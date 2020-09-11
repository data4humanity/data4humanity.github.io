import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FaBars } from "react-icons/fa"

const Header = ({ siteTitle, fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
              to="/"
            >
              Data4Humanity
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:max-h-screen lg:flex flex-grow items-center overflow-hidden transition-all duration-500 ease-in-out" +
              (navbarOpen ? " max-h-screen" : " max-h-0")
            }
          >
            <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link className="lg:pl-5" to="/about">
                About
              </Link>
              <Link className="lg:pl-5" to="/projects">
                Projects
              </Link>
              <Link className="lg:pl-5" to="/join">
                Join
              </Link>
              <Link className="lg:pl-5" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
