# 체험단 모아

**블로그 체험단**들을 위한 사이트- 여러 개로 분산되어있는 
블로그 체험단사이트 정보를 모아서 한 사이트에서 볼 수 있게 합니다.
---
#### 사용기술

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/selenium-43B02A?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=html5&logoColor=white">

---

#### 🧑‍🤝‍🧑팀원

김혜윤
김현지

---

#### 기능 
-여러 사이트에 분산된  블로그 체험단 정보 모아보기(Python Selenium 라이브러리를 이용한 동적 웹 크롤링) 
-모아진 체험단 정보를 네이버지도에 마커를 이용하여 한번에 나타내기 (네이버 지도  API사용)
- Node.js 의 express 모듈을 이용한 로컬 서버 구축 및 크롤링한 정보과 개인정보 저장하기
- html , css, javascript를 이용한 페이지 구현
세부 설명: 자바스크립트를 이용해 캘린더 기능을 구현함으로써 사용자가 가게의 체험일자를 보다 쉽게 확인할 수 있도록 함.
node.js 서버 열어서 MySQL데이터 베이스 연결하기
 express서버를 설정하고 mysql2 모듈을 이용하여 데이터를 해당 서버에 띄움.

---
#### 디렉토리 구조
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
├── .vscode
├── crwaling.py // 블로그 체험단 사이트를 동적크롤링 
├── index.js
├── package-lock.json
├── package.json
├── data.json // crawling.py를 실행하면 여기에 식당정보가 json으로 저장됨 .
└── README.md
```
#### 프로젝트 실행 전 필요항목 

-Chrome webdriver 설치 


#### 사용 예시 및 실행화면 
![ver4](https://github.com/Chehum-Moa/front2/assets/38944609/2b543394-e4a0-4949-b3ab-5d4161680508)


