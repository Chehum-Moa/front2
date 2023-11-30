var express = require('express');
var app = express();
var path = require('path');

// 정적 파일을 제공할 디렉토리 설정 (여기서는 'public' 폴더로 설정)
app.use(express.static('public'));

// 루트 URL('/')로 접속했을 때 'index.html'을 렌더링
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'MapPage.html'));
});

// 서버를 9999 포트에서 실행
app.listen(9999, function() {
    console.log('Server is running on port 9999');
});
