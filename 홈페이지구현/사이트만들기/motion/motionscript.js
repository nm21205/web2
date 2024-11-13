addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.menu-icon');
  const hide = document.querySelector('.hide');
  const start = document.querySelector('.start');

  const bn2Items = document.querySelectorAll('.bn2 > li');

  bn2Items.forEach(item => {
    item.addEventListener('mouseover', function() {
      this.classList.toggle('active');
      hide.classList.toggle('active');
    });
  });

  bn2Items.forEach(item => {
    item.addEventListener('mouseleave', function() {
      this.classList.remove('active');
      hide.classList.remove('active');
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
