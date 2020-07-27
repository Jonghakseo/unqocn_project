//frontend/src/app.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    news: [],
    // 뉴스 데이터 상태를 저장할 변수 필요
    today: new Date(),
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://unqocn-api.hopto.org/news/');
      //news 크롤링 전체 목록 반환
      const newses = await res.json();
      var news = [];
      newses.forEach((element) => {
        try {
          var id = element['id'];
          var date = element['date'];
          var naver = JSON.parse(element['naver']);
          var zdnet = JSON.parse(element['zdnet']);
          var sbs = JSON.parse(element['sbs']);
          var kbs = JSON.parse(element['kbs']);
          var jtbc = JSON.parse(element['jtbc']);
          var tech = JSON.parse(element['tech']);
          news.push({
            id: id,
            date: date,
            naver: naver,
            zdnet: zdnet,
            sbs: sbs,
            kbs: kbs,
            jtbc: jtbc,
            tech: tech,
          });
        } catch (error) {
          console.log(error);
        }
      });
      console.log(newses);
      console.log(news);
      this.setState({
        news,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.news.map((item) => (
          <div key={item.id} id={item.id}>
            <h2>{item.date} 오늘의 뉴스</h2>
            <span>
              <h3>네이버 IT 뉴스</h3>
              {item.naver.titles.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
              <h3>Zdnet IT 뉴스</h3>
              {item.zdnet.titles.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
              <h3>SBS 뉴스</h3>
              {item.sbs.titles.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
              <h3>KBS 뉴스</h3>
              {item.kbs.titles.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
              <h3>JTBC 뉴스</h3>
              {item.jtbc.titles.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
              <h3>Tech Crunch IT 뉴스</h3>
              {item.tech.titles.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
