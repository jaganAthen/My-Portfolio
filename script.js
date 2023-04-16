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



/////////////////////google shit linking code and github script with source key
const scriptURL = 'https://script.google.com/macros/s/AKfycbxDxrjRr52CIv8mcBiOa-ytC5L8e9jFUq6MnHZcbcmpiXu9koilzVfxhuCHactIw9Nm/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(_ => {
   msg.innerHTML = "Message Sent Successfully!";
   setTimeout(function (){
      msg.innerHTML =""
   },5000)
   form.reset();
 })
 .catch(error => {
   console.error(error);
   msg.innerHTML = "An error occurred while sending the message.";
 });
 
})

///////////////////////alert about under processs
function showAlert() {
   alert("We're sorry, our site is currently under construction. Please check back soon for updates!");
 }
 