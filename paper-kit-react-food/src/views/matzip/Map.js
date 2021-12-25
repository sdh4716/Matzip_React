/*global kakao */
import React, { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);
  

  const mapscript = () => {

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(35.155882249721735,129.05932711735915), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.155882249721735,129.05932711735915); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding:5px;">사계절 식당<br><a href="https://map.kakao.com/link/map/사계절 식당,35.155882249721735,129.05932711735915" style="color:blue" target="_blank">큰지도보기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.155882249721735,129.05932711735915); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 
    
    map.setDraggable(false);
    map.setZoomable(false);

  }; //function map
  

  return <div className="map" id="map" style={{ width: "450px", height: "400px", margin:"auto" }}></div>
}