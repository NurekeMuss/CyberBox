function expand(lbl) {
    var elemId = lbl.getAttribute("for");
    document.getElementById(elemId).style.height = "45px";
    document.getElementById(elemId).classList.add("my-style");
    lbl.style.transform = "translateY(-45px)";
}


document.getElementById("toggle").addEventListener("click", function() {
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});


 function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
 }
 function onEntry(entry) {
   entry.forEach(change => {
       if (change.isIntersecting) {
           change.target.classList.add('element-show');
       }
   });
 }

 let options = {
   threshold: [0.5]
 };
 let observer = new IntersectionObserver(onEntry, options);
 let elements = document.querySelectorAll('.body');

 for (let elm of elements) {
   observer.observe(elm);
 }
 var isScrolling = false;

 window.addEventListener("scroll", throttleScroll, false);

 function throttleScroll(e) {
   if (isScrolling == false) {
       window.requestAnimationFrame(function() {
           scrolling(e);
           isScrolling = false;
       });
   }
   isScrolling = true;
 }

 document.addEventListener("DOMContentLoaded", scrolling, false);

 var listItems = document.querySelectorAll("#mainContent .flexbox .inner-container");
 var firstBox = document.querySelector("#firstBox");
 var secondBox = document.querySelector("#secondBox");

function scrolling(e) {

   if (isPartiallyVisible(firstBox)) {
       firstBox.classList.add("active");

       document.body.classList.add("colorOne");
       document.body.classList.remove("colorTwo");
   } else {
       document.body.classList.remove("colorOne");
       document.body.classList.remove("colorTwo");
   }

   if (isFullyVisible(secondBox)) {
       secondBox.classList.add("active");

       document.body.classList.add("colorTwo");
       document.body.classList.remove("colorOne");
   }

   for (var i = 0; i < listItems.length; i++) {
       var listItem = listItems[i];

       if (isPartiallyVisible(listItem)) {
           listItem.classList.add("active");
       } else {
           listItem.classList.remove("active");
       }
   }
 }

 function isPartiallyVisible(el) {
   var elementBoundary = el.getBoundingClientRect();

   var top = elementBoundary.top;
   var bottom = elementBoundary.bottom;
   var height = elementBoundary.height;

   return ((top + height >= 0) && (height + window.innerHeight >= bottom));
 }

 function isFullyVisible(el) {
   var elementBoundary = el.getBoundingClientRect();

   var top = elementBoundary.top;
   var bottom = elementBoundary.bottom;

   return ((top >= 0) && (bottom <= window.innerHeight));
 }
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
}