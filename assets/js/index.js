window.startTime = 0;
window.sessionTime = 0;
//////////////////////////////////////////////////////////
String.prototype.toHHMMSS = function() {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var time = hours + ':' + minutes + ':' + seconds;
    return time;
};

function computeTime() {
    let currentDate = "";
    let elapsedSeconds = "";
    let formattedTime = "";
    if (window.startTime !== 0) {
        currentDate = new Date().getTime();
        elapsedSeconds = ((currentDate - window.startTime) / 1000);
        formattedTime = elapsedSeconds.toString().toHHMMSS();
    } else {
        formattedTime = "00:00:00";
    }
    window.sessionTime = formattedTime;
}
//////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.querySelector(".section-1");
  section1.classList.add("section-visible");
  const section2 = document.querySelector(".section-2");
  section2.classList.add("section-visible");
  const section3 = document.querySelector(".section-3");
  section3.classList.add("section-visible");
});

document.querySelector(".av1").addEventListener("click", () => {
  const section4 = document.querySelector(".section-4");
  section4.classList.add("section-visible");
});

let cardsCount = 0;
const cardsInner = Array.from(document.querySelectorAll(".flip-card"));
cardsInner.map((card) => {
  card.addEventListener("click", () => {
    const cardInner = card.querySelector(".flip-card-inner");
    if (!cardInner.hasAttribute("clicked")) {
      cardInner.setAttribute("clicked", "true");
      cardsCount++;
      if (cardsCount === 6) {
        const section5 = document.querySelector(".section-5");
        section5.classList.add("section-visible");
        const section6 = document.querySelector(".section-6");
        section6.classList.add("section-visible");
      }
    }
    if (cardInner.hasAttribute("open")) {
      cardInner.style.transform = "rotateY(0deg)";
      cardInner.removeAttribute("open");
      return;
    }
    cardInner.style.transform = "rotateY(180deg)";
    cardInner.setAttribute("open", "true");
  });
});

const videos = Array.from(document.querySelectorAll("video"));
videos.map((video) => {
  video.addEventListener("ended", () => {
    const index = video.dataset.index;
    const section7 = document.querySelector(".section-7");
    section7.classList.add("section-visible");
  });
});

document.querySelector(".av2").addEventListener("click", () => {
  const section8 = document.querySelector(".section-8");
  section8.classList.add("section-visible");
});

let acordeon = 0;
const abreAcordeons = Array.from(document.querySelectorAll(".accordion"));
abreAcordeons.map((card) => {
  card.addEventListener("click", () => {
    const abreAcordeon = card.querySelector(".accordion-header");
    if (!abreAcordeon.hasAttribute("clicked")) {
      abreAcordeon.setAttribute("clicked", "true");
      acordeon++;
      console.log(acordeon)
      if (acordeon === 1) {
        const section9 = document.querySelector(".section-9");
        section9.classList.add("section-visible");
        const section10 = document.querySelector(".section-10");
        section10.classList.add("section-visible");
      }
    }
  });
});

let carrossel = 0;
const abreCarrossel = Array.from(document.querySelectorAll(".carousel"));
abreCarrossel.map((caro) => {
  caro.addEventListener("click", () => {
    const abreCarrossel = caro.querySelector(".carousel-item");
    if (!abreCarrossel.hasAttribute("clicked")) {
      abreCarrossel.setAttribute("clicked", "true");
      carrossel++;
      console.log(carrossel)
      if (carrossel === 1) {
        const section11 = document.querySelector(".section-11");
        section11.classList.add("section-visible");
        const section12 = document.querySelector(".section-12");
        section12.classList.add("section-visible");
        computeTime();
        pipwerks.SCORM.set("cmi.core.lesson_status", "completed");
        pipwerks.SCORM.set("cmi.core.session_time", window.sessionTime);
        pipwerks.SCORM.save();
        ///////////////////////////////////////////////////////////
        //SCORM
        ////////////////////////////////////////////////////////////
        window.startTime = new Date().getTime();
        pipwerks.SCORM.init();
        pipwerks.SCORM.version = "1.2";
        setInterval(function() {
            computeTime();
            pipwerks.SCORM.set("cmi.core.session_time", window.sessionTime);
            pipwerks.SCORM.save();
        }, 60000);
        computeTime();
            pipwerks.SCORM.set("cmi.core.lesson_status", "completed");
            pipwerks.SCORM.set("cmi.core.session_time", window.sessionTime);
            pipwerks.SCORM.save();
        ////////////////////////////////////////////////////////////
      }
    }
  });
});