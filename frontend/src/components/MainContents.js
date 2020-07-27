import React, { Component } from 'react'
import TopSection from './TopSection'
import './MainContents.css'
class MainContents extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    position: this.props.position,
  }
  render() {
    return (
      <section>
        <TopSection position={this.state.position}></TopSection>
        <div></div>
        <div></div>
      </section>
    )
  }
}

export default MainContents
