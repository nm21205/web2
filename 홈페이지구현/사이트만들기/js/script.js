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

  addEventListener("scroll", (e) => {
    let wsY = window.scrollY;
    console.log(wsY);
    const menu = document.querySelector('.menu');
    if(wsY >= 100) {
      menu.style.top = "-100%";
    } else {
      menu.style.top = "0%";
    }
  });

  let count = 0;
  function updateRotation() {
    const carrousel = document.querySelector(".content-carrousel");
    carrousel.style.transform = `rotateY(${count}deg)`;
  }

  let timer = setInterval(() => {
    count += 0.2;
    updateRotation();
  }, 1000 / 60);

  const slideshow = document.querySelector(".slideshow");

  slideshow.addEventListener("mouseenter", () => {
    clearInterval(timer);
  });

  slideshow.addEventListener("mouseleave", () => {
    timer = setInterval(() => {
      count += 0.2;
      updateRotation();
    }, 1000 / 60);
  });

  document.querySelector('.right-btn').addEventListener('click',(e) => {
    e.preventDefault();
    count = Math.round(count / 40) * 40 + 40;
    updateRotation();
  });

  document.querySelector('.left-btn').addEventListener('click',(e) => {
    e.preventDefault();
    count = Math.round(count / 40) * 40 - 40;
    updateRotation();
  });

  let count1Completed = false;
  let count2Completed = false;

  addEventListener("scroll", () => {
    let wsY = window.scrollY;
    console.log(wsY);

    if (wsY >= 1600) {
      if (!count1Completed) {
        const countElement1 = document.getElementById('count1');
        const targetCount1 = parseInt(countElement1.getAttribute('count-data1'));
        let currentCount1 = 0;

        const counter1 = setInterval(() => {
          currentCount1++;
          countElement1.textContent = currentCount1;

          if (currentCount1 >= targetCount1) {
            clearInterval(counter1);
            count1Completed = true;
          }
        }, 35);
      }

      if (!count2Completed) {
        const countElement2 = document.getElementById('count2');
        const targetCount2 = parseInt(countElement2.getAttribute('count-data2'));
        let currentCount2 = 0;

        const counter2 = setInterval(() => {
          currentCount2++;
          countElement2.textContent = currentCount2;

          if (currentCount2 >= targetCount2) {
            clearInterval(counter2);
            count2Completed = true;
          }
        }, 17);
      }
    }
  });

});
/////////////////////////////////////////////////////
const count1 = document.getElementById("count1");

window.onscroll = function () {
  if (count1) {
    const sectionTop = count1.offsetTop;
    const sectionHeight = count1.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
      console.log("섹션에 도달했습니다!");
    }
  } else {
    console.log("섹션에도달했습니다.");
  }
};

gsap.to(".canvas1", {
  scrollTrigger: {
    trigger: ".canvas1", 
    start: "bottom bottom", 
    end: "top top",
    scrub: 1,
 
    once: true
  },
  y: -10,
  opacity: 1,
  duration: 0.5
});

gsap.to(".canvas2", {
  scrollTrigger: {
    trigger: ".canvas2", 
    start: "bottom bottom", 
    end: "top top",
    scrub: 1,

    once: true
  },
  y: -10,
  opacity: 1,
  duration: 0.5
});

gsap.to(".canvas3", {
  scrollTrigger: {
    trigger: ".canvas3", 
    start: "bottom bottom", 
    end: "top top",
    scrub: 1,

    once: true
  },
  y: -10,
  opacity: 1,
  duration: 0.5
});
