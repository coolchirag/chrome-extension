"use strict";

// content.js
debugger;
var isStarted = false;
var els = document.getElementsByTagName("div");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = els[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    el = _step.value;
    el.style["backgroup-color"] = "#FF00FF";
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  debugger;
  var msg = request.message;
  isStarted = !isStarted;
  console.log("Message received in content script:", msg + " : " + isStarted);

  if (isStarted) {
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
  console.log("content t0 "); //scanElement(document.querySelectorAll("body > *"));
}

function scanElement(elements) {
  if (isStarted) {
    console.log("content t1 ");

    if (elements != null) {
      //debugger;
      console.log("t2  : ");
      elements.forEach(function (element) {
        console.log("t3 : " + element.nodeName + " : " + element.className);
        handleClick(element);
        scanElement(element.childNodes);
      });
    }
  }
}

function handleClick(element) {
  if (element != null) {
    //            console.log("t5 : "+element.style.cursor);
    if (element.nodeName == "BUTTON" || element.nodeName == "A" || element.style != null && element.style.cursor == "pointer") {
      if (element.nodeName != "A" && element.className != "mat-focus-indicator mat-menu-trigger user-profile mat-button mat-button-base" && element.className != "mat-focus-indicator mat-ezdi_item mat-menu-item ng-tns-c34-1") {
        debugger;
        console.log("content t4 : " + element.nodeName + " : " + element.className);
        element.click();
        sleepSync(2000);
      }
    }
  }
}

var sleepSync = function sleepSync(ms) {
  var end = new Date().getTime() + ms;

  while (new Date().getTime() < end) {
    /* do nothing */
  }
};

function changeDivBackground() {
  var divElements = document.querySelectorAll("div");

  for (var i = 0; i < divElements.length; i++) {
    divElements[i].style.backgroundColor = "blue"; // Change this to the desired color
  }
} // Wait for the DOM to load and then apply changes


document.addEventListener("DOMContentLoaded", f1);