debugger;
const currentDate = new Date();
console.log("popup loaded : "+currentDate.getTime());
function popupButtonClicked() {
	console.log("pop up clicked");
}
//document.getElementById("pb1").addEventListener("click",popupButtonClicked);