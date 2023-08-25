(function() {
  const originalFetch = window.fetch;
  window.fetch = function(input, init) {
    console.log("Intercepted fetch:", input);
    return originalFetch.apply(this, arguments);
  };
})();

