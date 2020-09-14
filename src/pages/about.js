import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
	<Layout>
		<SEO title="About" />
		<div className="pt-16 pb-4 px-12 relative overflow-hidden">
			<div className="text-5xl font-semibold bg-white max-w-full text-center md:text-left leading-tight">
				About us
			</div>
		</div>
		<div className="pt-4 pb-4 px-12 relative overflow-hidden">
			<div className="text-4xl font-semibold bg-white max-w-full text-center md:text-left leading-tight">
				What we do
			</div>
		</div>
		<div className="pt-4 pb-4 px-12 relative overflow-hidden">
			<div className="text-4xl font-semibold bg-white max-w-full text-center md:text-left leading-tight">
				Our members
			</div>
			<div className="text-3xl font-semibold bg-white max-w-full text-center md:text-left leading-tight">
				Leadership
			</div>
			<div className="text-3xl font-semibold bg-white max-w-full text-center md:text-left leading-tight">
				Project teams
			</div>
			Coming soon!
		</div>
	</Layout>
)

export default About
