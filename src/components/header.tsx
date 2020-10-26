import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Cyans, Greyscale } from '../UI/Colors'

const SiteHeader = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: ${ Cyans[3]};
  padding: 20px;
`

const SiteTitle: JSX.Element = styled.h1`
  display: flex;
  margin: 0 auto;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <SiteTitle>
      <Link>
        {siteTitle}
      </Link>
    </SiteTitle>


  </SiteHeader >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Kieku`,
}

export default Header
