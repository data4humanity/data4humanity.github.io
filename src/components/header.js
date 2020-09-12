import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FaBars } from "react-icons/fa"
import Logo from "./logo"

const Header = ({ siteTitle, fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <div>
      <div className="bg-white flex flex-wrap items-center justify-between px-12 py-3 navbar-expand-md mb-3">
        <div className="w-full mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <Link
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
              to="/"
            >
              <Logo />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "md:max-h-screen md:flex flex-grow items-center overflow-hidden transition-all duration-500 ease-in-out" +
              (navbarOpen ? " max-h-screen" : " max-h-0")
            }
          >
            <div className="flex flex-col md:flex-row list-none md:ml-auto text-lg">
              <Link className="md:pl-8" to="/about">
                About
              </Link>
              <Link className="md:pl-8" to="/projects">
                Projects
              </Link>
              <Link className="md:pl-8" to="/events">
                Events
              </Link>
              <Link className="md:pl-8" to="/join">
                Join
              </Link>
              <Link className="md:pl-8" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
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
