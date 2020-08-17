import React, { Component } from 'react'
import './TimeLine.css'
import styled from 'styled-components'
import java from '../res/icon/java.svg'
import js from '../res/icon/js-square.svg'
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

class Introduce extends Component {
  constructor(props) {
    super(props)
    this.state = { toggle: false }
  }

  introduceToggleRef = React.createRef() //토글할 ref 생성

  componentDidUpdate(prevProps) {
    if (Math.ceil(this.props.position / 3) !== Math.ceil(prevProps.position / 3)) {
      // let endTop = this.props.windowSize / 1.5
      let top = this.introduceToggleRef.current.offsetTop - this.props.windowSize / 1.2
      if (prevProps.position > top) {
        this.setState({
          toggle: true,
        })
      } else {
        this.setState({
          toggle: false,
        })
      }
    }
  }

  render() {
    let toggle = this.state.toggle
    let classToggle = ''
    if (toggle) {
      classToggle = 'onToggle'
    }

    return (
      <IntroduceSection className={classToggle} ref={this.introduceToggleRef}>
        <h3>Intro</h3>
        <span>
          안녕하세요.
          <br />
          신입 개발자로 지원하는 서종학입니다.
          <br />
          새로운 것을 배우는 데에 흥미가 많고 최근에는 웹 개발에 재미를 느끼고 있습니다.
          <br />
          개발자는 새로운 시도를 통해 성장하고, 성취를 통해 동력을 얻는다고 믿습니다.
          <br />
          적극적으로 의견을 낼 수 있고 구성원간 토의를 통해 발전하는 진취적 업무 환경을 선호합니다.
          <br />
          독서 토론 동아리에서 다져진 커뮤니케이션 능력으로 <b>함께 일하면 즐거운 개발자</b>가 되고자 합니다.
        </span>{' '}
        <br /> <br />
        <h3>Github | Blog | Email</h3>
        <span>
          좌측 상단(모바일은 하단)에 있는
          <br />
          Floating Action Button을 참고해주세요.
        </span>{' '}
        <br /> <br />
        <h3>Experience & Skill</h3>
        <span>
          개발을 처음 시작한지 이제 10개월이 되었습니다.
          <br />
          짧은 기간이 아니었지만, 다양한 프로젝트를 구현할 때 사용한 모든 기술에 대해 만족스러운 경험과 기술적 깊이를
          다지기에 충분한 기간은 아니었다고 생각합니다.
          <br /> <br />
          그러나 다양한 개인 프로젝트와 팀 프로젝트를 진행하면서 얻은 가장 중요한 자산은{' '}
          <b>'내가 구현하지 못 할 기술은 없다'</b>는 자신감이라고 생각합니다.
          <br />
          <br />
          Language <br />
          <img draggable="false" src={java} alt="java"></img>
          <img draggable="false" src={android} alt="android"></img>
          <img draggable="false" src={php} alt="php"></img>
          <img draggable="false" src={python} alt="python"></img>
          <img draggable="false" src={js} alt="javascript"></img>
          <img draggable="false" src={ue4} alt="UE4"></img>
          <br />
          ETC <br />
          <img draggable="false" src={react_icon} alt="react"></img>
          <img draggable="false" src={ubuntu} alt="ubuntu"></img>
          <img draggable="false" src={mysql} alt="mysql"></img>
          <img draggable="false" src={django} alt="django"></img>
          <img draggable="false" src={aws} alt="AWS"></img>
          <img draggable="false" src={git} alt="git"></img>
          <img draggable="false" src={css} alt="css"></img>
        </span>
        <br /> <br />
        <h3>Education</h3>
        <span>
          {/* <br /> */}
          경희대학교 경영학 학사
        </span>
        <br /> <br />
        <h3>Recent</h3>
        <span>
          2020.06. ~
          <br />
          학원 스타트업 프로젝트 내 웹 프론트 포지션에서 협업툴과 조직내 의사소통에 대해 경험하고 있습니다.
          <br />
          <br />
          프로젝트 도중 웹 프론트엔드에 대한 재미를 느끼고 업무 외 시간에 틈틈이 현재 페이지를 React + Django로
          제작하였습니다.
        </span>
        <br /> <br />
        <h3>Portfolio </h3>
        <span>↓</span>
      </IntroduceSection>
    )
  }
}

const IntroduceSection = styled.div`
  align-self: center;
  margin: 0 20% 10% 20%;
  width: 60%;
  word-break: keep-all;
  opacity: 0;
  font-family: 'Noto Sans KR', 'Spoqa Han Sans', 'Sans-serif';
  transition: opacity 1s linear, margin 1s linear;
  /* text-align: center; */
  & img {
    height: 25px;
    margin: 10px 7px;
  }

  @media only screen and (max-width: 768px) {
    margin: 10% 5%;
    width: 90%;
  }
`

export default Introduce
