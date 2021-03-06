import React from "react"

import Layout from "../Layouts/Layout"
import { SEO } from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Sorry! This page doesn't exist</p>
  </Layout>
)

export default NotFoundPage
