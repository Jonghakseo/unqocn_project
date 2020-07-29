import React, { Component } from 'react'
// import { findDOMNode } from 'react-dom'
import './TimeLine.css'
import Java from './TimeLine/Java'
import Android from './TimeLine/Android'
import line from '../res/icon/horizon-line.svg'
import java_icon from '../res/icon/java.svg'
import android_icon from '../res/icon/android.svg'
import php_icon from '../res/icon/php.svg'
// import aws from '../res/icon/aws.svg'
import css from '../res/icon/css3-alt.svg'
// import git from '../res/icon/git-alt.svg'
import python from '../res/icon/python.svg'
import react_icon from '../res/icon/react.svg'
// import ubuntu from '../res/icon/ubuntu.svg'
// import django from '../res/icon/django.svg'
import ue4 from '../res/icon/Unreal_Engine_Logo.svg'
// import mysql from '../res/icon/mysql-2.svg'
// import BigProfile from '../res/pic/profile_big_resize.png'

class TimeLine extends Component {
  //함수형 컴포넌트는 render 될 때의 값들을 유지한다.

  constructor(props) {
    super(props)

    this.state = {
      active: '',
      position: this.props.position,
      windowSize: this.props.windowSize,
      timeline_top: 1300,
      toggle_timeline: false,
    }
    // console.log(props)
  }
  timeLineHandleRef = React.createRef()

  componentDidMount() {
    // console.log(this.timeLineHandleRef.current.offsetTop)
    // let timelineRef = this.timeLineHandleRef
    // let tl_top = findDOMNode(timelineRef).getBoundingClientRect().top
    this.setState({ timeline_top: this.timeLineHandleRef.current.offsetTop })
  }
  componentWillReceiveProps(nextProps) {
    if (
      Math.ceil(this.props.position / 50) !== Math.ceil(nextProps.position / 50)
    ) {
      // if(nextProps.position > 600){

      // }
      //   this.toggle(nextProps.position)
      // let bottom = findDOMNode(this).getBoundingClientRect().bottom
      let endTop = this.props.windowSize / 1.5
      // console.log('끝나는 지점', endTop)
      // console.log(nextProps.position)
      this.setState({ position: nextProps.position })
      if (nextProps.position > endTop) {
        this.setState({
          toggle_timeline: true,
        })
      } else {
        this.setState({ toggle_timeline: false })
      }
    }
  }

  // componentDidMount(){
  //   timeline_top = findDOMNode(timeLineHandleRef).getBoundingClientRect().top
  // }

  handleClick = (id) => {
    this.setState({ active: id })
    console.log(id)
  }

  render() {
    let { toggle_timeline, active, position, timeline_top } = this.state
    // let toggle = this.toggle
    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = (newDate.getFullYear() + '').substring(2)
    let today = `\`${year}. ${month}. ${date}`
    let handleClick = this.handleClick
    let timeline_top_style = {}
    if (position > timeline_top) {
      //포지션 높이가 타임라인 높이보다 커지는 순간 fixed
      timeline_top_style = {
        position: 'fixed',
        top: '0',
        zIndex: '100',
        backgroundColor: '#454f5d',
      }
    }

    return (
      <section id="timeline_section_wrapper">
        <div
          className={['timeline_wrapper', toggle_timeline && 'onToggle'].join(
            ' ',
          )}
        >
          <h2>학습 타임라인 & 포트폴리오</h2>
          {/* <br></br> */}
          <div className="timeline_date" ref={this.timeLineHandleRef}>
            {' '}
            <div className="timeline_date_start">`19. 10. 03 ~</div>
            <div className="timeline_date_end">~ {today}</div>
          </div>
          {/* 2019. 10. 03 ~ 2020. 07. 28 */}
          <div className="timeline_empty_wrapper">
            <div className="timeline" style={timeline_top_style}>
              <ol
                className={active === 'java' ? 'active' : ''}
                onClick={() => handleClick('java')}
                style={{ flex: '6' }}
              >
                <img
                  className="timeline_hover_img"
                  src={java_icon}
                  alt="java"
                ></img>
                Java
                <br />5 주
                <img className="timeline_line" src={line} alt="java"></img>
              </ol>
              <ol
                className={active === 'android' ? 'active' : ''}
                onClick={() => handleClick('android')}
                style={{ flex: '7' }}
              >
                <img
                  className="timeline_hover_img"
                  src={android_icon}
                  alt="android"
                ></img>
                Android
                <br />6 주
                <img className="timeline_line" src={line} alt="android"></img>
              </ol>{' '}
              <ol
                style={{ flex: '7' }}
                className={active === 'php' ? 'active' : ''}
                onClick={() => handleClick('php')}
              >
                <img
                  className="timeline_hover_img"
                  src={php_icon}
                  alt="php"
                ></img>
                PHP
                <br />6 주
                <img className="timeline_line" src={line} alt="php"></img>
              </ol>{' '}
              <ol
                style={{ flex: '8' }}
                className={active === 'comp' ? 'active' : ''}
                onClick={() => handleClick('comp')}
              >
                <img
                  className="timeline_hover_img"
                  src={python}
                  alt="python"
                ></img>
                창업대회
                <br />7 주
                <img className="timeline_line" src={line} alt="comp"></img>
              </ol>{' '}
              <ol
                style={{ flex: '11' }}
                className={active === 'ue4' ? 'active' : ''}
                onClick={() => handleClick('ue4')}
              >
                <img className="timeline_hover_img" src={ue4} alt="ue4"></img>
                UE4 Game
                <br />
                12 주<img className="timeline_line" src={line} alt="game"></img>
              </ol>{' '}
              <ol
                style={{ flex: '4' }}
                className={active === 'toy' ? 'active' : ''}
                onClick={() => handleClick('toy')}
              >
                <img className="timeline_hover_img" src={css} alt="side"></img>
                Toy
                <br />
                Project
                <img className="timeline_line" src={line} alt="side"></img>
              </ol>
              <ol
                style={{ flex: '5' }}
                className={active === 'portfolio' ? 'active' : ''}
                onClick={() => handleClick('portfolio')}
              >
                <img
                  className="timeline_hover_img"
                  src={react_icon}
                  alt="react_icon"
                ></img>
                React
                <br /> HERE
                <img className="timeline_line" src={line} alt="this"></img>
              </ol>
            </div>
          </div>
        </div>
        <div
          className={['contents_wrapper', toggle_timeline && 'onToggle'].join(
            ' ',
          )}
        >
          {/* 작품들 돌려가며 볼 수 있는 wrapper 위치입니다. 돌리지 말고 나열할까? */}
          <Java position={this.state.position}></Java>
          <Android position={this.state.position}></Android>
        </div>
      </section>
    )
  }
}

export default TimeLine
