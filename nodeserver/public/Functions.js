// 사용자에게 위도와 경도를 입력받는 함수
function getCoordinates() {
    // prompt() 함수를 사용하여 사용자로부터 위도와 경도를 입력받습니다.
    var latitude = prompt("위도를 입력하세요:");
    var longitude = prompt("경도를 입력하세요:");

    // 입력받은 위도와 경도를 숫자형으로 변환합니다. (예외 처리는 별도로 필요할 수 있습니다)
    var lat = parseFloat(latitude);
    var lng = parseFloat(longitude);

    // 변환된 숫자형 위도와 경도를 객체에 저장합니다.
    var coordinates = {
        latitude: lat,
        longitude: lng
    };

    // 이 객체를 반환합니다.
    return coordinates;
}

// 함수를 호출하고 결과를 변수에 저장합니다.
var userCoordinates = getCoordinates();

// 결과를 콘솔에 출력합니다.
console.log("입력받은 좌표:", userCoordinates);
