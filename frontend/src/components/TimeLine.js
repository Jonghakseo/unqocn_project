import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import './TimeLine.css'
import Java from './TimeLine/Java'
import line from '../res/icon/horizon-line.svg'
import java_icon from '../res/icon/java.svg'
import android from '../res/icon/android.svg'
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

  // constructor(props) {
  //   super(props)
  //   // console.log(props)
  // }

  componentWillReceiveProps(nextProps) {
    if (
      Math.ceil(this.props.position / 100) !==
      Math.ceil(nextProps.position / 100)
    ) {
      // if(nextProps.position > 600){

      // }
      //   this.toggle(nextProps.position)
      // let top = findDOMNode(this).getBoundingClientRect().top
      let bottom = findDOMNode(this).getBoundingClientRect().bottom
      let endTop = this.props.topHeight * 3
      console.log(bottom, endTop)
      console.log(nextProps.position)
      if (nextProps.position > endTop) {
        this.setState({ toggle_timeline: true })
      } else {
        this.setState({ toggle_timeline: false })
      }
    }
  }

  state = {
    active: '',
    position: this.props.position,
    toggle_timeline: false,
  }

  handleClick = (id) => {
    this.setState({ active: id })
    console.log(id)
  }

  render() {
    let { toggle_timeline, active } = this.state

    // let toggle = this.toggle
    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = (newDate.getFullYear() + '').substring(2)
    let today = `\`${year}. ${month}. ${date}`
    let handleClick = this.handleClick

    return (
      <section id="timeline_section_wrapper">
        <div
          className={['timeline_wrapper', toggle_timeline && 'onToggle'].join(
            ' ',
          )}
        >
          <h2>학습 타임라인 & 포트폴리오</h2>
          {/* <br></br> */}
          <div className="timeline_date">
            {' '}
            <div className="timeline_date_start">`19. 10. 03 ~</div>
            <div className="timeline_date_end">~ {today}</div>
          </div>
          {/* 2019. 10. 03 ~ 2020. 07. 28 */}
          <div className="timeline">
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
              <br />
              5주
              <img className="timeline_line" src={line} alt="java"></img>
            </ol>
            <ol
              className={active === 'android' ? 'active' : ''}
              onClick={() => handleClick('android')}
              style={{ flex: '7' }}
            >
              <img
                className="timeline_hover_img"
                src={android}
                alt="android"
              ></img>
              Android
              <br />
              6주
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
              <br />
              6주
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
              <br />
              7주
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
              12주
              <img className="timeline_line" src={line} alt="game"></img>
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
        <div>
          {/* 작품들 돌려가며 볼 수 있는 wrapper 위치입니다. 돌리지 말고 나열할까? */}
          <Java position={this.state.position}></Java>
        </div>
      </section>
    )
  }
}

export default TimeLine
