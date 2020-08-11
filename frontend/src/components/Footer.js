import React, { Component } from 'react'
// import profile_img from '../res/pic/profile_front_3.jpg'
import styled from 'styled-components'
// import github_icon from '../res/icon/github.svg'
// import tistory_icon from '../res/icon/tistory.svg'
// import contact_icon from '../res/icon/envelope.svg'
import './NavTop.css'

class Footer extends Component {
  //함수형 컴포넌트는 render 될 때의 값들을 유지한다.

  constructor(props) {
    super(props)

    // console.log(this.state.toggle);
  }

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
