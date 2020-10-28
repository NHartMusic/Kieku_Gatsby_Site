import React from "react"
import { Link } from "gatsby"

import Layout from "../Layouts/Layout"
import styled from 'styled-components'
import Image from "../components/Gatsby-Image"
import { Circle } from '../UI/ScrollElements'
import { SEO } from "../components/SEO"

const Test = styled.div`
    display: flex;
    margin: 0 auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>
    <Test>
      <Circle />
      <Circle />
      <Circle />
    </Test>

    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>


  </Layout >
)

export default IndexPage
