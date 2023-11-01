// header - S
const header = document.querySelector('.header');

window.addEventListener("scroll", function () {
  let win = window.scrollY;
  // 헤더에 들어가는 이벤트일 경우 수치값으로 하고, 중간에 들어가는 섹션에 스크롤 이벤트를 적용할 때는 해당 섹션의 scrollY를 구하여 변수로 할당하고 '그 변수의 값을 지나가면' 형식으로 if문 조건을 작성한다.
  if (win > 100) {
    header.classList.add("fix");
  } else {
    header.classList.remove("fix");
  }
});


const otherOpen = document.querySelector('.other > button');
const otherList = document.querySelector('.other');

otherOpen.addEventListener('click', () => {
  otherList.classList.toggle('other-site');
});

const lang = document.querySelector('.lang > button');
const langOn = document.querySelector('.lang-box');

lang.addEventListener('click', () => {
  langOn.classList.toggle('on');
});

const schBtn = document.querySelector('.sch > button');
const schBox = document.querySelector('.sch-box');
const schClose = document.querySelector('.sch-recom > button');

schBtn.addEventListener('click', () => {
  schBox.classList.add('open');
});
schClose.addEventListener('click', () => {
  schBox.classList.remove('open');
});

const schEnter = document.querySelector('.sch-form > fieldset > button');

schEnter.addEventListener("click", (e) => {
  e.preventDefault();
  const schInput = document.querySelector(".sch-form > fieldset > input");

  schInput.value = "";
});

const schChoice = document.querySelector('.sch-choice > strong');
const choice = document.querySelector('.sch-choice');

schChoice.addEventListener('click', () => {
  choice.classList.toggle('list');
});

// header - E

// footer - S
const familyOn = document.querySelector('.f-family-tit');
const familySite = document.querySelector('.f-family-choice');
const familyOff = document.querySelector('.f-family-choice > .f-family-tit');

familyOn.addEventListener('click', () => {
  familySite.classList.add('on');
});
familyOff.addEventListener('click', () => {
  familySite.classList.remove('on');
});

const fLangOn = document.querySelector('.f-lang > em');
const fLang = document.querySelector('.f-lang-choice');
const fLangOff = document.querySelector('.f-lang-choice > em');

fLangOn.addEventListener('click', () => {
  fLang.classList.add('on');
});
fLangOff.addEventListener('click', () => {
  fLang.classList.remove('on');
});

const toTop = document.querySelector('.fixed-menu > a')

toTop.addEventListener('click', () => {
  window.scrollTo(0,0);
})
// footer - E