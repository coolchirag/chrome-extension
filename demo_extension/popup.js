debugger;
const currentDate = new Date();
console.log("popup loaded : "+currentDate.getTime());
document.addEventListener('DOMContentLoaded', function() {
	var captureButton = document.getElementById('pb1');
	captureButton.addEventListener('click', popupButtonClicked);
  });
function popupButtonClicked() {
	console.log("pop up clicked 2");
	sendMessageToContentScript();
}

  function sendMessageToContentScript() {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	  var tabId = tabs[0].id;
	  chrome.tabs.sendMessage(tabId, { message: 'Hello from Popup!' });
	});
  }