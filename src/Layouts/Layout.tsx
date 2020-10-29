import React, { ReactNode } from 'react'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './Footer'

import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

interface Props {
  children: ReactNode
}

const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout: React.FC<Props> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}>
          <html lang="en" />
        </Helmet>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
        <Footer />
      </>
    )}
  />
)

export default Layout