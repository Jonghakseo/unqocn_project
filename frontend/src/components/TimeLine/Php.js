import React, { Component } from 'react'
import './TimelineItem.css'
import JavaImage1 from '../../res/pic/java/test.png'
import JavaImage2 from '../../res/pic/java/test.png'
import JavaImage3 from '../../res/pic/java/test.png'
import JavaImage4 from '../../res/pic/java/test.png'
import JavaVideo from '../../res/videos/gizmo.mp4'

class Php extends Component {
  //   constructor(props) {
  //     super(props)
  //   }

  state = {
    select_ind: 0, //슬라이더로 보여줄 인덱스
    media_arr: [
      { active: true, src: JavaImage1, type: 'img', desc: '' },
      { active: false, src: JavaImage2, type: 'img', desc: '' },
      { active: false, src: JavaImage3, type: 'img', desc: '' },
      { active: false, src: JavaImage4, type: 'img', desc: '' },
      { active: false, src: JavaImage1, type: 'img', desc: '' },
      { active: false, src: JavaVideo, type: 'video', desc: '' },
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
    let selected_item = this.state.media_arr.find((item) => item.active === true)
    let main_media = () => {
      if (selected_item.type === 'img') {
        return <img src={selected_item.src} alt="main_img" draggable="false"></img>
      } else if (selected_item.type === 'video') {
        return (
          <video controls autoPlay={false}>
            {/* 오토플레이 설정부분 */}
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
        <div className="portfolio_title">PHP{/* 제목 들어갈 영역 */}</div>
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
            <span className="portfolio_text_title">작품 이름</span>{' '}
            <span className="portfolio_text_content">
              <h2>
                <a target="_blank" href="https://unqocn.hopto.org/matjeom/" rel="noopener noreferrer">
                  맛점 ( 맛집 점수 )
                </a>
              </h2>

              <div>
                <br />↑ 클릭시 이동합니다
              </div>
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">개발 기간</span>{' '}
            <span className="portfolio_text_content">2020. 1. 15 ~ 2019. 2. 18 (4주)</span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소개</span>{' '}
            <span className="portfolio_text_content">
              맛집에 대한 각 사이트의 별점과 리뷰를 한눈에 조회할 수 있습니다.
              <br />
              유저들이 각자 맛집에 대한 의견을 나누고 리뷰를 올릴 수 있는 커뮤니티 사이트입니다.
              <br />
            </span>
          </div>

          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">주요 기능</span>{' '}
            <span className="portfolio_text_content">
              1. 메인페이지
              <br />
              <span>
                php-mailer를 사용한 회원가입, 비밀번호 찾기 | 로그인 | 검색량 상위 맛집 | 추천 게시물 | 사이트 이용 안내
              </span>
              <br />
              2. 맛집 검색
              <br />
              <span>
                맛집 사진, 가격 등 정보 확인 | 구글 지도 API를 통한 위치 확인 | 각 리뷰 사이트의 리뷰, 별점 확인 | 각 리뷰
                사이트로 이동
              </span>
              <br />
              3. 유저 리뷰 페이지
              <br />
              <span>간단한 카드 형식 리뷰 작성 및 조회 가능</span>
              <br />
              4. 에디터 추천 맛집
              <br />
              <span>에디터(운영자) 추천 맛집 포스팅 조회 | 에디터 전용 포스팅 작성</span>
              <br /> 5. 나만의 맛집 리스트
              <br />
              <span>CRUD 게시판 | 맛집 정보 공유 가능 | 추천, 댓글</span>
              <br /> 6. 맛집 통계
              <br />
              <span>사이트 내 검색 내역, 리뷰를 바탕으로 한 맛집 통계 제공</span>
              <br /> 7. php-mailer를 사용해 사이트 문의사항 접수
              <br /> 8. 프로필 사진 업로드 및 개인 정보 수정
              <br /> 9. Kakao pay 결제API를 사용해서 구독 결제
              <br /> 10. 최근 검색 내역, 최근 조회 게시글 확인 (쿠키)
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소감</span>{' '}
            <span className="portfolio_text_content">
              개발 첫 시작부터 Android 작품 개발까지 Java와 함께 하다가 처음으로 PHP, JS, CSS 를 만나게 되었습니다.
              <br />
              Data type을 선언하지 않고 사용하는 PHP와 JS에 편함을 느꼈지만, 디버깅을 하면서 '문제가 터졌을 땐 오히려 독이 될 수도
              있구나'라고 느꼈습니다.
              <br />
              새로운 언어를 다룬다는 두려움이 있었지만, 생각보다 각 언어의 차이가 크지 않다는 생각이 들었습니다. <br />
              제어문, 반복문 뿐만 아니라 문자열을 다루거나 배열을 다루는 메소드 역시 사용하는 형태만 다를 뿐 같은 개념이었습니다.
              <br />
              또한 직접 Linux, Apache, PHP, MySQL 등을 설치하면서 리눅스에 익숙해지려 노력했던 시기입니다. <br />
              작품 개발 기간 HTTP 통신의 개념과 GET, POST, 쿠키, 세션, DB, Server 등 네트워크 쪽으로 폭넓은 공부와 이해를 하는
              계기가 되었습니다.
              <br />
              css에 대한 전반적인 이해가 부족해 flex로 이뤄진 bootstrap을 사용하면서도 UI, UX 수정에 애를 먹었던 기억이 납니다.
              <br />
            </span>
          </div>
        </article>
      </section>
    )
  }
  render() {
    // console.log(this.state)
    let selected_item = this.state.media_arr.find((item) => item.active === true)
    let main_media = () => {
      if (selected_item.type === 'img') {
        return <img src={selected_item.src} alt="main_img" draggable="false"></img>
      } else if (selected_item.type === 'video') {
        return (
          <video controls autoPlay={false}>
            <source src={selected_item.src} type="video/mp4"></source>
          </video>
        )
      } else {
        return 'else'
      }
    }
    let main_desc = () => {
      if (selected_item.desc) {
        return <span dangerouslySetInnerHTML={{ __html: selected_item.desc }}></span>
      }
    }

    return (
      <section className="portfolio_section">
        {/* 섹션에 플렉스 적용하고 col 방향으로 진행되게 함 */}
        <div className="portfolio_title">PHP {/* 제목 들어갈 영역 */}</div>

        <div className="portfolio_media_section">
          <div className="portfolio_media_wrapper">
            <div className="portfolio_media_main">{main_media()}</div>
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
            </div>{' '}
          </div>
          <div className="portfolio_media_desc">{main_desc()}</div>
        </div>

        <article className="portfolio_text_section">
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 이름</span>{' '}
            <span className="portfolio_text_content">
              <h2>
                <a target="_blank" href="https://unqocn.hopto.org/matjeom/" rel="noopener noreferrer">
                  맛점 ( 맛집 점수 )
                </a>
              </h2>

              <div>
                <br />↑ 클릭시 이동합니다
              </div>
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">개발 기간</span>{' '}
            <span className="portfolio_text_content">2020. 1. 15 ~ 2019. 2. 18 (4주)</span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소개</span>{' '}
            <span className="portfolio_text_content">
              맛집에 대한 각 사이트의 별점과 리뷰를 한눈에 조회할 수 있습니다.
              <br />
              유저들이 각자 맛집에 대한 의견을 나누고 리뷰를 올릴 수 있는 커뮤니티 사이트입니다.
              <br />
            </span>
          </div>

          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">주요 기능</span>{' '}
            <span className="portfolio_text_content">
              1. 메인페이지
              <br />
              <span>
                php-mailer를 사용한 회원가입, 비밀번호 찾기 | 로그인 | 검색량 상위 맛집 | 추천 게시물 | 사이트 이용 안내
              </span>
              <br />
              2. 맛집 검색
              <br />
              <span>
                맛집 사진, 가격 등 정보 확인 | 구글 지도 API를 통한 위치 확인 | 각 리뷰 사이트의 리뷰, 별점 확인 | 각 리뷰
                사이트로 이동
              </span>
              <br />
              3. 유저 리뷰 페이지
              <br />
              <span>간단한 카드 형식 리뷰 작성 및 조회 가능</span>
              <br />
              4. 에디터 추천 맛집
              <br />
              <span>에디터(운영자) 추천 맛집 포스팅 조회 | 에디터 전용 포스팅 작성</span>
              <br /> 5. 나만의 맛집 리스트
              <br />
              <span>CRUD 게시판 | 맛집 정보 공유 가능 | 추천, 댓글</span>
              <br /> 6. 맛집 통계
              <br />
              <span>사이트 내 검색 내역, 리뷰를 바탕으로 한 맛집 통계 제공</span>
              <br /> 7. php-mailer를 사용해 사이트 문의사항 접수
              <br /> 8. 프로필 사진 업로드 및 개인 정보 수정
              <br /> 9. Kakao pay 결제API를 사용해서 구독 결제
              <br /> 10. 최근 검색 내역, 최근 조회 게시글 확인 (쿠키)
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소감</span>{' '}
            <span className="portfolio_text_content">
              개발 첫 시작부터 Android 작품 개발까지 Java와 함께 하다가 처음으로 PHP, JS, CSS 를 만나게 되었습니다.
              <br />
              Data type을 선언하지 않고 사용하는 PHP와 JS에 편함을 느꼈지만, 디버깅을 하면서 '문제가 터졌을 땐 오히려 독이 될 수도
              있구나'라고 느꼈습니다.
              <br />
              새로운 언어를 다룬다는 두려움이 있었지만, 생각보다 각 언어의 차이가 크지 않다는 생각이 들었습니다. <br />
              제어문, 반복문 뿐만 아니라 문자열을 다루거나 배열을 다루는 메소드 역시 사용하는 형태만 다를 뿐 같은 개념이었습니다.
              <br />
              또한 직접 Linux, Apache, PHP, MySQL 등을 설치하면서 리눅스에 익숙해지려 노력했던 시기입니다. <br />
              작품 개발 기간 HTTP 통신의 개념과 GET, POST, 쿠키, 세션, DB, Server 등 네트워크 쪽으로 폭넓은 공부와 이해를 하는
              계기가 되었습니다.
              <br />
              css에 대한 전반적인 이해가 부족해 flex로 이뤄진 bootstrap을 사용하면서도 UI, UX 수정에 애를 먹었던 기억이 납니다.
              <br />
            </span>
          </div>
        </article>
      </section>
    )
  }
}

export default Php
