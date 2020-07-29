import React, { Component } from 'react'
import './Java.css'
import './TimelineItem.css'
import JavaImage1 from '../../res/pic/java/java1.png'

class Java extends Component {
  render() {
    return (
      <section className="portfolio_section">
        {/* 섹션에 플렉스 적용하고 col 방향으로 진행되게 함 */}
        <div className="portfolio_title">
          자바 제목 자바 제목 자바 제목 자바 제목
          {/* 제목 들어갈 영역 */}
        </div>
        <div className="portfolio_media_wrapper">
          {/* 사진 들어갈 영역 */}
          <img src={JavaImage1} alt="java_image1"></img>
          {/* <video src="" alt="java_video"></video> */}
          <img src={JavaImage1} alt="java_image1"></img>
          <img src={JavaImage1} alt="java_image1"></img>
          <img src={JavaImage1} alt="java_image1"></img>
          <img src={JavaImage1} alt="java_image1"></img>
          <img src={JavaImage1} alt="java_image1"></img>
        </div>
        <article className="portfolio_text_wrapper">
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

export default Java
