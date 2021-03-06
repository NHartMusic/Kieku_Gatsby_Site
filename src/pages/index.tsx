import React from "react"
import { Link } from "gatsby"

import Layout from "../Layouts/Layout"
import styled from 'styled-components'
import Image from "../components/Gatsby-Image"
import { Circle } from '../UI/ScrollElements'
import { SEO } from "../components/SEO"
//UI
import { Title, ParagraphRegular } from '../UI/Typography'
import { ContentCentered } from '../UI/Containers'

const CircleContainer = styled.div`
    display: flex;
    margin: 0 auto;
`

const HomeTitle = styled(Title)`
  display: flex;
  margin: 0 auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentCentered>
      <HomeTitle>Welcome</HomeTitle>
      <CircleContainer>
        <Circle />
        <Circle />
        <Circle />
      </CircleContainer>
    </ContentCentered>




    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>


  </Layout >
)

export default IndexPage
