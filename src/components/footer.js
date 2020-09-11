import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FaBars } from "react-icons/fa"

const Footer = ({ siteTitle, fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <section className="bg-white py-8 w-full">
      <div className="px-8">
        <div className="flex justify-between flex-wrap w-full">
          <div className="w-full lg:w-2/5">
            <div className="text-2xl font-bold">Data4Humanity</div>
          </div>
          <div className="w-full sm:w-1/3 lg:w-1/5">
            <div className="font-semibold text-grey text-lg mb-3">About</div>
            <div>
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
          <div className="w-full sm:w-1/3 lg:w-1/5">
            <div className="font-semibold text-grey text-lg mb-3">
              Work with us
            </div>
            <div>
              <div>
                <Link to="/students" className="text-grey hover:text-grey-dark">
                  For students
                </Link>
              </div>
              <div>
                <Link
                  href="/partners"
                  className="text-grey hover:text-grey-dark"
                >
                  For partners
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 lg:w-1/5">
            <div className="font-semibold text-grey text-lg mb-3">Contact</div>
            <div>
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
