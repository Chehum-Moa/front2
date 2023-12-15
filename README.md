# 체험단 모아


### 프로젝트 소개

체험단 모아'는 블로그 체험단을 위한 통합 정보 플랫폼입니다. 블로그 후기 작성을 대가로 상품을 제공받는 체험단들에게 다양한 사이트에 분산된 체험단 정보를 한 곳에서 쉽게 접할 수 있도록 도와줍니다.

### 기술 스택 
## 기술 스택

![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Selenium](https://img.shields.io/badge/selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)




### 🧑‍🤝‍🧑팀원

김혜윤
김현지



###  핵심 기능

-동적 웹 크롤링: Python과 Selenium 라이브러리를 활용하여 여러 블로그 체험단 사이트에 흩어진 정보를 중앙 집중식으로 수집합니다.

-지도 시각화화: 수집된 체험단 정보를 네이버 지도 API를 사용하여 지도 위에 마커로 표시함으로써 사용자가 한 눈에 위치 정보를 파악할 수 있게 합니다.

-서버 및 데이터베이스 관리: Node.js의 Express 모듈을 사용하여 로컬 서버를 구축하고, 크롤링된 데이터 및 사용자 정보를 MySQL 데이터베이스에 저장합니다.

-프론트엔드 개발: HTML, CSS, JavaScript를 사용하여 사용자 친화적인 웹 페이지를 디자인하고 구현합니다. 자바스크립트로 캘린더 기능을 개발하여 사용자가 체험 가능한 날짜를 손쉽게 확인할 수 있습니다.

### 구현하지 못한 부분 

Mysql 모듈을 설치하였으나  , 크롤링한 정보를 SQL 테이블에 저장하여 
Node server에서 사용하지 못함.  
예정은 nodeserver에 json파일로 저장한 후 화면에서 보여주려고 하였으나 , 
mysql연결을 아직 구현하지 못하여 프로젝트 폴더 내에 파일로 저장된 Datas/data.json 파일에 있는 식당 정보를 사용함.  (해당파일은 crawling.py 실행을 통해 생성하였습니다 . )

받아온 식당의 주소를 정제하여 위 경도로 변환한 뒤 네이버 지도에 마크로 띄우려고 하였으나 , 
주소 데이터를 따로 분리하지 못하여 마크를 띄우지 못하였습니다 . 



### 디렉토리 구조
```
nodeserver
├── node_modules 
├── public
│ ├── Screens
│ │ ├── index.html // 식당목록이 저장된 화면 
│ │ ├── InfoPage.html
│ │ ├── Login_SignPage.html
│ │ ├── MapPage.html //  http://localhost:9999/ 실행시 첫번째로 나오는 화면 
│ │ └── Mypage.html
│ ├── Functions
│ │ ├── getCoordinatesForButtons.js // navermap 관련 함수 주소를 위경도로 변환한 다음 해당 위경도를 저장하는 함수 
│ │ └── showMarker.js //마커 오버레이를 지도에 표시
│ └── Style
│ └── style.css
├── crwaling.py // 블로그 체험단 사이트를 동적크롤링 
├── index.js
├── package-lock.json
├── package.json
├── data.json // crawling.py를 실행하면 여기에 식당정보가 json으로 저장됨 .
└── README.md
```
### 프로젝트 실행 전 필요항목 
-Chrome webdriver 설치 


### 사용 예시 및 실행화면 
![ver4](https://github.com/Chehum-Moa/front2/assets/38944609/2b543394-e4a0-4949-b3ab-5d4161680508)


