import React, { Component } from 'react'
// import './Android.css'
import './TimelineItem.css'
import Modal from '../Modal/Modal'
import AndroidImage1 from '../../res/pic/android/home.PNG'
import AndroidImage2 from '../../res/pic/android/memo.PNG'
import AndroidImage3 from '../../res/pic/android/memolist.PNG'
import AndroidImage4 from '../../res/pic/android/memodetail.PNG'
import AndroidImage5 from '../../res/pic/android/chat.PNG'
import AndroidImage6 from '../../res/pic/android/chatroom.PNG'
import AndroidImage7 from '../../res/pic/android/alret.PNG'
import AndroidImage8 from '../../res/pic/android/videocall.PNG'
import AndroidImage9 from '../../res/pic/android/dday.PNG'
import AndroidImage10 from '../../res/pic/android/togedo.PNG'
import AndroidImage11 from '../../res/pic/android/gall.PNG'
import AndroidImage12 from '../../res/pic/android/timeline.PNG'
import AndroidImage13 from '../../res/pic/android/setting.PNG'
import AndroidImage14 from '../../res/pic/android/setting_account.PNG'
// import AndroidImage15 from '../../res/pic/android/memolist.png'
// import AndroidImage16 from '../../res/pic/android/memodetail.png'
import AndroidVideo from '../../res/videos/android.mp4'
// import AndroidVideo2 from '../../res/videos/android2.mp4'

class Andorid extends Component {
  //   constructor(props) {
  //     super(props)
  //   }

