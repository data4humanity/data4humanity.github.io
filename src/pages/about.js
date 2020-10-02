import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MihirKhunte from "../images/members/mihir_khunte.png"
import JamesHan from "../images/members/james_han.png"
import BrianRhee from "../images/members/brian_rhee.png"
import KevinHu from "../images/members/kevin_hu.png"

const board = [
	{
		name: "Mihir Khunte",
		description: "President | Yale '21",
		image: MihirKhunte,
	},
	{
		name: "James Han",
		description: "Vice President | Yale '23",
		image: JamesHan,
	},
	{ name: "Brian Rhee", description: "Secretary | Yale '22", image: BrianRhee },
	{ name: "Kevin Hu", description: "Treasurer | Yale '22", image: KevinHu },
]

const About = () => (
	<Layout>
		<SEO title="About" />
		<div className="pt-16 pb-4 px-12 relative overflow-hidden">
			<div className="text-5xl font-semibold bg-white max-w-full text-center md:text-left leading-tight">
				About us
			</div>
			<hr />
		</div>
		<div className="pt-4 pb-4 px-12 relative overflow-hidden">
			<div className="text-4xl font-semibold bg-white max-w-full text-center md:text-left leading-tight">
				What we do
			</div>
			<div className="text-center md:text-left text-xl text-gray-700">
				We're a new club at Yale working to connect undergraduates with
				opportunities to work on applied data science projects with real-world
				impact. Through project-based teams, we help our members develop
				essential data science skills while creating a community for people
				interested to meet each other.
			</div>
		</div>
		<div className="pt-4 pb-12 px-12 relative overflow-hidden">
			<div className="text-4xl font-semibold bg-white max-w-full text-center md:text-left leading-tight pb-8">
				Our members
			</div>
			<div className="flex flex-wrap w-full">
				{board.map(member => (
					<div className="pb-8 w-full text-center md:text-left sm:w-1/2 md:w-1/4 md:pr-12">
						<img
							src={member.image}
							className="w-1/2 sm:w-3/4 md:w-full mx-auto rounded-lg"
						/>
						<div className="text-xl pt-2 text-primary font-semibold">
							{member.name}
						</div>
						<div>{member.description}</div>
					</div>
				))}
			</div>
		</div>
	</Layout>
)

export default About
