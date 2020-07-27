import React, { Component } from 'react';
import './TopSection.css';
import RotateText from './TopSection/RotateText';

class TopSection extends Component {
  //함수형 컴포넌트는 render 될 때의 값들을 유지한다.

  //   constructor(props) {
  //     super(props);
  //     console.log(props);
  //   }

  render() {
    return (
      <div id="top_title">
        저는
        <br />
        <RotateText />
        개발자 입니다
      </div>
    );
  }
}

export default TopSection;
