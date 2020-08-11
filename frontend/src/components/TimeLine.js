import React, { Component } from 'react'
import './TimeLine.css'
// import Java from './TimeLine/Java'
// import Android from './TimeLine/Android'
// import Php from './TimeLine/Php'
// import Competition from './TimeLine/Competition'
import Item from './TimeLine/Item'
//여기까지 작품별 컴포넌트
import line from '../res/icon/horizon-line.svg'
import java_icon from '../res/icon/java.svg'
import android_icon from '../res/icon/android.svg'
import php_icon from '../res/icon/php.svg'
import aws from '../res/icon/aws.svg'
import css from '../res/icon/css3-alt.svg'
// import git from '../res/icon/git-alt.svg'
import python from '../res/icon/python.svg'
import react_icon from '../res/icon/react.svg'
import ubuntu from '../res/icon/ubuntu.svg'
// import django from '../res/icon/django.svg'
import ue4 from '../res/icon/Unreal_Engine_Logo.svg'
// import mysql from '../res/icon/mysql-2.svg'
// import BigProfile from '../res/pic/profile_big_resize.png'

class TimeLine extends Component {
  //함수형 컴포넌트는 render 될 때의 값들을 유지한다.

  constructor(props) {
    super(props)
    // console.log(props)

    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = (newDate.getFullYear() + '').substring(2)
    let today = `\`${year}. ${month}. ${date}.`

    this.state = {
      active: '', //활성화된 포트폴리오 아이템 아이디
      position: this.props.position, // 스크롤 위치
      windowSize: this.props.windowSize, // 화면 크기(높이)
      timeline_top: 1300, //타임라인 top 높이(아래에서 갱신됨)
      toggle_timeline: false, //아직 타임라인 보일 때 아님
      date: today, //오늘 날짜 자동 갱신
      offsetList: {}, //각 아이템들 offset 저장할 곳
      scrolling: false,
    }
    // console.log(props)
    this.timer = null
  }

  timeLineHandleRef = React.createRef()
  javaTopRef = React.createRef()
  androidTopRef = React.createRef()
  phpTopRef = React.createRef()
  compTopRef = React.createRef()
  ue4TopRef = React.createRef()
  toyTopRef = React.createRef()
  portfolioTopRef = React.createRef()

  // componentDidMount() {
  //   //didmount때 한 값이 맞지 않아서 클릭시마다 갱신시킴
  // }
  componentWillReceiveProps(nextProps) {
    if (Math.ceil(this.props.position / 3) !== Math.ceil(nextProps.position / 3)) {
      let endTop = this.props.windowSize / 1.5
      // console.log('끝나는 지점', endTop)
      // console.log(nextProps.position)
      this.setState({ position: nextProps.position })
      this.checkPosition(nextProps.position)
      if (nextProps.position > endTop) {
        this.setState({
          toggle_timeline: true,
        })
      }
      let offsets = {
        java: this.javaTopRef.current.offsetTop,
        android: this.androidTopRef.current.offsetTop,
        php: this.phpTopRef.current.offsetTop,
        comp: this.compTopRef.current.offsetTop,
        toy: this.toyTopRef.current.offsetTop,
        ue4: this.ue4TopRef.current.offsetTop,

        // portfolio: this.portfolioTopRef.current.offsetTop,
        portfolio: 0,
      }

      this.setState({
        timeline_top: this.timeLineHandleRef.current.offsetTop,
        offsetList: offsets,
      })
      // toggle 해제 옵션은 일단 빼놓자
      // else {
      //   this.setState({ toggle_timeline: false })
      // }
      // ((item) => console.log(item.key))
      // console.log(Object.keys(this.state.offsetList))
      // this.setState({ active: 'android' })
    }
  }
  //현재 위치 파악해서 active바꿈
  checkPosition = (pos) => {
    if (!this.state.scrolling) {
      let offsets = this.state.offsetList
      let key = Object.keys(offsets).find((key) => {
        if (offsets[key] < pos + 150) {
          return key
        } else {
          return ''
        }
      })
      // console.log(key)
      this.setState({ active: key })
    }
  }

  scrollEventHandle = () => {
    // 스크롤 이벤트 핸들러를 만들어서 아이템 클릭시에 호출시킴
    if (this.timer !== null) {
      clearTimeout(this.timer)
    }
    // 타이머 첫 호출이 아니면, 타이머를 초기화시킴
    // (이미 생성된 타이머 객체를 초기화 하는 방법으로, 타이머들이 겹치는 문제 발생 방지)
    this.timer = setTimeout(() => {
      this.setState({ scrolling: false })
    }, 800)
    // 스크롤 이벤트가 끝난 후 0.8초 후에 스테이트에 스크롤이 멈췄다는 정보 전달
    // 스크롤이 계속된다면, 타이머가 계속 초기화되면서 scrolling은 false가 되지 못함
  }

