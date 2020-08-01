import React, { Component } from 'react'
// import { findDOMNode, render, unmountComponentAtNode } from 'react-dom'
import './TopSection.css'
import RotateText from './TopSection/RotateText'
// import BigProfile from '../res/pic/profile_big_resize.png'
import BigProfile from '../res/pic/profile_front_3 - 원본.jpg'
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
  //함수형 컴포넌트는 render 될 때의 값들을 유지한다.

  // constructor(props) {
  //   super(props)
  //   // console.log(props)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   //example 특정컴포넌트의 최상단(top)이 스크롤하여 가려져서 안보이게 되면(top<0) 특정 액션 실행하는 메소드
  //   const top = findDOMNode(this).getBoundingClientRect().top
  //   top < 0 &&
  //   return true
  // }

  state = {
    position: this.props.position,
    windowSize: this.props.windowSize,
    toggle_profile: false,
  }

  componentWillReceiveProps(nextProps) {
    if (
      Math.ceil(this.props.position / 50) !== Math.ceil(nextProps.position / 50)
      ///100 단위로 해놓은 이유는 떨림 현상을 방지하기 위해서(원인 파악 아직 못함)
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
    let toggle = this.state.toggle_profile
    // console.log(toggle)
    let rotate
    if (toggle) {
      rotate = 'rotate'
    } else {
      rotate = ''
    }

    // transition: opacity 0.5s, transform 0.5s, width 0.5s, height 0.5s;
    // style={{
    //   transition:
    //     'opacity ' + Math.floor(Math.random() * 10) / 10 + 's',
    // }}
    // let toggle = this.toggle
    // console.log('toggle ', toggle)
    let style_row1 = {
      transition: 'opacity 0.5s, transform 0.5s, width 0.5s, height 0.5s',
    }
    let style_row2 = {
      transition: 'opacity 1s, transform 1s, width 1s, height 1s',
    }
    let style_row3 = {
      transition: 'opacity 1.5s, transform 1.5s, width 1.5s, height 1.5s',
    }
    return (
      <div id="top_title">
        저는
        <br />
        <RotateText />
        개발자 입니다
        {/* <br /> */}
        {/* <br /> */}
        <div className="background_decoration">
          <div className="background_decoration_row">
            <img className={rotate} style={style_row1} src={java} alt="java"></img>
            <img className={rotate} style={style_row1} src={android} alt="android"></img>
            <img className={rotate} style={style_row1} src={php} alt="php"></img>
            <img className={rotate} style={style_row1} src={react_icon} alt="react"></img>
          </div>
          <div className="background_decoration_row">
            <img className={rotate} style={style_row2} src={ubuntu} alt="ubuntu"></img>
            <img className={rotate} style={style_row2} src={mysql} alt="mysql"></img>
            <img className={rotate} style={style_row2} src={python} alt="python"></img>
            <img className={rotate} style={style_row2} src={django} alt="django"></img>
          </div>
          <div className="background_decoration_row">
            <img className={rotate} style={style_row3} src={aws} alt="AWS"></img>
            <img className={rotate} style={style_row3} src={git} alt="git"></img>
            <img className={rotate} style={style_row3} src={ue4} alt="UE4"></img>
            <img className={rotate} style={style_row3} src={css} alt="css"></img>
          </div>
          {/* <div className="background_decoration_row">
          </div> */}
        </div>
        <div className={['big_profile_wrapper', toggle && 'big_progile_on'].join(' ')}>
          <span className="profile_text_area">
            | 서종학 &nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp; JongHak Seo
            {/* 연락처 &nbsp;unqocn@gmail.com */}
            <br /> <br />
            | DEV
            <br />
            &nbsp;&nbsp;&nbsp; 2019. 10. 03 &nbsp;~&nbsp; 현재
          </span>
          <img src={BigProfile} alt="big_profile"></img>
          {/* <div className="border_div"></div> */}
        </div>
      </div>
    )
  }
}

export default TopSection
