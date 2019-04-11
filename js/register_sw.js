document.addEventListener("DOMContentLoaded", event => {
  if (navigator.serviceWorker) {
  	//register service worker
    navigator.serviceWorker
      .register("./sw.js")
      .then(registration => console.log("Service Worker registered", registration))
      .catch(e => console.log("Registration failed :(", err));
  }
});

