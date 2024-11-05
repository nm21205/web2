//브라우저 내에서 스크롤 이벤트가 발생했을때 실행
window.addEventListener('scroll', function(){
let sct = window.scrollY; //스크롤 이동값을sct에 저장
//모든 artcle요소에 대해 transform 적용
const articles = document.querySelectorAll('section > article');

articles.forEach((article, i) =>{
  article.style.transform = `translateZ(${-5000 * i + sct}px)`;
  //현재 스크롤 위치에 따라 on클래스 추가/제거
  if( sct >= i * 5000 && sct < (i+1) * 5000){
    //모든 아티클 요소를 순회하여 on클래스를 제거
    articles.forEach(a => {
  a.classList.remove('on');});
  //해당 article만 on클래스를 추가
  article.classList.add("on");
  //해당 nav가 활성화
  const navItems = this.document.querySelectorAll('.scrollNav li');
  navItems.forEach(item => {item.classList.remove('on');

  })
  //해당 아티클과 같은 순번의 내비아이템에만 on클래스를 추가
  navItems[i].classList.add('on');
    }
})
});
//내비게이션 클릭 이벤트
const navItems = document.querySelectorAll('.scrollNav li');
//모든 내비게이션 아이템에 클릭 이벤트 리스너를 추가
navItems.forEach((item, idx)=> item.addEventListener('click',()=> {
 //스크롤 위치 이동 window.scrollTo(top(y좌표),left(x좌표))
 window.scrollTo({
  top: 5000 * idx, 
  behavior:'smooth' //부드러운 스크롤 이동
  })
}));

//마우스 이동 이벤트
document.body.addEventListener('mousemove', (e) =>{
  //마우스 위치 값을 축소시키기 위해 특정 값으로 나눔
  let posX = e.pageX / 100; 
  let posY = e.pageY / 150;

  //각 객체의 위치 업데이트
  const obj11 = document.querySelector('.obj11');
  obj11.style.left = (-270 - posX) + 'px';
  obj11.style.bottom = (-270 - posY) + 'px';

  const obj12 = document.querySelector('.obj12');
  obj12.style.right = (-590 - posX) + 'px';
  obj12.style.top = (-85 - posY) + 'px';

  const obj13 = document.querySelector('.obj13');
  obj13.style.left = (-100 + posX) + 'px';
  obj13.style.bottom = (20 + posY) + 'px';

  //2페이지

  const obj21 = document.querySelector('.obj21');
  obj21.style.left = (-700 - posX) + 'px';
  obj21.style.bottom = (-420 - posY) + 'px';

  const obj22 = document.querySelector('.obj22');
  obj22.style.right = (-50 + posX) + 'px';
  obj22.style.bottom = (-100 + posY) + 'px';
  //3페이지
  const obj31 = document.querySelector('.obj31');
  obj31.style.left = (110 - posX) + 'px';
  obj31.style.bottom = (70 - posY) + 'px';

  const obj32 = document.querySelector('.obj32');
  obj32.style.left = (100 - posX) + 'px';
  obj32.style.bottom = (-160 - posY) + 'px';

  //4페이지
  const obj41 = document.querySelector('.obj41');
  obj41.style.left = (350 - posX) + 'px';
  obj41.style.bottom = (-150 - posY) + 'px';

  const obj42 = document.querySelector('.obj42');
  obj42.style.right = (200 + posX) + 'px';
  obj42.style.bottom = (-250 - posY) + 'px';

  const obj43 = document.querySelector('.obj43');
  obj43.style.right = (-100 + posX) + 'px';
  obj43.style.bottom = (-120 + posY) + 'px';

  //5페이지
  const obj51 = document.querySelector('.obj51');
  obj51.style.left = (-100 - posX) + 'px';
  obj51.style.bottom = (-200 - posY) + 'px';

  const obj52 = document.querySelector('.obj52');
  obj52.style.right = (320 + posX) + 'px';
  obj52.style.top = (-150 - posY) + 'px';

  const obj53 = document.querySelector('.obj53');
  obj53.style.right = (-30 + posX) + 'px';
  obj53.style.bottom = (- posY) + 'px'; });