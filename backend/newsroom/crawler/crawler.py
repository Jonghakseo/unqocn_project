#!/home/django/unqocn_venv/bin/python
from datetime import datetime, timedelta
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from googletrans import Translator
from time import sleep
# https://wkdtjsgur100.github.io/ubuntu-selenium-python/ 여기 보고 셀레니움 + 파폭 드라이버 + xvfb 설정
import json
import os
import sys

# Python이 실행될 때 DJANGO_SETTINGS_MODULE이라는 환경 변수에 현재 프로젝트의 settings.py파일 경로를 등록합니다.
sys.path.append("/home/django/backend")
# print(sys.path)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "unqocninitapi.settings")
# 이제 장고를 가져와 장고 프로젝트를 사용할 수 있도록 환경을 만듭니다.
import django

django.setup()

from newsroom.models import CrawlingData


# 경로를 django 로 바꿨기 때문에 import 경로도 바뀜
# 에러는 무시해도 됨


def get_naver_news():
    news_data = {'titles': []}
    # 뉴스 데이터 저장할 object 생성
    # 제목만 저장할 titles list 생성

    options = Options()
    options.headless = True
    # options.add_argument('--no-sandbox')
    driver = webdriver.Firefox(executable_path=r"/home/django/unqocn_venv/bin/geckodriver", options=options)

    driver.implicitly_wait(10)
    driver.maximize_window()

    url = "https://news.naver.com/main/main.nhn?mode=LSD&mid=shm&sid1=105"
    driver.get(url)
    # sleep(1)
    # news_data['html_all'] = driver.page_source
    news_data['html_all'] = '임시 삭제'
    # html 통으로 저장할 부분
    news_data['css'] = '아직 없음'
    # css저장할 부분
    news_data['section'] = '아직 없음'
    # 섹션 저장할 부분

    search = driver.find_elements_by_css_selector("#right\.ranking_contents > ul > li > a")
    for item in search:
        news_data['titles'].append(item.text)

    #
    search = driver.find_elements_by_css_selector("div._persist > div > div > div.cluster_body > ul > li > div > a")
    for item in search:
        news_data['titles'].append(item.text)

    driver.close()
    # return news_data
    driver.quit()
    print("naver-done")
    return json.dumps(news_data, ensure_ascii=False, indent=4)


def get_kbs_news():
    news_data = {'titles': []}
    # 뉴스 데이터 저장할 object 생성
    # 제목만 저장할 titles list 생성

    options = Options()
    options.headless = True
    # options.add_argument('--no-sandbox')
    driver = webdriver.Firefox(executable_path=r"/home/django/unqocn_venv/bin/geckodriver", options=options)

    driver.implicitly_wait(10)
    driver.maximize_window()

    url = "http://news.kbs.co.kr/vod/program.do?bcd=0001"
    driver.get(url)
    # sleep(1)
    # news_data['html_all'] = driver.page_source
    news_data['html_all'] = '임시 삭제'
    # html 통으로 저장할 부분
    news_data['css'] = '아직 없음'
    # css저장할 부분
    news_data['section'] = '아직 없음'
    # 섹션 저장할 부분

    search = driver.find_elements_by_css_selector("#thumbnailNewsList > li")
    for item in search:
        title = item.find_element_by_css_selector("a > span.desc > em")
        # print(title.text)
        if title.text == "[뉴스9 헤드라인]":
            url = item.find_element_by_tag_name("a").get_attribute("href")
            driver.get(url)
            sleep(0.5)
            content = driver.find_element_by_id("cont_newstext").text
            contents = content.split('\n')
            for line in contents:
                news_data['titles'].append(line)
            # print(content)
            break

    driver.close()
    # return news_data
    driver.quit()
    print("kbs-done")
    return json.dumps(news_data, ensure_ascii=False, indent=4)


def get_jtbc_news():
    news_data = {'titles': []}
    # 뉴스 데이터 저장할 object 생성
    # 제목만 저장할 titles list 생성

    options = Options()
    options.headless = True
    # options.add_argument('--no-sandbox')
    driver = webdriver.Firefox(executable_path=r"/home/django/unqocn_venv/bin/geckodriver", options=options)

    driver.implicitly_wait(10)
    driver.maximize_window()

    url = "http://news.jtbc.joins.com/Replay/news_replay.aspx"
    driver.get(url)
    # sleep(1)
    # news_data['html_all'] = driver.page_source
    news_data['html_all'] = '임시 삭제'
    # html 통으로 저장할 부분
    news_data['css'] = '아직 없음'
    # css저장할 부분
    news_data['section'] = '아직 없음'
    # 섹션 저장할 부분

    search = driver.find_elements_by_css_selector("#form1 > div > div.review_list > div > ul > li > div.rt > dl > dt")
    for item in search:
        title = item.text
        if title == "오늘의 주요뉴스":
            url = item.find_element_by_tag_name("a").get_attribute("href")
            # print(url)
            driver.get(url)
            sleep(0.75)
            content = driver.find_element_by_css_selector("#articlebody").find_element_by_class_name(
                "article_content").text
            contents = content.split('\n')
            for line in contents:
                news_data['titles'].append(line)
            # news_data['titles'].append(content)
            # print(content)
            break

    driver.close()
    # return news_data
    driver.quit()
    print("jtbc-done")
    return json.dumps(news_data, ensure_ascii=False, indent=4)


