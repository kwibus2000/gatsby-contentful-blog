import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>Hallo!</h1>
      <p>Welkom; dit is mijn `kwiq` berichten site</p>
      <div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
      <Link to="/blogposts/">Hier staan alle berichten</Link>
    </div>
  </Layout>
)

export default IndexPage
