addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.menu-icon');
  const hide = document.querySelector('.hide');
  const start = document.querySelector('.start');
  const bn2Items = document.querySelectorAll('.bn2 > li');

  // 하나의 forEach로 통합
  bn2Items.forEach(item => {
    item.addEventListener('mouseenter', function() {  // mouseover 대신 mouseenter 사용
      hide.classList.add('active');  // toggle 대신 add 사용
    });

    item.addEventListener('mouseleave', function() {
      // 마우스가 메뉴를 벗어났을 때만 hide 제거
      setTimeout(() => {  // 약간의 지연을 줘서 서브메뉴로 이동할 시간을 줌
        if (!hide.matches(':hover')) {  // hide에 마우스가 없을 때만
          hide.classList.remove('active');
        }
      }, 100);
    });
  });



  menuIcon.addEventListener('click', function() {
    console.log("1");
    this.classList.toggle('active');
    hide.classList.toggle('active');
  });

  hide.addEventListener('mouseleave', function() {
    hide.classList.remove('active');
  });

  menuIcon.addEventListener('mouseleave', function() {
    this.classList.remove('active');
  });
});
