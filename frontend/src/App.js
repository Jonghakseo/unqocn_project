//frontend/src/app.js
import React, { Component } from 'react';
import NavTop from './components/NavTop';
import MainContets from './components/MainContents';

class App extends Component {
  //   async componentDidMount() {}
  // 마운트 이후 실행되는 코드입니다.
  constructor(props) {
    super(props);
    console.log(window.pageYOffset);
  }

  state = {
    position: 0,
  };

  componentDidMount() {
    // 스크롤 이벤트 바인딩
    window.addEventListener('scroll', this.onScroll);
  }

  //스크롤 이벤트 정의
  onScroll = () => {
    this.setState({
      position: window.pageYOffset,
    });
    // console.log(this.state.position);
  };

  render() {
    // console.log(this.height);
    return (
      <main>
        <NavTop className="nav_top"></NavTop>
        {/* 프로필 사진, nav 안에 fab들 */}
        <MainContets
          className="main_contents"
          position={this.state.position}
        ></MainContets>
      </main>
    );
  }
}

export default App;