  state = {
    modalVisible: false, //모달 켜고 끌 변수
    select_ind: 0, //슬라이더로 보여줄 인덱스
    media_arr: [
      { active: true, src: AndroidVideo, type: 'video', desc: '작품 시연 영상입니다.' },
      {
        active: false,
        src: AndroidImage1,
        type: 'img',
        desc:
          '로그인시 보이는 홈 화면입니다. <br/><br/>' +
          '디데이, 투게더 두, 메모, 추억의 전당(타임라인), 일정관리 등 다양한 기능에 접근 할 수 있습니다.',
      },
      {
        active: false,
        src: AndroidImage2,
        type: 'img',
        desc: "홈 화면에서 '+' 버튼을 눌러 메모를 그릴 수 있습니다.",
      },
      {
        active: false,
        src: AndroidImage3,
        type: 'img',
        desc:
          '이전에 그렸던 메모들을 볼 수 있는 메모 목록입니다.<br/><br/>' +
          '메모 썸네일과 작성일시를 확인 할 수 있습니다.',
      },
      {
        active: false,
        src: AndroidImage4,
        type: 'img',
        desc: '작성한 메모는 다른 사람들과 공유하거나, 즐겨찾기를 통해 모아서 볼 수 있습니다.',
      },
      {
        active: false,
        src: AndroidImage5,
        type: 'img',
        desc:
          '채팅 탭입니다.<br/><br/>' +
          '상단의 채팅창 버튼을 통해 채팅을 시작할 수 있고, 채팅방에서 나눈 대화내용을 감정분석(Google Natural Language API)하여 애정도 확인이 가능합니다.' +
          '<br/><br/>하단에서 상대의 이전, 현재, 다음 스케줄 확인이 가능합니다.',
      },
      {
        active: false,
        src: AndroidImage6,
        type: 'img',
        desc:
          'firebase를 사용한 1:1 채팅방입니다.<br/><br/>' +
          '사진전송(갤러리, 직접촬영)이 가능하며, WebRTC(remote monster API)를 이용한 영상통화도 가능합니다.',
      },
      {
        active: false,
        src: AndroidImage7,
        type: 'img',
        desc:
          'firebase를 사용한 notification입니다.<br/><br/>' +
          '채팅 수신, D-Day알림 등에 사용됩니다.',
      },
      {
        active: false,
        src: AndroidImage9,
        type: 'img',
        desc:
          '각종 기념일(D-Day)을 관리하는 액티비티입니다. <br/><br/>' +
          ' 연애 시작일, 상대방의 생일은 별도로 관리할 수 있습니다.<br/>' +
          '공유버튼을 통해 어플 내 채팅방에 기념일을 공유할 수 있습니다.<br/>' +
          '등록된 기념일들은 남은 D-day와 함께 홈 화면에 순환노출됩니다.',
      },
      {
        active: false,
        src: AndroidImage10,
        type: 'img',
        desc:
          '함께 하는 TODO list인 Together-Do list 등록화면입니다.<br/><br/>' +
          '제목과 메모, 카테고리 설정이 가능합니다. 완료된 Together-Do list는 별도로 관리됩니다.',
      },
      {
        active: false,
        src: AndroidImage11,
        type: 'img',
        desc:
          '앨범 탭입니다.<br/><br/>' +
          '기기 내 이미지를 가져오거나, 촬영을 통해 사진을 추가 할 수 있습니다.<br/>' +
          '채팅창에서 주고받은 이미지는 자동으로 이곳에 추가됩니다.<br/>' +
          '사진의 수정과 삭제, 공유가 가능하며 드래그를 통한 위치변경도 지원합니다.',
      },
      {
        active: false,
        src: AndroidImage12,
        type: 'img',
        desc:
          '추억의 전당이라고 이름 붙인 타임라인입니다.<br/><br/>' +
          '어플 내에서 함께 등록한 메모, D-day, Together-Do, 사진 등 다양한 요소를 기록으로 남겨 시간순으로 확인이 가능합니다.<br/>' +
          '하단에서는 재미로 보는 연애 통계를 통해 연애 기간 중 각종 활동 빈도와 평균 애정도 점수를 제공합니다.',
      },
      {
        active: false,
        src: AndroidImage13,
        type: 'img',
        desc: '세팅 탭입니다.<br/><br/>' + '각종 세팅 메뉴들과 구글 배너광고가 위치하고 있습니다.',
      },
      {
        active: false,
        src: AndroidImage14,
        type: 'img',
        desc:
          '세팅 탭 내 계정관리입니다.<br/><br/>' +
          '내 프로필 변경 및 연인 등록 기능을 제공하고 있습니다. <br/>' +
          '첫 로그인시 상대의 아이디를 찾아 연인으로 등록할 수 있습니다.',
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
        <div className="portfolio_title">Android {/* 제목 들어갈 영역 */}</div>

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
              <h2>학수고대</h2>
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">개발 기간</span>{' '}
            <span className="portfolio_text_content">
              2019. 11. 25 ~ 2019. 12. 31 (5주)
              <br />
              <br />
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소개</span>{' '}
            <span className="portfolio_text_content">
              비트윈 같은 커플 전용 앱입니다.
              <br />
              장거리 연애(롱디)를 했던 경험을 살려, 대륙 간 초장거리 커플에게 특화된 기능들을
              넣었습니다.
              <br />
              <br />
            </span>
          </div>

          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">주요 기능</span>{' '}
            <span className="portfolio_text_content">
              1. 회원가입과 로그인, 비밀번호 찾기
              <br />
              2. D-Day , 함께 하는 TODO-List (Together-Do List)
              <br />
              3. 그림 메모
              <br />
              4. firebase를 통한 채팅, 이미지 전송, notification
              <br />
              5. WebRTC를 사용한 영상통화 (Remote Monster API)
              <br />
              6. Google Calander API를 사용한 일정 공유
              <br />
              7. 날씨, 위치 공유 (weatherMap API , GeoCoder API)
              <br />
              8. 앨범, 연인 추억 타임라인
              <br />
              9. 계정 관리
              <br />
              10. 상기 내역 전부 firebase를 통한 백업 및 동기화
              <br />
              11. Google Palette API를 사용한 홈 탭 테마 컬러 적용
              <br />
              <br />
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소감</span>{' '}
            <span className="portfolio_text_content">
              약 2주간 Manifest 문서와 생명주기, Intent 등을 이해하고 바로 개발을 시작했습니다.
              <br />
              하나둘 기능을 추가하는 재미에 더욱 욕심이 났던 작품입니다. <br />
              key와 value로 이루어진 sharedpreferences 안에 제가 원하는 형태로 데이터를 저장하려고
              고민하다가 결국 직렬화라는 방법을 찾아 사용했던 기억이 납니다. <br />
              <br />
              개발 막바지에 API를 처음으로 사용해봤는데, API를 잘 사용한다면 많은 서비스를 쉽게 구현
              할 수 있다는 걸 알게 되었습니다. 다만, 이 당시 DB나 네트워크에 대한 지식이 부족해 더
              많은 기능을 구현하지 못한 점은 아쉬움으로 남습니다.
              <br />
              <br />
            </span>
          </div>
        </article>
      </section>
    )
  }
}

export default Andorid
