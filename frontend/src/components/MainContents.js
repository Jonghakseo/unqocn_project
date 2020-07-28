import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import TopSection from './TopSection'
import TimeLine from './TimeLine'
import './MainContents.css'
class MainContents extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    windowSize: 1300, //임의의 초기값
    topHeight: 1300, //임의의 초기값
    backgroundColor: 'top',
    position: this.props.position,
  }

  componentDidMount() {
    // 스크롤 이벤트 적용
    window.addEventListener('scroll', this.onScroll)
    // const top = findDOMNode(this).getBoundingClientRect().top
    const bottom = findDOMNode(this).getBoundingClientRect().bottom
    // 현재 메인섹션 높이는 105vh, timeline은 120vh인 상태임
    let winSize = bottom / ((105 + 120) / 100) //한 화면에 보여지는 픽셀 높이 구함
    let topSectionHeight = winSize * 0.2 //비율로 나눠서 top 끝나는 높이 구함
    //대충 200 좀 넘었음

    this.setState({ windowSize: winSize, topHeight: topSectionHeight })
  }

  onScroll = (e) => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    const pos = ('scroll', e.srcElement.scrollingElement.scrollTop)
    // 스크롤 포지션값 가져옴
    // console.log(this.state)
    //체크
    let bgColor
    if (pos > this.state.topHeight * 2) {
      //다음 섹션으로 넘어가는 중이라면,
      bgColor = 'timeline'
    } else {
      bgColor = 'top'
      //아니라면
    }

    //변화값들 갱신
    this.setState({
      backgroundColor: bgColor,
      position: pos,
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
    return (
      <section id="main_contents" className={bgStyle}>
        <TopSection
          position={this.state.position}
          topHeight={this.state.topHeight}
        ></TopSection>
        <TimeLine
          position={this.state.position}
          topHeight={this.state.topHeight}
        ></TimeLine>
        <div></div>
      </section>
    )
  }
}

export default MainContents
