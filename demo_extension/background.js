// background.js
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	 console.log("------Inside BL-------------------");
    if (details.type === "xmlhttprequest" && details.method === "GET") {
      console.log("Intercepted fetch request:", details.url);
      return { cancel: true }; // This will cancel the request
    }
    return { cancel: false }; // Don't cancel the request
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

