function sideBar() {
  var sideBarBtn = document.getElementById("btn");
  var navBar = document.getElementById("test");
  var scrnOverlay = document.getElementById("scrnOverlay");
  var sideBtnStyle = document.getElementById("mBar1");
  var sideBtnStyle2 = document.getElementById("mBar2");
  var sideBtnStyle3 = document.getElementById("mBar3");



  if (navBar.style.display == "none") {
    navBar.style.display = "block";
    sideBarBtn.style.left = '156px';
    scrnOverlay.style.visibility = "visible";
    sideBtnStyle.style.left = "164px";
    sideBtnStyle2.style.left = "164px";
    sideBtnStyle2.style.width = "5%";
    sideBtnStyle3.style.left = "164px";

  } else {
    navBar.style.display = "none";
    sideBarBtn.style.left = "18px";
    scrnOverlay.style.visibility = "hidden";
    sideBtnStyle.style.left = "26px";
    sideBtnStyle2.style.left = "26px";
    sideBtnStyle2.style.width = "3%";
    sideBtnStyle3.style.left = "26px";
  }

}



function init() {
  var navBar = document.getElementById("test");
  var sideBarBtn = document.getElementById("btn");
  var sideBtnStyle = document.getElementById("mBar1");
  var sideBtnStyle2 = document.getElementById("mBar2");
  var sideBtnStyle3 = document.getElementById("mBar3");
  navBar.style.display = "none";
  sideBarBtn.style.left = '18px';
  sideBarBtn.style.padding="40px";
  
  sideBarBtn.addEventListener("click", sideBar)
  sideBtnStyle.addEventListener("click", sideBar)
  sideBtnStyle2.addEventListener("click", sideBar)
  sideBtnStyle3.addEventListener("click", sideBar)


}
window.onload = init;