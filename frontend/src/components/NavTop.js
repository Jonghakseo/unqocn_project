import React, { Component } from 'react'
import profile_img from '../res/pic/profile_front_3.jpg'
import github_icon from '../res/icon/github.svg'
import tistory_icon from '../res/icon/tistory.svg'
import contact_icon from '../res/icon/envelope.svg'
import './NavTop.css'

class NavTop extends Component {
  constructor(props) {
    super(props)
    // console.log(props);
    this.state = {
      toggle: false, //상단 nav의 토글여부
    }
    // console.log(this.state.toggle);
  }

  handleClickProfile = (toggle) => {
    let switchedToggle = !this.state.toggle
    this.setState({
      toggle: switchedToggle,
    })
    // console.log(this.state.toggle)
  }

  render() {
    let { toggle } = this.state

    return (
      <nav className="nav_top">
        <div className={['nav_profile', toggle && 'profile_toggled'].join(' ')}>
          <img src={profile_img} onClick={() => this.handleClickProfile(toggle)} alt="profile_image"></img>
          <div className={['profile_fab_container', toggle && 'fab_container_toggled'].join(' ')}>
            {/* 깃헙 링크 */}
            <a
              className={['profile_fab_item', toggle && 'fab_item_toggled'].join(' ')}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Jonghakseo"
            >
              <img src={github_icon} alt="github_link"></img>
            </a>
            {/* 티스토리 블로그 링크 */}
            <a
              className={['profile_fab_item', toggle && 'fab_item_toggled'].join(' ')}
              target="_blank"
              rel="noopener noreferrer"
              href="https://nookpi.tistory.com"
            >
              <img src={tistory_icon} alt="tistory_link"></img>
            </a>
            {/* 메일 링크 */}
            <a
              className={['profile_fab_item', toggle && 'fab_item_toggled'].join(' ')}
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:unqocn@gmail.com"
            >
              <img src={contact_icon} alt="contact_link"></img>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavTop
