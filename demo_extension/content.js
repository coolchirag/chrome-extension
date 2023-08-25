// content.js
function f1() {
            console.log("t0 ");
            scanElement(document.querySelectorAll("body > *"));
        }

        function scanElement(elements) {
            console.log("t1 ");
            if(elements != null) {
                debugger;
                console.log("t2  : "+elements);
                elements.forEach(element => {
                    console.log("t3 ");
                    handleClick(element);
                    scanElement(element.childNodes);
                });
            }
        }

        function handleClick(element) {
        if(element != null) {
        console.log("t4 : "+element.nodeName);
//            console.log("t5 : "+element.style.cursor);
            if( element.nodeName == 'BUTTON' || element.nodeName == 'A' || (element.style != null && element.style.cursor == 'pointer')) {
                    element.click();
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


