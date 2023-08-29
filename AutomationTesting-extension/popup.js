debugger;
const currentDate = new Date();
console.log("popup loaded : "+currentDate.getTime());
var captureButton;
document.addEventListener('DOMContentLoaded', function() {
	captureButton = document.getElementById('pb1');
	captureButton.addEventListener('click', popupButtonClicked);
  });
function popupButtonClicked() {
	let txt = captureButton.textContent;
	if(txt == 'Start') {
		captureButton.textContent="Stop";
	} else {
		captureButton.textContent="Start";
	}
	console.log("pop up clicked  : ", txt);
	sendMessageToContentScript(txt);
}

  function sendMessageToContentScript(msg) {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	  var tabId = tabs[0].id;
	  chrome.tabs.sendMessage(tabId, { message: msg});
	});
  }