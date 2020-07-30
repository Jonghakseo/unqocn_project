import React, { Component } from 'react'
import './Android.css'
import './TimelineItem.css'
import AndroidImage1 from '../../res/pic/android/home_memo.png'
import AndroidImage2 from '../../res/pic/android/dday_todo_timeline.png'
import AndroidImage3 from '../../res/pic/android/gall_setting.png'
import AndroidImage4 from '../../res/pic/android/chatting.png'
import AndroidVideo from '../../res/videos/android.mp4'
// import AndroidVideo2 from '../../res/videos/android2.mp4'

class Andorid extends Component {
  //   constructor(props) {
  //     super(props)
  //   }

  state = {
    select_ind: 0, //슬라이더로 보여줄 인덱스
    media_arr: [
      { active: true, src: AndroidVideo, type: 'video' },
      // { active: false, src: AndroidVideo2, type: 'video' },
      { active: false, src: AndroidImage3, type: 'img' },
      { active: false, src: AndroidImage2, type: 'img' },
      { active: false, src: AndroidImage1, type: 'img' },
      { active: false, src: AndroidImage4, type: 'img' },
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
        <div className="portfolio_title">Android {/* 제목 들어갈 영역 */}</div>
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
              <h2>학수고대</h2>
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">개발 기간</span>{' '}
            <span className="portfolio_text_content">
              2019. 11. 25 ~ 2019. 12. 31 (4주)
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소개</span>{' '}
            <span className="portfolio_text_content">
              비트윈 같은 커플 전용 어플입니다.
              <br />
              롱디(장거리 데이트)를 했던 경험을 살려, 대륙간 초 장거리 롱디
              커플을 타겟으로 특화된 기능들을 넣었습니다.
              <br />
              <br />
            </span>
          </div>

          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">주요 기능</span>{' '}
            <span className="portfolio_text_content">
              1. 회원가입과 로그인, 비밀번호 찾기
              <br />
              2. D-Day , 함께 하는 TODO-List ( Together-Do List )
              <br />
              3. 그림 메모
              <br />
              4. firebase를 통한 채팅, 이미지 전송, notification
              <br />
              5. WebRTC를 사용한 영상통화 ( RemoteMonster API )
              <br />
              6. 일정 공유 ( google calander API )
              <br />
              7. 날씨, 위치 공유 ( weaterMap API , GeoCoder API )
              <br />
              8. 앨범, 연인 추억 타임라인
              <br />
              9. 계정 관리
              <br />
              10. 상기 내역 전부 firebase를 통한 백업 및 동기화
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소감</span>{' '}
            <span className="portfolio_text_content">
              약 2주간 Manifest 문서와 생명주기, Intent 등을 이해하고 바로
              개발을 시작했습니다.
              <br />
              하나 둘 기능을 추가하는 재미에 더욱 욕심이 났던 작품입니다. <br />
              sharedpreferences 안에 원하는 데이터를 저장하기 위해 고민하다가
              결국 직렬화라는 방법을 찾아 사용했던 기억이 납니다. <br />
              개발 막바지에 API를 처음으로 사용해봤는데, API를 잘 사용한다면
              많은 서비스를 쉽게 구현 할 수 있다는 걸 알게 되었습니다.
              <br />
              다만 DB나 네트워크에 대한 지식이 부족해서 더 많은 기능을 구현하지
              못 한 점은 아쉬움이 남습니다.
              <br />
            </span>
          </div>
        </article>
      </section>
    )
  }
}

export default Andorid
