import React from "react"
import styled from 'styled-components'
import { Cyans, Greyscale } from '../UI/Colors'
import { Title, MenuLink } from '../UI/Typography'

interface Props {
  siteTitle: string
}

const SiteHeader = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: ${ Cyans[3]};

  width: 100%;
  height: 100%;
  padding: 20px;
`

const SiteTitle = styled(Title)`
  display: flex;
  margin: 0 auto;
  color: ${ Greyscale[2]};
  font-family: 'Montserrat', sans-serif;
`

const Header = ({ siteTitle }: Props) => (
  <SiteHeader>
    <SiteTitle>
      <MenuLink to='/'>
        {siteTitle}
      </MenuLink>
    </SiteTitle>
  </SiteHeader >
)

export default Header
