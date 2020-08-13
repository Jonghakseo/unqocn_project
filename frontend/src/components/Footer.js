import React, { Component } from 'react'
import styled from 'styled-components'
import './NavTop.css'

class Footer extends Component {
  render() {
    return <FooterWrapper>Copyright ⓒ 2020 JongHak Seo All Rights Reserved.</FooterWrapper>
  }
}

const FooterWrapper = styled.footer`
  display: flex;
  font-weight: 400;
  font-size: 0.8rem;
  font-family: 'Noto Sans KR', 'Spoqa Han Sans', 'Sans-serif';
  justify-content: center;
  margin-top: 7vh;
  height: 5vh;
`

export default Footer