  //타임라인 아이템 클릭시 해당 칸으로 넘어감
  handleClick = (id) => {
    this.setState({ active: id, scrolling: true })
    // 아이템 클릭과 동시에, 하이라이트 된 아이템 정보와 스크롤링이 시작되었다는 정보 저장
    // console.log(id)
    // 올 수 있는 id목록 portfolio, toy, ue4, comp, php, java, android
    // console.log('offset log : ', this.state.offsetList[id])
    // console.log(this.state.windowSize * 0.5)
    let targetPos = this.state.offsetList[id]
    window.scroll({
      top: targetPos,
      left: 0,
      behavior: 'smooth',
    })
    this.scrollEventHandle()
    // id.current.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    let { toggle_timeline, active, position, timeline_top, date } = this.state
    // let toggle = this.toggle
    // console.log(position)
    let handleClick = this.handleClick
    let timeline_top_style = {}
    if (position > timeline_top) {
      //포지션 높이가 타임라인 높이보다 커지는 순간 fixed
      timeline_top_style = {
        position: 'fixed',
        top: '0',
        zIndex: '100',
        // backgroundColor: '#454f5d',
        backgroundColor: 'var(--var-bg-color)',
      }
    }

    return (
      <section id="timeline_section_wrapper">
        <div className={['timeline_wrapper', toggle_timeline && 'onToggle'].join(' ')}>
          <h2>학습 타임라인 & 포트폴리오</h2>
          {/* <br></br> */}
          <div className="timeline_date" ref={this.timeLineHandleRef}>
            {' '}
            <div className="timeline_date_start">`19. 10. 03. ~</div>
            <div className="timeline_date_end">~ {date}</div>
          </div>
          {/* 2019. 10. 03 ~ 2020. 07. 28 */}
          <div className="timeline_empty_wrapper">
            <div className="timeline" style={timeline_top_style}>
              <ol
                className={active === 'java' ? 'active' : ''}
                onClick={() => handleClick('java')}
                style={{ flex: '6' }}
              >
                <img className="timeline_hover_img" src={java_icon} alt="java"></img>
                Java
                <br />5 주<img className="timeline_line" src={line} alt="java"></img>
              </ol>
              <ol
                className={active === 'android' ? 'active' : ''}
                onClick={() => handleClick('android')}
                style={{ flex: '7' }}
              >
                <img className="timeline_hover_img" src={android_icon} alt="android"></img>
                Android
                <br />6 주<img className="timeline_line" src={line} alt="android"></img>
              </ol>{' '}
              <ol
                style={{ flex: '7' }}
                className={active === 'php' ? 'active' : ''}
                onClick={() => handleClick('php')}
              >
                <img className="timeline_hover_img" src={php_icon} alt="php"></img>
                PHP
                <br />6 주<img className="timeline_line" src={line} alt="php"></img>
              </ol>{' '}
              <ol
                style={{ flex: '6' }}
                className={active === 'comp' ? 'active' : ''}
                onClick={() => handleClick('comp')}
              >
                <img className="timeline_hover_img" src={python} alt="python"></img>
                창업대회
                <br />5 주<img className="timeline_line" src={line} alt="comp"></img>
              </ol>{' '}
              <ol
                style={{ flex: '4' }}
                className={active === 'toy' ? 'active' : ''}
                onClick={() => handleClick('toy')}
              >
                <img className="timeline_hover_img" src={ubuntu} alt="side"></img>
                Toy
                <br /> Project<img className="timeline_line" src={line} alt="side"></img>
              </ol>
              <ol
                style={{ flex: '11' }}
                className={active === 'ue4' ? 'active' : ''}
                onClick={() => handleClick('ue4')}
              >
                <img className="timeline_hover_img" src={ue4} alt="ue4"></img>
                UE4 Game
                <br />
                11 주<img className="timeline_line" src={line} alt="game"></img>
              </ol>{' '}
              <ol
                style={{ flex: '5' }}
                className={active === 'portfolio' ? 'active' : ''}
                onClick={() => handleClick('portfolio')}
              >
                <img className="timeline_hover_img" src={react_icon} alt="react_icon"></img>
                React
                <br /> HERE
                <img className="timeline_line" src={line} alt="this"></img>
              </ol>
            </div>
          </div>
        </div>

        {/* <div className="anchor" ref={this.portfolioTopRef}></div> */}
        <div className={['contents_wrapper', toggle_timeline && 'onToggle'].join(' ')}>
          {/* 작품들 돌려가며 볼 수 있는 wrapper 위치입니다. 돌리지 말고 나열로 변경 */}

          <div className="anchor" ref={this.ue4TopRef}></div>
          <Item position={this.state.position} item_index={6}></Item>

          <div className="anchor" ref={this.toyTopRef}></div>
          <Item position={this.state.position} item_index={5}></Item>

          <div className="anchor" ref={this.compTopRef}></div>
          <Item position={this.state.position} item_index={4}></Item>

          <div className="anchor" ref={this.phpTopRef}></div>
          <Item position={this.state.position} item_index={3}></Item>

          <div className="anchor" ref={this.androidTopRef}></div>
          <Item position={this.state.position} item_index={2}></Item>

          <div className="anchor" ref={this.javaTopRef}></div>
          <Item position={this.state.position} item_index={1}></Item>
        </div>
      </section>
    )
  }
}

export default TimeLine
