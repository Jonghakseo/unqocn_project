import React, { Component } from 'react'
import './TimelineItem.css'
import Modal from '../Modal/Modal'
import PhpImage1 from '../../res/pic/php/main_new.png'
import PhpImage2 from '../../res/pic/php/search_before.png'
import PhpImage3 from '../../res/pic/php/search_result.png'
import PhpImage4 from '../../res/pic/php/search_desc.png'
import PhpImage5 from '../../res/pic/php/review.png'
import PhpImage6 from '../../res/pic/php/statistics.png'
import PhpImage7 from '../../res/pic/php/help.png'
import PhpImage8 from '../../res/pic/php/profile.png'
import PhpImage9 from '../../res/pic/php/subscribe.png'

class Php extends Component {
  //   constructor(props) {
  //     super(props)
  //   }

  state = {
    modalVisible: false, //모달 켜고 끌 변수
    select_ind: 0, //슬라이더로 보여줄 인덱스
    media_arr: [
      {
        active: true,
        // src: "/res/pic/php/main_new.png'",
        src: PhpImage1,
        type: 'img',
        desc:
          '사이트 접속시 맨 처음 보이는 화면입니다.</br></br>' +
          '첫 화면에서는 검색량 상위 맛집, 나만의 맛집 게시판 추천 상위 게시글, 맛점 서비스 이용 가이드가 노출됩니다.' +
          '</br></br>좌측 NAV를 통해 다양한 서비스로의 접근이 가능하며, 상단 검색창으로 바로 검색이 가능합니다.</br></br>' +
          '우측 상단에서는 로그인, 회원가입이 가능합니다.',
      },
      // { active: false, src: PhpImage2, type: 'img', desc: '' },
      {
        active: false,
        src: PhpImage3,
        type: 'img',
        desc:
          '검색을 하고 난 결과창입니다.</br></br>' +
          '상단에서는 업체에 대한 기본적인 정보(영업 상태, 전화번호, 주 메뉴와 가격, 사진)들을 제공합니다.</br></br>' +
          '좌측에서는 구글맵을 통해 해당 업체의 주소와 위치를 파악 할 수 있으며, 우측 카드뷰를 통해 각 리뷰 사이트의 평균 별점 및 대표 리뷰들을 볼 수 있습니다.</br>' +
          '각 사이트의 로고를 클릭해서, 사이트별 업체 리뷰 페이지로 이동이 가능합니다.',
      },
      // { active: false, src: PhpImage4, type: 'img', desc: '' },
      {
        active: false,
        src: PhpImage5,
        type: 'img',
        desc:
          '유저가 간단한 리뷰를 올리는 페이지입니다.</br></br>' +
          '유저는 카드 뷰 형태로 별점과 리뷰를 남기고, 방문객들을 위한 추천 태그를 남깁니다.' +
          '</br>입력한 정보들은 통계탭에서도 사용됩니다.',
      },
      {
        active: false,
        src: PhpImage6,
        type: 'img',
        desc:
          '맛집 통계입니다.<br/><br/>' +
          '통계탭은 베이직 단계 구독자 이상에게 제공되는 서비스로, 비 회원이나 서비스 비 구독자에게는 제공되지 않습니다.<br/><br/>' +
          '검색량 상위 업체, (사용자가 입력한 주소지를 기반으로 한) 지역 별점 상위 업체, 월간 리뷰량 상위 업체를 기본으로 제공합니다.<br/><br/>' +
          '상세검색에서는 해당 업체의 리뷰 데이터를 종합하여, 추천 대상과 앞으로의 전망, 요일별 검색 추세, 별점 통계를 제공합니다.',
      },
      // { active: false, src: PhpImage7, type: 'img', desc: '' },
      {
        active: false,
        src: PhpImage8,
        type: 'img',
        desc:
          '프로필 설정 화면입니다.<br/><br/>' +
          '사용자의 개인 정보를 변경하는 곳입니다. <br/>' +
          '이름과 메일주소는 변경 할 수 없으며, 프로필사진, 주소지, 비밀번호 등의 변경이 가능합니다.<br>' +
          '입력받은 주소지를 기반으로 맛집 통계에서 지역 맛집 추천 서비스가 제공됩니다. <br/><br/>' +
          '주소지 미 입력시 상단 알림탭에서 주소 입력 권유 알림이 노출됩니다.',
      },
      {
        active: false,
        src: PhpImage9,
        type: 'img',
        desc:
          '구독 화면입니다.<br/><br/>' +
          '카카오 페이 결제 API를 활용하였으며, 테스트 결제 가능합니다.(실 결제는 사업자 등록이 필요)<br/><br>' +
          '프리미엄 기능인 맛집 컬럼 기능은 구현되지 않았습니다.',
      },
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

  openModal = () => {
    this.setState({ modalVisible: true })
  }

  closeModal = () => {
    this.setState({ modalVisible: false })
  }

  render() {
    // console.log(this.state)
    let { modalVisible } = this.state
    // 모달창 띄울 변수 선언
    let selected_item = this.state.media_arr.find((item) => item.active === true)
    let main_media = () => {
      if (selected_item.type === 'img') {
        return (
          <div className="portfolio_media_main">
            <img
              src={selected_item.src}
              alt="main_img"
              draggable="false"
              onClick={() => this.openModal()}
            ></img>
            {modalVisible && (
              <Modal
                visible={modalVisible}
                closable={true}
                maskClosable={true}
                src={selected_item.src}
                // 소스도 같이 넘겨줌
                onClose={() => this.closeModal()}
              ></Modal>
            )}
          </div>
        )
      } else if (selected_item.type === 'video') {
        return (
          <div className="portfolio_media_main">
            <video controls autoPlay={false}>
              <source src={selected_item.src} type="video/mp4"></source>
            </video>
          </div>
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
            {main_media()}
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
                <a
                  target="_blank"
                  href="https://unqocn.hopto.org/matjeom/"
                  rel="noopener noreferrer"
                >
                  맛점
                </a>
              </h2>
              <br /> <br />
              <div>
                <br />↑ 클릭시 이동합니다
              </div>
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">개발 기간</span>{' '}
            <span className="portfolio_text_content">
              2020. 1. 15 ~ 2019. 2. 18 (4주)
              <br /> <br />
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소개</span>{' '}
            <span className="portfolio_text_content">
              맛집에 대한 각 사이트의 별점과 리뷰를 한눈에 조회할 수 있습니다.
              <br />
              유저들이 각자 맛집에 대한 의견을 나누고 리뷰를 올릴 수 있는 커뮤니티 사이트입니다.
              <br />
              <br />
            </span>
          </div>

          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">주요 기능</span>{' '}
            <span className="portfolio_text_content">
              1. 메인페이지
              <br />
              <span>
                php-mailer를 사용한 회원가입, 비밀번호 찾기 | 로그인 | 검색량 상위 맛집 | 추천
                게시물 | 사이트 이용 안내
              </span>
              <br />
              2. 맛집 검색
              <br />
              <span>
                맛집 사진, 가격 등 정보 확인 | Google Map API를 통한 위치 확인 | 각 리뷰 사이트의
                리뷰, 별점 확인 | 각 리뷰 사이트로 이동
              </span>
              <br />
              3. 유저 리뷰 페이지
              <br />
              <span>간단한 카드 형식 리뷰 작성 및 조회 가능</span>
              <br />
              4. 에디터 추천 맛집
              <br />
              <span>에디터(운영자) 추천 맛집 포스팅 작성, 열람</span>
              <br /> 5. 나만의 맛집 리스트
              <br />
              <span>CRUD 게시판 | 맛집 정보 공유 가능 | 추천, 댓글</span>
              <br /> 6. 맛집 통계
              <br />
              <span>검색 내역, 리뷰를 바탕으로 맛집 통계 제공</span>
              <br /> 7. php-mailer를 사용해 사이트 문의사항 접수
              <br /> 8. 프로필 사진 업로드 및 개인 정보 수정
              <br /> 9. Kakao Pay API를 사용한 결제
              <br /> 10. 최근 검색 내역, 최근 조회 게시글 확인 (쿠키) <br /> <br />
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소감</span>{' '}
            <span className="portfolio_text_content">
              개발 첫 시작부터 Android 작품 개발까지 Java와 함께 하다가 처음으로 PHP, JS, CSS 를
              만나게 되었습니다.
              <br />
              처음에는 Data type을 선언하지 않고 사용하는 PHP와 JS에 편함을 느꼈지만, 디버깅을
              하면서 '문제가 터졌을 땐 오히려 독이 될 수도 있구나'라고 느꼈습니다.
              <br />
              물론 새로운 언어를 다룬다는 두려움이 있었지만, 생각보다 각 언어의 차이가 크지 않다는
              생각이 들었습니다. 막상 사용해보니 제어문, 반복문 뿐만 아니라 문자열을 다루거나 배열을
              다루는 메소드 역시 사용하는 형태만 약간 다를 뿐 비슷하게 사용할 수 있었습니다.
              <br />
              <br />
              또한 직접 Linux, Apache, PHP, MySQL 등을 설치하면서 리눅스에 익숙해지려 노력했던
              시기이기도 합니다.
              <br />
              <br />
              작품 개발 기간 HTTP, TCP/IP 통신의 개념과 GET, POST, 쿠키, 세션, DB, Server 등
              네트워크 쪽으로 폭넓은 공부와 이해를 하는 계기가 되었습니다.
              <br />
              <br />
            </span>
          </div>
        </article>
      </section>
    )
  }
}

export default Php
