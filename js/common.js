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