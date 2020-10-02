import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FaBars } from "react-icons/fa"
import Logo from "./logo"

const Header = ({ siteTitle, fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <div>
      <div className="bg-gray-200 md:bg-white flex flex-wrap items-center justify-between px-12 max-w-screen-lg mx-auto py-3 navbar-expand-md">
        <div className="w-full mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <Link
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
              to="/"
            >
              <Logo />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-2 rounded block md:hidden outline-none focus:outline-none hover:bg-white hover:shadow transition duration-300 ease-out"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "md:max-h-screen md:flex flex-grow items-center overflow-hidden transition-all duration-500 ease-in-out rounded-lg bg-white" +
              (navbarOpen ? " max-h-screen shadow-lg" : " max-h-0")
            }
          >
            <div className="flex flex-col md:flex-row list-none md:ml-auto text-xl transition duration-300 ease-out">
              <Link
                className="pl-4 md:pl-8 pt-4 pb-2 md:py-0 hover:text-primary"
                activeClassName="text-primary"
                to="/about"
              >
                About
              </Link>
              <Link
                className="pl-4 md:pl-8 py-2 md:py-0 hover:text-primary"
                activeClassName="text-primary"
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className="pl-4 md:pl-8 py-2 md:py-0 hover:text-primary"
                activeClassName="text-primary"
                to="/events"
              >
                Events
              </Link>
              <Link
                className="pl-4 md:pl-8 pt-2 pb-4 md:py-0 hover:text-primary"
                activeClassName="text-primary"
                to="/contact"
              >
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
