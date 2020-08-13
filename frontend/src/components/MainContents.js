import React, { Component } from 'react'
// import { findDOMNode } from 'react-dom'
import Footer from './Footer'
import TopSection from './TopSection'
import TimeLine from './TimeLine'
import './MainContents.css'
class MainContents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowSize: window.innerHeight, // 초기값
      backgroundColor: 'top',
      position: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  updateWindowDimensions() {
    // console.log('resize :', window.innerHeight)
    // 창 크기 조절시에 업데이트됨
    this.setState({
      windowSize: window.innerHeight,
    })
  }

  // componentDidMount() {
  // 스크롤 이벤트 적용
  // const top = findDOMNode(this).getBoundingClientRect().top
  // const bottom = findDOMNode(this).getBoundingClientRect().bottom
  // 현재 메인섹션 높이는 105vh, timeline은 120vh인 상태임
  // let winSize = bottom / ((105 + 120) / 100) //한 화면에 보여지는 픽셀 높이 구함
  // let topSectionHeight = winSize * 0.2 //비율로 나눠서 top 끝나는 높이 구함
  //대충 200 좀 넘었음
  // console.log('winsize : ', winSize)
  // console.log('bottom : ', bottom)
  // this.setState({ windowSize: winSize, topHeight: topSectionHeight })
  // }

  onScroll = (e) => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    const pos = ('scroll', e.srcElement.scrollingElement.scrollTop)
    // 스크롤 포지션값 가져옴
    // console.log(this.state)
    //체크
    let bgColor
    if (pos > this.state.windowSize / 2) {
      //다음 섹션으로 넘어가는 중이라면,
      bgColor = 'timeline'
    } else {
      bgColor = 'top'
      //아니라면
    }
    // console.log('pos : ', this.state.position, 'winsize : ', this.state.windowSize)

    //변화값들 갱신
    this.setState({
      backgroundColor: bgColor,
      position: Math.ceil(pos),
    })
  }

  render() {
    // console.log('windowSize : ', this.state.windowSize)
    let bgStyle
    if (this.state.backgroundColor === 'top') {
      bgStyle = ''
    } else if (this.state.backgroundColor === 'timeline') {
      bgStyle = 'timeline_bg'
    }
    //포지션값에 따른 backgrond 컬러 변경
    return (
      <section id="main_contents" className={bgStyle}>
        <TopSection position={this.state.position} windowSize={this.state.windowSize} />
        {/* 프로필이 들어가는 탑 섹션 */}
        <TimeLine position={this.state.position} windowSize={this.state.windowSize} />
        {/* 작품들을 타임라인 형식으로 보여주는 컴포넌트 */}
        <Footer />
        {/* copyright footer */}
      </section>
    )
  }
}

export default MainContents
