import React, { Component } from 'react'
// import { findDOMNode, render, unmountComponentAtNode } from 'react-dom'
import './TopSection.css'
import RotateText from './TopSection/RotateText'
// import BigProfile from '../res/pic/profile_big_resize.png'
// import BigProfile from '../res/pic/profile_front_3 - 원본.jpg'
import java from '../res/icon/java.svg'
import android from '../res/icon/android.svg'
import php from '../res/icon/php.svg'
import aws from '../res/icon/aws.svg'
import css from '../res/icon/css3-alt.svg'
import git from '../res/icon/git-alt.svg'
import python from '../res/icon/python.svg'
import react_icon from '../res/icon/react.svg'
import ubuntu from '../res/icon/ubuntu.svg'
import django from '../res/icon/django.svg'
import ue4 from '../res/icon/Unreal_Engine_Logo.svg'
import mysql from '../res/icon/mysql-2.svg'

class TopSection extends Component {
  //함수형 컴포넌트는 render 될 때의 값들을 유지한다. 클래스형은 아님.

  state = {
    position: this.props.position,
    windowSize: this.props.windowSize,
    toggle_profile: false,
  }

  componentDidUpdate(nextProps) {
    if (
      Math.ceil(this.props.position / 30) !== Math.ceil(nextProps.position / 30)
      ///30 단위로 해놓은 이유는 떨림 현상을 방지하기 위해서(원인 파악 아직 못함)
    ) {
      this.toggle(nextProps.position, nextProps.windowSize)
    }
  }

  toggle(pos, top) {
    // console.log(top)
    pos = Math.ceil(pos) / 10
    // let top_end = Math.ceil(top * 0.085) //첫 화면의 85% 넘어가면 없어지게
    // 가변값으로 설정해야함
    // console.log(top_end)
    // if (pos > 1 && pos < top_end) {
    if (pos > 1) {
      this.setState({
        toggle_profile: true,
      })
    }
    // else if (pos >= top_end) {
    //   this.setState({
    //     toggle_profile: false,
    //   })
    // }
    else {
      this.setState({
        toggle_profile: false,
      })
    }
  }

  render() {
    let { toggle_profile } = this.state
    // console.log(toggle)
    let rotate
    if (toggle_profile) {
      rotate = 'rotate'
    } else {
      rotate = ''
    }

    let style_row1 = {
      transition: 'opacity 0.7s, transform 0.7s, width 0.7s, height 0.7s',
    }
    let style_row2 = {
      transition: 'opacity 1.3s, transform 1.3s, width 1.3s, height 1.3s',
    }
    let style_row3 = {
      transition: 'opacity 1.8s, transform 1.8s, width 1.8s, height 1.8s',
    }
    return (
      <div id="top_title">
        <div id="github_link_portfolio">
          <a href="https://github.com/Jonghakseo/unqocn_project" target="blank">
            {null}
          </a>
          <span>이 페이지 소스 보러가기</span>
        </div>
        저는
        <br />
        <RotateText />
        개발자입니다
        <div className="background_decoration">
          <div className="background_decoration_row">
            <img className={rotate} style={style_row1} draggable="false" src={java} alt="java"></img>
            <img className={rotate} style={style_row1} draggable="false" src={android} alt="android"></img>
            <img className={rotate} style={style_row1} draggable="false" src={php} alt="php"></img>
            <img className={rotate} style={style_row1} draggable="false" src={react_icon} alt="react"></img>
          </div>
          <div className="background_decoration_row">
            <img className={rotate} style={style_row2} draggable="false" src={ubuntu} alt="ubuntu"></img>
            <img className={rotate} style={style_row2} draggable="false" src={mysql} alt="mysql"></img>
            <img className={rotate} style={style_row2} draggable="false" src={python} alt="python"></img>
            <img className={rotate} style={style_row2} draggable="false" src={django} alt="django"></img>
          </div>
          <div className="background_decoration_row">
            <img className={rotate} style={style_row3} draggable="false" src={aws} alt="AWS"></img>
            <img className={rotate} style={style_row3} draggable="false" src={git} alt="git"></img>
            <img className={rotate} style={style_row3} draggable="false" src={ue4} alt="UE4"></img>
            <img className={rotate} style={style_row3} draggable="false" src={css} alt="css"></img>
          </div>
        </div>
        <div className={['big_profile_wrapper', toggle_profile && 'big_progile_on'].join(' ')}>
          <span className="profile_text_area">
            | 서종학 &nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp; JongHak Seo
            <br /> <br />
            | &#x1f4f1; Phone
            <br />
            &nbsp;&nbsp;&nbsp; 010-4129-7219
          </span>
          <div className="profile_big_image">
            <div className="blur"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopSection
