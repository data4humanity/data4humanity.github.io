import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import UnderConstruction from "../images/under_construction.svg"

const Projects = () => (
	<Layout>
		<SEO title="Projects" />
		<div className="pt-24 pb-24 px-12 relative overflow-hidden">
			<img src={UnderConstruction} className="w-1/3 mx-auto" />
			<div className="pt-8 text-center text-xl">Under construction!</div>
			<div className="py-2 text-center">Please check back later.</div>
		</div>
	</Layout>
)

export default Projects
