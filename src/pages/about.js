import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MihirKhunte from "../images/members/mihir_khunte.png"
import JamesHan from "../images/members/james_han.png"
import BrianRhee from "../images/members/brian_rhee.png"
import KevinHu from "../images/members/kevin_hu.png"

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
			<img src={MihirKhunte} className="w-24" />
			<img src={JamesHan} className="w-24" />
			<img src={BrianRhee} className="w-24" />
			<img src={KevinHu} className="w-24" />
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
