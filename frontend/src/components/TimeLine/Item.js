import React, { Component } from 'react'
import './TimelineItem.css'
import Modal from '../Modal/Modal'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: props.item_index, //가져올 아이템 인덱스
      modalVisible: false, //모달 켜고 끌 변수
      select_ind: 0, //슬라이더로 보여줄 인덱스
      media_arr: [
        {
          active: true,
          src: 'https://unqocn.hopto.org/res/pic/empty.png',
          type: 'img',
          desc: '로딩 전 기본이미지입니다.',
          thumb_title: '',
        },
      ], //미디어를 담을 배열
      item_title: '작품 카테고리',
      item_name: '작품 제목',
      dev_term: '개발 기간',
      dev_intro: '작품 소개',
      dev_feature: '주요 기능',
      dev_review: '작품 소감',
    }
  }

  async componentDidMount() {
    if (this.props.item_index > 0) {
      // this.setState({ index: this.props.item_index })
      let new_media_arr = []
      try {
        const res = await fetch('https://unqocn-api.hopto.org/portfolio/' + this.state.index)
        //가져올 포트폴리오 아이템 index를 붙여서 요청
        const itemInfo = await res.json()
        // console.log(java)
        // console.log(java['item_media_array'])
        try {
          let item_media_arr = JSON.parse(itemInfo['item_media_array'])
          item_media_arr.forEach((element) => {
            try {
              let item_active = element['active']
              let item_src = element['src']
              let item_type = element['type']
              let item_desc = element['desc']
              let item_thumb_title = element['title']
              new_media_arr.push({
                active: item_active,
                src: item_src,
                type: item_type,
                desc: item_desc,
                thumb_title: item_thumb_title,
              })
            } catch (error) {
              console.log(error)
            }
          })
          this.setState({
            media_arr: new_media_arr,
          })
        } catch (error) {
          console.log(error)
          console.log(itemInfo['item_media_array'].substring(280, 320))
        }

        // console.log(item_media_arr)

        this.setState({
          item_title: itemInfo['item_title'],
          item_name: itemInfo['item_name'],
          dev_term: itemInfo['dev_term'],
          dev_intro: itemInfo['dev_intro'],
          dev_feature: itemInfo['dev_feature'],
          dev_review: itemInfo['dev_review'],
        })
      } catch (e) {
        console.log(e)
      }
    }
  }

  onClickThumbnail = (selected_key) => {
    if (this.state.select_ind !== selected_key) {
      //기존 선택 아이템이 아닌 다른 아이템이 클릭되었을 경우
      const { media_arr } = this.state
      this.setState({
        select_ind: selected_key,
        // 인덱스를 바꿔주고
        media_arr: media_arr.map(
          // active한 아이템이 뭔지 바꿔줌
          (item, key) =>
            key === selected_key
              ? { ...item, active: true } // 새 객체를 만들어서 기존의 값 + active만 true로 덮어씌움
              : { ...item, active: false }, // 다른 애들은 false 처리
        ),
      })
      try {
        document.querySelector('#videoPlayer').load()
      } catch (error) {
        // console.log(error)
      }
    }
    // console.log(this.state)
  }

  openModal = () => {
    this.setState({ modalVisible: true })
  }

  closeModal = () => {
    this.setState({ modalVisible: false })
  }

  render() {
    // console.log(this.state)
    let { modalVisible, item_title, item_name, dev_term, dev_intro, dev_feature, dev_review } = this.state
    // 모달창 띄울 변수 및 각종 아이템 정보 가져옴
    let selected_item = this.state.media_arr.find((item) => item.active === true)
    // 선택 아이템 찾는 과정. index로도 접근이 가능하긴 한데 일단은 두 가지 방식으로 사용중
    //메인 미디어창엔 소스 타입에 따라 다른 형태로 return해줘야함
    let main_media = () => {
      if (selected_item.type === 'img') {
        return (
          <div className="portfolio_media_main">
            <img src={selected_item.src} alt="main_img" draggable="false" onClick={() => this.openModal()} />
            {modalVisible && (
              <Modal
                visible={modalVisible}
                closable={true}
                maskClosable={true}
                src={selected_item.src}
                // 소스도 같이 넘겨줌
                onClose={() => this.closeModal()}
              />
            )}
          </div>
        )
      } else if (selected_item.type === 'video') {
        return (
          <div className="portfolio_media_main">
            <video controls autoPlay={false} id="videoPlayer" draggable="false">
              <source src={selected_item.src} type="video/mp4" />
            </video>
          </div>
        )
      } else {
        console.log('Main Media Type Error. type :', selected_item.type)
        return 'Main Media Type Error'
      }
    }
    //메인 미디어에 있는 설명 추출
    let main_desc = () => {
      if (selected_item.desc) {
        return <span dangerouslySetInnerHTML={{ __html: selected_item.desc }} />
      }
    }

    return (
      <section className="portfolio_section">
        {/* 섹션에 플렉스 적용하고 col 방향으로 진행되게 함 */}
        <div className="portfolio_title">
          {item_title}
          {/* 제목 들어갈 영역 */}
        </div>

        <article className="portfolio_text_section top_article">
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 이름</span>{' '}
            <span className="portfolio_text_content">
              <h2 dangerouslySetInnerHTML={{ __html: item_name }} />
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">개발 기간</span>{' '}
            <span className="portfolio_text_content" dangerouslySetInnerHTML={{ __html: dev_term }} />
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소개</span>{' '}
            <span className="portfolio_text_content" dangerouslySetInnerHTML={{ __html: dev_intro }} />
          </div>
        </article>

        <div className="portfolio_media_section">
          <div className="portfolio_media_wrapper">
            {main_media()}
            {/* 메인 미디어 영역 */}
            <div className="portfolio_media_thumbnail_wrapper">
              {this.state.media_arr.map((item, key) => {
                if (item.type === 'img') {
                  return (
                    <div key={key}>
                      <img
                        key={key}
                        src={item.src}
                        draggable="false"
                        alt={item.type}
                        onClick={() => this.onClickThumbnail(key)}
                        className={item.active === true ? 'active_thumbnail' : ''}
                      ></img>
                      <span>{item.thumb_title}</span>
                    </div>
                  )
                } else if (item.type === 'video') {
                  return (
                    <div key={key}>
                      <video
                        key={key}
                        draggable="false"
                        onClick={() => this.onClickThumbnail(key)}
                        className={item.active === true ? 'active_thumbnail' : ''}
                      >
                        {' '}
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <span>{item.thumb_title}</span>
                    </div>
                  )
                } else {
                  return ''
                }
              })}
            </div>{' '}
          </div>
          <div className="portfolio_media_desc">
            {main_desc()}
            {/* 메인 미디어에 있는 설명 추출 */}
          </div>
        </div>

        <article className="portfolio_text_section bottom_article">
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">주요 기능</span>{' '}
            <span className="portfolio_text_content" dangerouslySetInnerHTML={{ __html: dev_feature }} />
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소감</span>{' '}
            <span className="portfolio_text_content" dangerouslySetInnerHTML={{ __html: dev_review }} />
          </div>
        </article>
      </section>
    )
  }
}

export default Item
