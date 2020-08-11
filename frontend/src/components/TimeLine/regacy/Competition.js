import React, { Component } from 'react'
// import './Android.css'
import './TimelineItem.css'
import Modal from '../../Modal/Modal'
import CompImage0 from '../../res/pic/comp/comp (0).png'
import CompImage1 from '../../res/pic/comp/comp (1).png'
import CompImage2 from '../../res/pic/comp/comp (2).png'
import CompImage3 from '../../res/pic/comp/comp (3).png'
import CompImage4 from '../../res/pic/comp/comp (4).png'
import CompImage5 from '../../res/pic/comp/comp (5).png'
import CompImage6 from '../../res/pic/comp/comp (6).png'
import CompImage7 from '../../res/pic/comp/comp (7).png'
import CompImage8 from '../../res/pic/comp/comp (8).png'
import CompImage9 from '../../res/pic/comp/comp (9).png'
// import CompImage1 from '../../res/pic/comp/comp (10).png'

class Competition extends Component {
  //   constructor(props) {
  //     super(props)
  //   }

  state = {
    modalVisible: false, //모달 켜고 끌 변수
    select_ind: 0, //슬라이더로 보여줄 인덱스
    media_arr: [
      // { active: true, src: AndroidVideo, type: 'video', desc: '설명입니다. <br> dd\ndd' },
      {
        active: true,
        src: CompImage0,
        type: 'img',
        desc:
          '창업 사업화 상품명과 창업 개요 페이지입니다.<br>' +
          ' 사업 아이템의 착안점과 사용하게 될 특허청 공공 데이터, 아이템의 타겟층을 소개하고 있습니다.',
      },
      {
        active: false,
        src: CompImage2,
        type: 'img',
        desc:
          '사업비 예산을 추산하였습니다.<br>' +
          '개발 예산 중 인건비는 한국 소프트웨어 산업 협회 평균 노임단가로 산정하였습니다.',
      },

      {
        active: false,
        src: CompImage3,
        type: 'img',
        desc:
          '창업 아이템의 자세한 설명 페이지입니다.<br>' +
          '서비스에서 제공되는 기능과 그 원리에 대해 설명하고 있습니다.<br>' +
          '해당 페이지에서는 시대별 대표 디자인과 대표 디자인 추출이 어떻게 이뤄지는지 소개하고 있습니다.',
      },
      {
        active: false,
        src: CompImage4,
        type: 'img',
        desc:
          '창업 아이템의 자세한 설명 페이지입니다.<br>' +
          '서비스에서 제공되는 기능과 그 원리에 대해 설명하고 있습니다.<br>' +
          '해당 페이지에서는 디자인권 상세 검색과, 디자인권 조회 페이지에서 제공하는 기능들에 대해 소개하고 있습니다.',
      },
      {
        active: false,
        src: CompImage5,
        type: 'img',
        desc:
          '창업 아이템의 자세한 설명 페이지입니다.<br>' +
          '서비스에서 제공되는 기능과 그 원리에 대해 설명하고 있습니다.<br>' +
          '해당 페이지에서는 유저의 스케치를 바탕으로 유사도면을 제공해주는 서비스에 대해 그 원리와 작동 결과에 대해 소개하고 있습니다.',
      },
      {
        active: false,
        src: CompImage6,
        type: 'img',
        desc:
          '창업 아이템의 자세한 설명 페이지입니다.<br>' +
          "아직 구현되진 않았지만, 계획에 있는 '디자인권 동향 분석 보고서'에 대해 설명하고 있습니다.",
      },
      {
        active: false,
        src: CompImage7,
        type: 'img',
        desc:
          '창업 아이템의 자세한 설명 페이지입니다.<br>' +
          "아직 구현되진 않았지만, 계획에 있는 '디자인권 동향 분석 보고서'에 대해 설명하고 있습니다.",
      },

      {
        active: false,
        src: CompImage8,
        type: 'img',
        desc:
          '유사 서비스에 비해 가지고 있는 차별성과 독창성을 드러내는 페이지입니다.<br>' +
          '제품 디자인을 시대별로 한 눈에 보고 통찰을 얻을 수 있는 서비스가 아직 없다는 점, 모바일 환경에 최적화된 Native App이라는 점을 어필하였습니다.',
      },
      {
        active: false,
        src: CompImage9,
        type: 'img',
        desc:
          '창업 아이템의 구현 계획과 홍보 및 판매 전략, 수익성에 대해 설명하는 페이지입니다.<br>' +
          '서비스 구축 이후에는 유지보수 비용이 적게 발생한다는 내용을 근거로 하여 광고수익(배너광고, 보상형 광고)을 수익모델로 결정하였습니다.',
      },
      {
        active: false,
        src: CompImage1,
        type: 'img',
        desc:
          '창업 아이템의 사업화 계획과 사업 추진 일정을 소개하는 페이지입니다.<br>' +
          "사업 추진 일정은 6개월로 잡고, 작업 내용은 '서비스 기획' , '디자인' , '개발' , '테스트' , '배포' , '마케팅' 으로 세분화 하여 일정을 산정하였습니다 .",
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
        <div className="portfolio_title">특허청 창업경진대회 {/* 제목 들어갈 영역 */}</div>

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
              <h2>시대의 디자인 SIDI</h2>
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">개발 기간</span>{' '}
            <span className="portfolio_text_content">
              2020. 3. 21 ~ 2020. 4. 24 (5주)
              <br />
              <br />
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소개</span>{' '}
            <span className="portfolio_text_content">
              Si-Di(시대의 디자인) 작품은 제품 디자이너 및 디자인 종사자들에게 시대별 제품 디자인의
              변화 추세와 흐름을 보여줌으로써, 디자인 영감과 통찰을 제공하는 서비스입니다.
              <br />
              <br />
            </span>
          </div>

          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">주요 기능</span>{' '}
            <span className="portfolio_text_content">
              1. 도안 유사도를 파악하여 시대별 대표 디자인 및 대표 형태 추출 후 제공 (Haralick)
              <br />
              2. 제품 카테고리별 형태 태그 시대별 제공
              <br />
              3. 특허청에 등록된 디자인권 상세검색 (디자인 공보 API, 해외 디자인 API)
              <br />
              4. 디자인권 도면을 기반으로 첨삭 스케치 기능
              <br />
              5. 유저 스케치를 통해 유사 디자인권 도면 검색
              <br />
              <br />
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소감</span>{' '}
            <span className="portfolio_text_content">
              <b>결과적으로 해당 대회에서 입상하지 못했습니다. </b>
              <br />
              공공데이터 창업 경진대회는 사업계획서와 아이디어 제출 대회이지만, 저희 팀은 시제품을
              제작하여 사업계획서와 함께 제출하였습니다. <br />
              대회는 저를 포함하여 총 2명으로 참여하였으며 프론트엔드 / 백엔드로 역할을 분담하여
              진행하였습니다. <br />
              함께하는 팀원은 프론트엔드를 담당하여 어플의 UI/UX, 클라이언트에서의
              서버요청(Retrofit)등을 담당하였습니다. <br />
              저는 백엔드에서 다음과 같은 업무를 담당하였습니다.
              <br />
              (시제품에 사용된 도면 이미지 데이터의 갯수는 약 11,000개)
              <br />
              <br /> ● python을 사용한 이미지 전처리 (Open CV)
              <br /> ● 유사도 추출을 통한 대표이미지 추출 (Haralick)
              <br /> ● 스케치 분석 후 유사 도면 제공 서비스 (pHash)
              {/* <br /> ● 시제품 제작을 위한 데이터크롤링 (MySQL) */}
              <br /> ● DB구축 (MySQL)
              <br />
              <br />
              상기 서버 작업은 모두 AWS에서 진행했으며, 협업툴은 Slack과 github를 사용하였습니다.
              <br />이 시기에 처음으로 python을 접해보았는데, 직관적인 문법과 높은 생산성에 큰
              감명을 받았습니다. python의 단점에 대해서 언급되는 부분도 있지만, 높은 생산성이 많은
              단점들을 덮고 남을 장점이라는 인상을 받았습니다.
              <br />
              <br />
              기존 대회 입상작과 비교하여 기술적인 측면에서 크게 떨어진다고 생각하진 않지만, 평가
              기준에 맞는 역량, 적정성, 독창성, 기술성, 사업성을 갖추고 해당 기준을 사업 계획서에 잘
              녹여내지 못한 부분이 심사에 영향을 미쳤다고 생각합니다. <br />이 점이 저의 역량
              부족으로 아쉬움으로 남습니다.
              <br />
              <br />
              대회 일정이 촉박하여 이미지 처리 알고리즘에 대한 더 깊은 이해와 공부가 부족했던 점
              역시 아쉬움으로 남습니다. 소요 시간의 문제와 데이터 분석 역량 부족으로 미처 사용하지
              못했던 SIFT 알고리즘 역시 기회가 된다면 꼭 제대로 공부해서 사용해보고 싶습니다.
              <br />
              <br />
            </span>
          </div>
        </article>
      </section>
    )
  }
}

export default Competition
