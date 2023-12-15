var express = require('express');
var app = express();
var path = require('path');

// 'public/Screens' 폴더를 정적 파일 디렉토리로 설정
app.use(express.static(path.join(__dirname, 'public', 'Screens'), { index: false }));
app.use('/data', express.static('data'));
// 루트 URL('/')로 접속했을 때 'MapPage.html'을 렌더링
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'Screens', 'MapPage.html'));
});

// 서버를 9999 포트에서 실행
app.listen(9999, function() {
    console.log('Server is running on port 9999');
});
