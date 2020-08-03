import React, { Component } from 'react'
import './Java.css'
import './TimelineItem.css'
import JavaImage1 from '../../res/pic/java/java1.PNG'
// import JavaImage2 from '../../res/pic/java/test.png'
import JavaImage2 from '../../res/pic/java/java2.PNG'
import JavaImage3 from '../../res/pic/java/java3.PNG'
import JavaImage4 from '../../res/pic/java/java4.PNG'
import JavaImage5 from '../../res/pic/java/java5.PNG'
import JavaVideo from '../../res/videos/java.mp4'

class Java extends Component {
  state = {
    select_ind: 0, //슬라이더로 보여줄 인덱스
    media_arr: [
      {
        active: true,
        src: JavaVideo,
        type: 'video',
        desc: '플레이 영상입니다.',
      },
      {
        active: false,
        src: JavaImage4,
        type: 'img',
        desc:
          '작품의 규칙을 볼 수 있는 창입니다.<br/><br/>게임의 전체적인 규칙을 안내해주는 게임규칙, 카드의 사용 규칙을 안내해주는 사용규칙, 카드 각각의 효과를 안내하는 카드 규칙이 있습니다.<br/><br/>실행창 상단에 위치한 도움말 - 게임규칙 버튼을 통해 열람할 수 있습니다.',
      },
      {
        active: false,
        src: JavaImage5,
        type: 'img',
        desc:
          '모든 카드의 설명을 볼 수 있는 창입니다.<br/><br/>카드의 이름, 상성, 효과 등을 확인할 수 있습니다.<br/><br/>실행창 상단에 위치한 도움말 - 카드목록 버튼을 통해 열람할 수 있습니다.',
      },
      {
        active: false,
        src: JavaImage3,
        type: 'img',
        desc:
          '게임 플레이 화면입니다.<br/><br/> 카드 목록, 주사위 상태, 게임판, 게임 로그, 현금 현황 확인이 가능합니다.<br/><br/> 하단 버튼을 통해 게임 조작이 가능합니다.',
      },
      // { active: false, src: JavaImage2, type: 'img', desc: "게임 내 미니게임 - '불끄기' 입니다." },
      { active: false, src: JavaImage1, type: 'img', desc: "게임 내 미니게임 중 하나인 '소송' 입니다." },
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
        <div className="portfolio_title">JAVA {/* 제목 들어갈 영역 */}</div>

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
              <h2>건물주 게임</h2>
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">개발 기간</span>{' '}
            <span className="portfolio_text_content">2019. 10. 26 ~ 2019. 11. 18 (3주)</span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소개</span>{' '}
            <span className="portfolio_text_content">
              건물주 게임은 턴제로 진행되며 카드를 사용하는 보드게임입니다.
              <br />
              <br />
              초기 땅 분배는 랜덤으로 이루어지며, 주사위를 굴려 이동합니다.
              <br />
              <br />
              시작 시 카드를 들고 시작하여 매 턴 카드를 드로우합니다. 땅 위에 건물 카드, 건물 카드 위에 세입자 카드를 사용하여
              돈을 벌 수 있고, 스킬 카드를 사용해 내 땅과 건물을 보호하거나 상대의 땅과 건물, 세입자를 공격 할 수 있습니다.
              <br />
              <br />
              매 5턴 마다 게임 전체에 영향을 주는 이벤트가 발생하며 이를 이용해서 전략적인 카드 사용을 노려볼 수 있습니다.
              <br />
              <br />
              1:1 대전으로 두 유저 중 돈이 먼저 떨어지는 플레이어가 패배하게 되며, 자동으로 상대 유저가 승리합니다.
              <br />
            </span>
          </div>

          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">주요 기능</span>{' '}
            <span className="portfolio_text_content">
              1. 게임 룰과 카드 각각의 효과, 상성 확인을 위한 도움말 창
              <br />
              2. 유저의 이름, 룰 변경 가능
              <br />
              3. 메인게임 팁, 타이머, 현황 갱신 스레드
              <br />
              4. 미니게임 로딩, 움직임, 자동공격 스레드
              <br />
              5. 키보드 리스너를 사용한 미니게임 스레드
              <br />
              6. 각종 배경음악 및 버튼음, 효과음 스레드
              <br />
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소감</span>{' '}
            <span className="portfolio_text_content">
              개발 공부의 시작을 함께했던 작품입니다.
              <br />
              클래스와 스레드 개념을 익히고, 직접 사용하면서 많은 재미를 느꼈습니다. <br />
              스윙을 사용하면서 어려웠지만, 그만큼 완성 시에 보람이 더 컸던 것 같습니다.
              <br />
              스레드 간 데이터 동기화, 게임에 사용되는 리소스 수집 역시 어려웠던 기억이 납니다.
              <br />
              무수한 버그를 마주하면서 '컴퓨터는 잘못이 없고 모든 문제는 내 잘못이구나'라는 진리를 깨달은 시기이기도 합니다.
            </span>
          </div>
        </article>
      </section>
    )
  }
}

export default Java
