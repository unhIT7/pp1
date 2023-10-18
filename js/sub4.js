// sub4-1 lnb
let tabButtons = document.querySelectorAll('.sub-depth1 > a');
// console.log(tabButtons)

Array.from(tabButtons).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function() {
    let tabBoxs = document.querySelectorAll('.sub-depth2');
    for (var i = 0; i < tabBoxs.length; i++) {
        tabBoxs[i].classList.remove("on");
        tabButtons[i].classList.remove("on");
    }
    tabBoxs[index].classList.add("on");
    this.classList.add("on");
  })
});
tabButtons[0].click();