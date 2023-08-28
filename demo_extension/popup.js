debugger;
const currentDate = new Date();
console.log("popup loaded : "+currentDate.getTime());
document.addEventListener('DOMContentLoaded', function() {
	var captureButton = document.getElementById('pb1');
	captureButton.addEventListener('click', popupButtonClicked);
  });
function popupButtonClicked() {
	console.log("pop up clicked");
}