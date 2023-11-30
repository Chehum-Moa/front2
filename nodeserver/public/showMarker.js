
function showOverlay(index) {
    // 버튼에 해당하는 좌표를 가져옵니다.
    const coords = getCoordinatesForButtons(index); 

    // CustomOverlay 인스턴스를 생성합니다.
    var overlay = new CustomOverlay({
        map: map,
        position: new naver.maps.LatLng(coords.latitude, coords.longitude)
    });

    // 오버레이를 지도에 표시합니다.
    overlay.setMap(map);
}

// 버튼 생성 및 이벤트 핸들러 설정
const buttonsContainer = document.getElementById('buttons-container');

for (let i = 0; i < 20; i++) {
    let button = document.createElement('button');
    button.innerText = 'Show Overlay ' + i;
    button.id = 'button' + i;
    button.onclick = function() { showOverlay(i); };
    buttonsContainer.appendChild(button);
}


//이 코드의 주 목적은 사용자가 버튼을 클릭할 때 지도 위에 특정 위치에 오버레이를 동적으로 생성하고 표시하는 것입니다. 