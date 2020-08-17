import React, { Component } from 'react'
import './RotateText.css'

class RotateText extends Component {
  state = {
    switch_style: false,
    end_switch: false,
    index: 0,
    now: '발전에 관심있는',
    cando: ['.', '적극적인', '배움을 즐기는', '함께하면 즐거운'],
  }

  componentDidMount() {
    // 마운트 되면 실행
    // 일단 로테이션 함수 정의
    const rotation = () =>
      //타임아웃 걸어놓고 재귀적으로 계속 실행되게 함
      setTimeout(() => {
        let ind = this.state.index
        //인덱스는 지금 스테이트에서 가져오고,
        ind++
        // 1 추가해주고
        if (ind === this.state.cando.length) return rotationEnd()
        // %로 out of lange 안 생기게 처리(무한반복에 필요한데 무한반복 해제되면서 일단 필요없어짐)
        ind = ind % this.state.cando.length
        let item = this.state.cando[ind]
        // 아이템 꺼내오고
        this.setState({
          switch_style: true,
          index: ind,
          now: item,
        })
        //스테이트 재정의(아래에서 바꾸기 위해서)
        // console.log(this.state);

        setTimeout(() => {
          this.setState({
            switch_style: false,
          })
        }, 1500)
        // console.log(this.state.switchStyle);
        // 재귀 실행
        rotation()
      }, 1800)

    rotation()
    //첫 실행
    const rotationEnd = () => {
      this.setState({ end_switch: true })
      // console.log('끝    ')
    }
  }

  render() {
    // console.log(this.state.switchStyle);
    let introStyle = {
      fontWeight: 'bolder',
      animationName: 'fadeIn',
      animationDuration: '2s',
      animationIterationCount: '1',
      animationFillMode: 'both',
      animationTimingFunction: 'ease-in-out',
    }

    let endStyle = {
      fontWeight: 'bolder',
      animationName: 'fadeOut',
      animationDuration: '1s',
      animationIterationCount: '1',
      animationFillMode: 'both',
      animationTimingFunction: 'ease-in-out',
    }

    // console.log(this.state.index);
    let ret_div
    if (!this.state.switch_style) {
      ret_div = <div className="intro_text">{this.state.now}</div>
    } else {
      ret_div = (
        <div className="intro_text" style={introStyle}>
          {this.state.now}
        </div>
      )
    }
    if (this.state.end_switch) {
      ret_div = (
        <div className="intro_text" style={endStyle}>
          {' '}
          {this.state.now}
        </div>
      )
    }
    return ret_div
  }
}

export default RotateText
