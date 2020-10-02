import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ConnectImage from "../images/connect.svg"
import ExpertImage from "../images/expert.svg"
import CollaborateImage from "../images/collaborate.svg"

const IndexPage = () => {
  let xBins = new Array(parseInt((window.innerWidth * 2) / 12)).fill(0)
  let xPositions = new Array(2000)
  let yPositions = new Array(2000)

  for (var i = 0; i < 2000; i++) {
    let xBin = Math.round(
      ((1 - Math.pow(Math.random(), 3)) * window.innerHeight * 2) / 12
    )

    yPositions[i] = xBins[xBin]
    xPositions[i] = xBin

    xBins[xBin]++
  }

  return (
    <Layout restrictWidth={false}>
      <SEO title="Home" />
      <div className="pt-32 pb-48 px-12 relative overflow-hidden max-w-screen-lg mx-auto">
        <div className="text-5xl font-semibold bg-white max-w-full text-center md:text-left leading-tight">
          <div className="inline text-primary">Data science</div>{" "}
          <div className="inline text-gray-600">for</div>{" "}
          <div className="inline text-secondary">social good</div>
        </div>
        <div className="text-lg bg-white w-full md:flex md:flex-wrap pt-8">
          <input
            className="border-2 border-black py-1 px-2 w-full md:w-64"
            style={{ marginRight: "-2px" }}
            placeholder="me@yale.edu"
          />
          <div className="border-2 border-black bg-black text-white px-2 py-1 text-center">
            Join our mailing list
          </div>
        </div>
        {[...Array(2000).keys()].map((x, index) => {
          let seed = Math.random()

          return (
            <div
              className="absolute bottom-0 select-none text-gray-400 font-bold"
              style={{
                left: xPositions[index] * 12,
                bottom: yPositions[index] * 12,
                zIndex: -1,
                background: "white",
                fontSize: "10px",
              }}
            >
              {parseInt(seed * 100).toString(12)}
            </div>
          )
        })}
      </div>
      <div className="py-24 bg-primary text-white">
        <div className="px-12 max-w-screen-lg mx-auto">
          <div className="text-5xl font-bold pb-8 text-center md:text-left">
            Our mission
          </div>
          <div className="w-full flex items-center">
            <div className="w-full py-16 md:w-1/2">
              <div className="pr-12">
                <span className="font-bold text-2xl bg-white text-purple-600 px-3 px-4 leading-3">
                  1
                </span>
                <div className="text-2xl bg-white p-4 text-black shadow-lg">
                  <span className="font-bold text-purple-600">Connect</span>{" "}
                  students with community organizations to build partnerships
                  for applying data science.
                </div>
              </div>
            </div>
            <div className="w-0 md:w-1/2">
              <img src={ConnectImage} className="px-24" />
            </div>
          </div>
          <div className="w-full py-16 flex items-center">
            <div className="w-0 md:w-1/2">
              <img src={ExpertImage} className="px-24" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="pr-12">
                <span className="font-bold text-2xl bg-white text-primary px-3 px-4 leading-3">
                  2
                </span>
                <div className="text-2xl bg-white p-4 text-black shadow-lg">
                  <span className="font-bold text-blue-600">Organize</span>{" "}
                  events for experts to share their research with the community.
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="w-full py-16 flex items-center">
            <div className="w-full md:w-1/2">
              <div className="pr-12">
                <span className="font-bold text-2xl bg-white text-teal-600 px-4 leading-3">
                  3
                </span>
                <div className="text-2xl bg-white p-4 text-black shadow-lg">
                  <span className="font-bold text-teal-600">Offer</span> a space
                  for those passionate about{" "}
                  <span className="bg-white text-purple-600 font-bold">1</span>{" "}
                  and{" "}
                  <span className="bg-white text-blue-600 font-bold">2</span> to
                  meet and learn from each other.
                </div>
              </div>
            </div>
            <div className="w-0 md:w-1/2">
              <img src={CollaborateImage} className="px-24" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 px-12 max-w-screen-lg mx-auto">
        <div className="text-5xl font-bold pb-8 text-center md:text-left">
          Projects in progress
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/3">
            <div>
              <div className="font-bold text-2xl text-center md:text-left">
                Prison education
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div>
              <div className="font-bold text-2xl text-center md:text-left">
                Hunger and homelessness
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div>
              <div className="font-bold text-2xl text-center md:text-left">
                Recommending courses
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
