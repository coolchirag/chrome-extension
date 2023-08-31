// content.js
debugger;
var isStarted = false;
let els = document.getElementsByTagName("div");
const ignoredClass = ["mat-focus-indicator mat-menu-trigger user-profile circleBrdrRadius mat-button mat-button-base"];
for (el of els) {
  el.style["backgroup-color"] = "#FF00FF";
}
console.log(" content init");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  debugger;
  let msg = request.message;
  isStarted = !isStarted;
  console.log("Message received in content script:", msg + " : " + isStarted);
  if (isStarted) {
    scanElement(document.querySelectorAll("body > *"));
  }
 
});

function f2() {
  debugger;
  console.log("content navigation change ");
}

function f1() {
  console.log("content t0 ");
  //scanElement(document.querySelectorAll("body > *"));
}

function scanElement(elements) {
  if (isStarted) {
    console.log("content t1 ");
    if (elements != null) {
      //debugger;
      console.log("t2  : ");
      elements.forEach((element) => {
        console.log("t3 : " + element.nodeName + " : " + element.className);
        handleClick(element);
        scanElement(element.childNodes);
      });
    }
  }
}

function handleClick(element) {
  if (element != null) {
    if(ignoredClass.includes(element.className)) {
      return;
    }
    //            console.log("t5 : "+element.style.cursor);
    if (
      element.nodeName == "BUTTON" ||
      element.nodeName == "A" ||
      (element.style != null && element.style.cursor == "pointer")
    ) {
      if (
        element.nodeName != "A" &&
        element.className !=
          "mat-focus-indicator mat-menu-trigger user-profile mat-button mat-button-base" &&
        element.className !=
          "mat-focus-indicator mat-ezdi_item mat-menu-item ng-tns-c34-1"
      ) {
        debugger;
        console.log(
          "content t4 : " + element.nodeName + " : " + element.className
        );
        element.click();
        sleepSync(2000);
      }
    }
  }
}

const sleepSync = (ms) => {
  const end = new Date().getTime() + ms;
  while (new Date().getTime() < end) {
    /* do nothing */
  }
};

function changeDivBackground() {
  var divElements = document.querySelectorAll("div");
  for (var i = 0; i < divElements.length; i++) {
    divElements[i].style.backgroundColor = "blue"; // Change this to the desired color
  }
}

// Wait for the DOM to load and then apply changes
document.addEventListener("DOMContentLoaded", f1);

for (const eventType in window) {
  if (eventType.startsWith('on') && !eventType.startsWith('onmouse') && !eventType.startsWith('onpointer')) {
    window.addEventListener(eventType.substring(2), function(event) {
      //console.log(`Event type: ${event.type}`);
    });
  }
}

// document.addEventListener('DOMNodeInserted', function(event) {
//   console.log('Node inserted:', event.target);
// });

const observer = new MutationObserver(function(mutationsList) {
  for (const mutation of mutationsList) {
    console.log('----DOM mutation occurred:', mutation);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
