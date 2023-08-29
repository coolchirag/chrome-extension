// content.js
debugger;
var isStarted = false;
let els = document.getElementsByTagName("div");
for(el of els) {
  el.style['backgroup-color']='#FF00FF';
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  debugger;
  let msg = request.message;
  isStarted = !isStarted;
  console.log('Message received in content script:', msg + " : "+isStarted);
  if(isStarted) {
    scanElement(document.querySelectorAll("body > *"));
  }
  
  /*if(msg == 'Start') {
    isStarted = true;
    scanElement(document.querySelectorAll("body > *"));
  } else {
    isStarted = false;
  }*/
  
});

function f1() {
            console.log("content t0 ");
            //scanElement(document.querySelectorAll("body > *"));
        }


        function scanElement(elements) {
          if(isStarted) {
            console.log("content t1 ");
            if(elements != null) {
                //debugger;
                console.log("t2  : ");
                elements.forEach(element => {
                    console.log("t3 : "+element.nodeName+" : "+element.className);
                    handleClick(element);
                    scanElement(element.childNodes);
                });
            }
          }
        }

        function handleClick(element) {
        if(element != null) {
        
//            console.log("t5 : "+element.style.cursor);
            if( element.nodeName == 'BUTTON' || element.nodeName == 'A' || (element.style != null && element.style.cursor == 'pointer')) {
              if(element.nodeName != 'A') {
                debugger;
              console.log("content t4 : "+element.nodeName+" : "+element.className);      
              element.click();
              }
                }
                }
        }

function changeDivBackground() {
  var divElements = document.querySelectorAll('div');
  for (var i = 0; i < divElements.length; i++) {
    divElements[i].style.backgroundColor = 'blue'; // Change this to the desired color
  }
}

// Wait for the DOM to load and then apply changes
document.addEventListener('DOMContentLoaded', f1);


