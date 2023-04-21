///////////////////the nav bar sidemenu for mobile screen 
var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}

/////////////////////skills and experience slider funciton
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
   for (var i in tablinks) {
      if (tablinks.hasOwnProperty(i)) {
         tablinks[i].classList.remove('active-link');
      }
   }
   for (var j in tabcontents) {
      if (tabcontents.hasOwnProperty(j)) {
         tabcontents[j].classList.remove('active-tab');
      }
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}



///////////////////////alert about under processs
function showAlert() {
   alert("We're sorry, our site is currently under construction. Please check back soon for updates!");
 }
 