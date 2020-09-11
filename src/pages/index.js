import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="py-32 px-8">
      <div className="text-5xl font-semibold">Data science for social good</div>
      <div className="text-2xl">Join our mailing list</div>
      <div className="text-2xl">Get in touch</div>
    </div>
    <div className="py-8 px-8 bg-primary text-white">
      <div className="text-4xl">Our mission</div>
      <div className="w-full flex">
        <div className="w-full md:w-1/3">
          <div>1.</div>
        </div>
        <div className="w-full md:w-1/3">
          <div>2.</div>
        </div>
        <div className="w-full md:w-1/3">
          <div>3.</div>
        </div>
      </div>
    </div>
    <div className="py-8 px-8">
      <div className="text-4xl">Projects with purpose</div>
      <div className="w-full flex">
        <div className="w-full md:w-1/3">
          <div>1.</div>
        </div>
        <div className="w-full md:w-1/3">
          <div>2.</div>
        </div>
        <div className="w-full md:w-1/3">
          <div>3.</div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