def get_sbs_news():
    news_data = {'titles': []}
    # 뉴스 데이터 저장할 object 생성
    # 제목만 저장할 titles list 생성

    options = Options()
    options.headless = True
    # options.add_argument('--no-sandbox')
    driver = webdriver.Firefox(executable_path=r"/home/django/unqocn_venv/bin/geckodriver", options=options)

    driver.implicitly_wait(10)
    driver.maximize_window()

    url = "https://news.sbs.co.kr/news/programMain.do?prog_cd=R1"
    driver.get(url)
    # sleep(1)
    # news_data['html_all'] = driver.page_source
    news_data['html_all'] = '임시 삭제'
    # html 통으로 저장할 부분
    news_data['css'] = '아직 없음'
    # css저장할 부분
    news_data['section'] = '아직 없음'
    # 섹션 저장할 부분

    search = driver.find_elements_by_css_selector("#container > div > div.snprg_list_w.w_replay_corner > ul")
    for item in search:
        itemBox = item.find_element_by_css_selector("div > a ")
        title = itemBox.find_element_by_css_selector("strong > span").text
        # print(title)
        if title == "오늘의 주요뉴스":
            url = itemBox.get_attribute("href")
            # print(url)
            driver.get(url)
            sleep(0.5)
            content = driver.find_element_by_css_selector(
                "#container > div.w_inner > div.w_article > div.w_article_cont > div > div.article_cont_area > div.main_text > div").text
            # news_data['titles'].append(content)
            contents = content.split('\n')
            for line in contents:
                news_data['titles'].append(line)
            # print(content)
            break

    driver.close()
    # return news_data
    driver.quit()
    print("sbs-done")
    return json.dumps(news_data, ensure_ascii=False, indent=4)


def get_zdnet_news():
    news_data = {'titles': []}
    # 뉴스 데이터 저장할 object 생성
    # 제목만 저장할 titles list 생성

    options = Options()
    options.headless = True
    # options.add_argument('--no-sandbox')
    driver = webdriver.Firefox(executable_path=r"/home/django/unqocn_venv/bin/geckodriver", options=options)

    driver.implicitly_wait(10)
    driver.maximize_window()

    url = "https://www.zdnet.co.kr/news/?lstcode=0000&page=1"
    driver.get(url)
    # sleep(1)
    # news_data['html_all'] = driver.page_source
    news_data['html_all'] = '임시 삭제'
    # html 통으로 저장할 부분
    news_data['css'] = '아직 없음'
    # css저장할 부분
    news_data['section'] = '아직 없음'
    # 섹션 저장할 부분

    search = driver.find_elements_by_css_selector('body > div.contentWrapper > div > div.left_cont > section > div')
    for item in search:
        title = item.find_element_by_class_name("assetText").find_element_by_tag_name("a").find_element_by_tag_name(
            "h3").text
        news_data['titles'].append(title)

    driver.close()
    # return news_data
    driver.quit()
    print("zdnet-done")
    return json.dumps(news_data, ensure_ascii=False, indent=4)


def get_tech_news():
    news_data = {'titles': []}
    # 뉴스 데이터 저장할 object 생성
    # 제목만 저장할 titles list 생성

    options = Options()
    options.headless = True
    # options.add_argument('--no-sandbox')
    driver = webdriver.Firefox(executable_path=r"/home/django/unqocn_venv/bin/geckodriver", options=options)

    driver.implicitly_wait(10)
    driver.maximize_window()

    url = "https://techcrunch.com/startups/"
    driver.get(url)
    # sleep(1)
    # news_data['html_all'] = driver.page_source
    news_data['html_all'] = '임시 삭제'
    # html 통으로 저장할 부분
    news_data['css'] = '아직 없음'
    # css저장할 부분
    news_data['section'] = '아직 없음'
    # 섹션 저장할 부분

    today = datetime.now()
    yest_day = str(today + timedelta(days=-1))[0:10]
    to_day = str(today + timedelta(days=-0))[0:10]
    trans = Translator()

    search = driver.find_elements_by_css_selector('#tc-main-content > div > div > div > article')
    for item in search:
        itemTime = item.find_element_by_css_selector("header > div.post-block__meta > div > div > time")
        itemDate = itemTime.get_attribute("datetime")[0:10]
        if yest_day == itemDate or to_day == itemDate:
            title = item.find_element_by_css_selector("header > h2 > a").text
            trans_result = trans.translate(title, dest="ko", src="en")
            # print(trans_result)
            trans_title = trans_result.text
            # print(trans_title)
            news_data['titles'].append(title + "\n" + "[" + trans_title + "]")

    driver.close()
    # return news_data
    driver.quit()
    print("tech-done")
    return json.dumps(news_data, ensure_ascii=False, indent=4)


# 이 명령어는 이 파일이 import가 아닌 python에서 직접 실행할 경우에만 아래 코드가 동작하도록 합니다.
if __name__ == '__main__':
    naver_news = get_naver_news()
    kbs_news = get_kbs_news()
    jtbc_news = get_jtbc_news()
    sbs_news = get_sbs_news()
    zdnet_news = get_zdnet_news()
    tech_news = get_tech_news()

    # CrawlingData.saveNaver(CrawlingData, news_data)
    CrawlingData(naver=naver_news,
                 kbs=kbs_news,
                 jtbc=jtbc_news,
                 sbs=sbs_news,
                 zdnet=zdnet_news,
                 tech=tech_news).save()
