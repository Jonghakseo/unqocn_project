import React, { Component } from 'react'
import './TimelineItem.css'
import Modal from '../Modal/Modal'
import BasicImage from '../../res/icon/react.svg'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: props.item_index, //가져올 아이템 인덱스
      modalVisible: false, //모달 켜고 끌 변수
      select_ind: 0, //슬라이더로 보여줄 인덱스
      media_arr: [
        { active: true, src: BasicImage, type: 'img', desc: '로딩 전 기본이미지입니다.' },
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
              new_media_arr.push({
                active: item_active,
                src: item_src,
                type: item_type,
                desc: item_desc,
              })
            } catch (error) {
              console.log(error)
            }
          })
          this.setState({
            media_arr: new_media_arr,
          })
        } catch (error) {}

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
    let {
      modalVisible,
      item_title,
      item_name,
      dev_term,
      dev_intro,
      dev_feature,
      dev_review,
    } = this.state
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
        <div className="portfolio_title">
          {item_title}
          {/* 제목 들어갈 영역 */}
        </div>

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
              <h2 dangerouslySetInnerHTML={{ __html: item_name }}></h2>
            </span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">개발 기간</span>{' '}
            <span
              className="portfolio_text_content"
              dangerouslySetInnerHTML={{ __html: dev_term }}
            ></span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소개</span>{' '}
            <span
              className="portfolio_text_content"
              dangerouslySetInnerHTML={{ __html: dev_intro }}
            ></span>
          </div>

          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">주요 기능</span>{' '}
            <span
              className="portfolio_text_content"
              dangerouslySetInnerHTML={{ __html: dev_feature }}
            ></span>
          </div>
          <div className="portfolio_text_wrapper">
            <span className="portfolio_text_title">작품 소감</span>{' '}
            <span
              className="portfolio_text_content"
              dangerouslySetInnerHTML={{ __html: dev_review }}
            ></span>
          </div>
        </article>
      </section>
    )
  }
}

export default Item
