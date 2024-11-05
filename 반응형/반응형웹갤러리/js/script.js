//문서가 전부로드 되었을때 실행.
window.addEventListener("load",()=>{
  //Isotope의 첫번째 인자로 배치할 요소를 감싸고 있는 부모요소를 적용
  const grid = new Isotope("section",{itemSelector : "article",//배치할요소명 
  columnWidth : "artcle", //넓이값을 구할 요소명
  transitionDuration : "0.5s" //화면 재배치시 요소가 움직이는 속도  
  });
//클릭할 모든 버튼요소를 변수에 저장
const btns =document.querySelectorAll("main ul li");
console.log(btns)


  //버튼의 갯수만큼 반복을 돌림
 // for(let i = 0; i < btns.length; i++){
  //}

  //btns 배열의 요소를 하나씩 뽑아서 갯수만큼 반복문을 실행한다.
for(let el of btns)
{
  //각 버튼 요소에 클릭 이벤트를 연결
  el.addEventListener("click",(e)=>{ 
    //e(event) =event객체 
    e.preventDefault();//윈도우의 기본 기능인 링크기능을 제거

    //getAttribute()= 태그의 attribute 속성을 읽어오는 메서드
    //e.currentTarget = 이벤트가 발생된 요소(li)
    const sort = e.currentTarget.querySelector("a").getAttribute("href");
    //클릭이벤트가 발생한 li요소의 자손요소중 a요소를 선택하여 href속성값을 읽어서 sort상수에 할당
    console.log(sort)

    //grid에 저장된 결과값을 불러와 재정렬 기능을 연결
    grid.arrange({
      //옵션 값으로 sort변수값 지정
      filter : sort
    })

    //다시 모든 버튼의 갯수만큼 반복을 돌려야함
    for(let el of btns) {
      //각 버튼의 클래스명 "on"을 제거해 비활성화
      el.classList.remove("on")
    }
    //클릭한 대상만 선택해서 클래스명 on을 추가하여 활성화
    e.currentTarget.classList.add("on");
  })
}

})