import React from "react"
import styled from 'styled-components'
import { Cyans, Greyscale } from '../UI/Colors'
import { ParagraphLarge, MenuLink } from '../UI/Typography'

const SiteHeader = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: ${ Cyans[3]};
  padding: 20px;
`

const FooterText = styled(ParagraphLarge)`
  display: flex;
  margin: 0 auto;
`

const Footer = () => (
  <footer style={{
    position: 'absolute',
    left: '0',
    bottom: '0',
    right: '0'
  }}>
    <SiteHeader>
      <FooterText>Site built by &nbsp;<MenuLink to='https://github.com/NHartMusic'> Nick Hart</MenuLink></FooterText>
    </SiteHeader >
  </footer>
)

export default Footer
