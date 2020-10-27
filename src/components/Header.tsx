import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { Cyans, Greyscale } from '../UI/Colors'
import { Header1 } from '../UI/Typography'

interface Props {
  siteTitle: string
}

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

const Header = ({ siteTitle }: Props) => (
  <SiteHeader>
    <SiteTitle>
      {siteTitle}
    </SiteTitle>
  </SiteHeader >
)

export default Header
