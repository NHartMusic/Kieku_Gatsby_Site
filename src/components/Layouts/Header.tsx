import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Cyans, Greyscale } from '../../UI/Colors'
import { Header1 } from '../../UI/Typography'

const SiteHeader = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: ${ Cyans[3]};
  padding: 20px;
`

const SiteTitle = styled(Header1)`
  display: flex;
  margin: 0 auto;
  color: ${ Greyscale[2]};
  font-family: 'Montserrat', sans-serif;
`

const Header = ({ siteTitle }: { siteTitle: any }) => (
  <SiteHeader>
    <SiteTitle>

      {siteTitle}

    </SiteTitle>


  </SiteHeader >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Kieku Teknologia`,
}

export default Header
