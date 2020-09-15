import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FaBars, FaGithubSquare, FaFacebookSquare } from "react-icons/fa"

import Logo from "./logo"

const Footer = ({ siteTitle, fixed }) => {
  return (
    <section className="bg-white py-8 w-full bg-gray-200">
      <div className="px-12">
        <div className="flex justify-between flex-wrap w-full">
          <div className="w-full lg:w-2/5">
            <div className="text-2xl font-bold">
              <Logo />
            </div>
            <div className="flex text-xl">
              <a
                href="https://github.com/data4humanity"
                className="pr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.facebook.com/events/3525368720848083/"
                className="pr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 lg:w-1/5">
            <div className="font-semibold text-grey text-lg mb-1 mt-4">
              About
            </div>
            <div className="text-gray-600">
              <div>
                <Link to="/about" className="text-grey hover:text-grey-dark">
                  About us
                </Link>
              </div>
              <div>
                <Link to="/projects" className="text-grey hover:text-grey-dark">
                  Projects
                </Link>
              </div>
              <div>
                <Link to="/events" className="text-grey hover:text-grey-dark">
                  Events
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 lg:w-1/5">
            <div className="font-semibold text-grey text-lg mb-1 mt-4">
              Work with us
            </div>
            <div className="text-gray-600">
              <div>
                <Link to="/contact" className="text-grey hover:text-grey-dark">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 lg:w-1/5">
            <div className="font-semibold text-grey text-lg mb-1 mt-4">
              Contact
            </div>
            <div className="text-gray-600">
              <div>d4h@yale.edu</div>
              <div>Yale University</div>
              <div>New Haven, CT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
