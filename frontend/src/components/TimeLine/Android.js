import React, { Component } from 'react'
import './Android.css'
import './TimelineItem.css'
import JavaImage1 from '../../res/pic/java/java1.png'
import JavaImage2 from '../../res/pic/java/test.png'
import JavaImage3 from '../../res/pic/java/java1.png'
import JavaImage4 from '../../res/pic/java/neb.png'
import JavaVideo from '../../res/videos/gizmo.mp4'

class Andorid extends Component {
  //   constructor(props) {
  //     super(props)
  //   }

  state = {
    select_ind: 0, //슬라이더로 보여줄 인덱스
    media_arr: [
      { active: true, src: JavaImage1, type: 'img' },
      { active: false, src: JavaImage2, type: 'img' },
      { active: false, src: JavaImage3, type: 'img' },
      { active: false, src: JavaImage4, type: 'img' },
      { active: false, src: JavaImage1, type: 'img' },
      { active: false, src: JavaVideo, type: 'video' },
    ], //미디어를 담을 배열
  }

  onClickThumbnail = (selected_key) => {
    console.log(selected_key)

    const { media_arr } = this.state
    this.setState({
      media_arr: media_arr.map(
        (item, key) =>
          key === selected_key
            ? { ...item, active: true } // 새 객체를 만들어서 기존의 값 + active만 true로 덮어씌움
            : { ...item, active: false }, // 다른 애들은 false 처리
      ),
    })
  }

  render() {
    // console.log(this.state)
    let selected_item = this.state.media_arr.find(
      (item) => item.active === true,
    )
    let main_media = () => {
      if (selected_item.type === 'img') {
        return (
          <img src={selected_item.src} alt="main_img" draggable="false"></img>
        )
      } else if (selected_item.type === 'video') {
        return (
          <video controls autoPlay={true}>
            <source src={selected_item.src} type="video/mp4"></source>
          </video>
        )
      } else {
        return 'else'
      }
    }
    // let selected_media = this.state.media_arr[selected_ind]
    // console.log(selected_media)
    return (
      <section className="portfolio_section">
        {/* 섹션에 플렉스 적용하고 col 방향으로 진행되게 함 */}
        <div className="portfolio_title">
          자바 작품 제목
          {/* 제목 들어갈 영역 */}
        </div>
        <div className="portfolio_media_wrapper">
          <div className="portfolio_media_thumbnail_wrapper">
            {this.state.media_arr.map((item, key) => {
              if (item.type === 'img') {
                return (
                  <img
                    key={key}
                    src={item.src}
                    draggable="false"
                    alt={item.type}
                    onClick={() => this.onClickThumbnail(key)}
                    className={item.active === true ? 'active_thumbnail' : ''}
                  ></img>
                )
              } else if (item.type === 'video') {
                return (
                  <video
                    key={key}
                    draggable="false"
                    onClick={() => this.onClickThumbnail(key)}
                    className={item.active === true ? 'active_thumbnail' : ''}
                  >
                    {' '}
                    <source src={item.src} type="video/mp4"></source>
                  </video>
                )
              } else {
                return ''
              }
            })}
          </div>
          <div className="portfolio_media_main">{main_media()}</div>
        </div>
        <article className="portfolio_text_section">
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">기능 소개</span>{' '}
            <span className="portfolio_text_content">
              기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">기능 소개</span>{' '}
            <span className="portfolio_text_content">
              기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">기능 소개</span>{' '}
            <span className="portfolio_text_content">
              기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">기능 소개</span>{' '}
            <span className="portfolio_text_content">
              기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구기능어쩌구
            </span>
          </div>
        </article>
      </section>
    )
  }
}

export default Andorid
