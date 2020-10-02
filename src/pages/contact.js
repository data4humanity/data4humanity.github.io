import React, { useEffect, useState, useRef } from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Row, Form, Button } from "react-bootstrap"
import Select from "react-select"

import UnderConstruction from "../images/under_construction.svg"

import Creatable from "react-select/creatable"
import makeAnimated from "react-select/animated"

const animatedComponents = makeAnimated()

const selectStyles = {
	multiValue: styles => {
		return {
			...styles,
			borderRadius: "0px",
		}
	},
	multiValueRemove: styles => {
		return {
			...styles,
			borderRadius: "0px",
		}
	},
	control: base => ({
		...base,
		borderRadius: "0px",
		cursor: "pointer",
		border: "solid 0px",
		borderBottom: "solid 1px black",
	}),
	menuPortal: base => ({ ...base, zIndex: 9999, borderRadius: "8px" }),
	menu: base => ({
		...base,
		paddingTop: 0,
		marginTop: 0,
		borderRadius: "0px",
		boxShadow:
			"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
	}),
	menuList: base => ({
		...base,
		paddingTop: 0,
		paddingBottom: 0,
		borderRadius: "0px",
	}),
	option: base => ({
		...base,
		cursor: "pointer",
	}),
}

// Formcake submission endpoint
const submission_endpoint =
	"https://api.formcake.com/api/form/3c4a95aa-3659-460f-9682-84523b84d218/submission"

const Join = () => {
	// Has form been validated?
	const [validated, setValidated] = useState(false)
	const form = useRef(null)

	const [submitted, setSubmitted] = useState(false)

	const formcakePost = () => {
		const data = new FormData(form.current)
		data.forEach((value, key) => {
			data[key] = value
		})
		return fetch(submission_endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
	}

	// Handle form submission
	const handleSubmit = event => {
		event.preventDefault()
		const form = event.currentTarget
		// Don't submit if form is invalid
		if (form.checkValidity() === false) {
			event.stopPropagation()
		}
		// Form has been validated
		setValidated(true)
		formcakePost()
			.then(response => response.json())
			.then(data => {
				if (data) {
					setSubmitted(true)
				}
			})
	}

	return (
		<Layout restrictWidth={false}>
			<SEO title="Join" />
			<div className="bg-gray-100 py-24">
				<div className="w-1/3 mx-auto shadow-lg p-8 bg-white rounded-lg">
					<div className="text-center text-2xl mb-8 font-semibold">
						Contact us
					</div>
					<Form
						validated={validated}
						onSubmit={handleSubmit}
						method="POST"
						action={submission_endpoint}
						ref={form}
					>
						{/* Email */}
						<Form.Group>
							<Form.Control
								required
								name="email"
								type="email"
								placeholder="Email Address"
								className="w-full px-2 pt-1 pb-1 border-b border-black mb-8"
							/>
						</Form.Group>
						{/* Role Select */}
						<Form.Group>
							<Creatable
								isMulti
								name="reason[]"
								components={animatedComponents}
								styles={selectStyles}
								options={[
									{
										value: "Student",
										label: "I'm a student looking to join the team",
									},
									{
										value: "Partner",
										label: "I'm an organization interested in a partnership",
									},
									{
										value: "Speaker",
										label: "I'm interested in giving a talk",
									},
								]}
								placeholder={"Who are you?"}
							/>
						</Form.Group>
						{/* Submit Button */}
						<Row className="mt-8">
							<Button
								variant="primary"
								type="submit"
								className={`mx-auto w-full py-2 rounded text-white ${
									submitted ? "bg-green-500" : "bg-black"
								}`}
							>
								{submitted ? "We'll be in touch!" : "Submit"}
							</Button>
						</Row>
					</Form>
				</div>
			</div>
		</Layout>
	)
}

export default Join
