// sub2-1 lnb
const lnb = document.querySelectorAll('.lnb-list > li');
const tabMenu = document.querySelectorAll('.tab-btn > li');

Array.from(lnb).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function() {
    for (var i = 0; i < lnb.length; i++) {
      lnb[i].classList.remove("on");
      tabMenu[i].classList.remove("on");
    }
    lnb[index].classList.add("on");
    tabMenu[index].classList.add("on");
  })
});
lnb[0].click();


Array.from(tabMenu).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function() {
    for (var i = 0; i < tabMenu.length; i++) {
      tabMenu[i].classList.remove("on");
      lnb[i].classList.remove("on");
    }
    tabMenu[index].classList.add("on");
    lnb[index].classList.add("on");
  })
});
tabMenu[0].click();