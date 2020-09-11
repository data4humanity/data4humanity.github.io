import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-2xl">Data science for social good</div>
    <div>Join our mailing list</div>
    <div>Get in touch</div>
  </Layout>
)

export default IndexPage
