// @ts-nocheck
// document.querySelectorAll('.').forEach((e) => {
//   e.addEventListener('click', (e) => {
//     const menu = e.currentTarget.dataset.path;
//     console.log(e);
//   });
// }); 

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}
function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}
function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
}
function myFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.FAQ__dropbtn')) {
    let dropdowns = document.getElementsByClassName("FAQ__dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
