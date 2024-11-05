//페이지 로드 이벤트
window.addEventListener("load", () => {
  //클릭할 모든 버튼 요소와 gnb요소를 변수에 저장
 const btn = document.querySelector(".menu-toggle-btn");
 const gnb = document.querySelector(".gnb");

 //버튼에 클릭 이벤트 연결
 btn.addEventListener("click",() => {
  //gnb요소의 css속성인 height값을 구해서 height가 0이면 gnb를 펼쳐주고 0이 아니면 gnb를 접어주는 구문
  let compStyles = window.getComputedStyle(gnb);//gnb요소의 모든 css속성을 객체로 compStyles변수에 할당
  //console.log(compStyles)
  //compStyles변수에 height값만 추출
let height = compStyles.getPropertyValue("height");
console.log(height) 

if(height === "0px") {//gnb의 height값이 0이면 gnb요소의 총 높이를 maxHeight값으로 설정(scrollHeight + "px";)
  gnb.style.maxHeight = gnb.scrollHeight + "px";
}else{//gnb의 height가 0px이 아니면(gnb가 펼쳐져 있으면) maxHeight값을 0px으로 변경하여 메뉴를 접어줌
  gnb.style.maxHeight = "0px";
}
})
})
//브라우저의 크기를 변경 이벤트 추가
window.addEventListener("resize",()=>{
  //gnb요소 선택
  const gnb = document.querySelector(".gnb");
  //브라우저창의 가로 크기를 winWidth에 할당
  const winWidth = window.innerWidth;
  //console.log(winWidth)

  //브라우저창의 크기가 768이상일때 gnb의 maxHeight값을 안보이는
  //컨텐츠의 크기만큼 늘려주고 
console.log(winWidth)
if(windWidth >= 768)
{
  gnb.style.maxHeight = gnb.scrollHeight + "px";
}else {//브라우저 창의 크기가 768미만일 때 gnb의 maxHeight값을 다시 0으로 변경
  gnb.style.maxHeight = "0px";
}
})
