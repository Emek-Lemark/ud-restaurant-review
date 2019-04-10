document.addEventListener("DOMContentLoaded", event => {
  if (navigator.serviceWorker) {
  	//register service worker
    navigator.serviceWorker
      .register("sw/index.js")
      .then(registration => console.log("Service Worker registered", registration))
      .catch(e => console.log("Registration failed :(", err));
  }
});


navigator.serviceWorker.register('sw/index.js')
.then(registration => {
    if (registration.installing) {
   	// Service Worker is Installing
     console.log("service worker is installed");
    } else
    console.log("it did not install");
})

navigator.serviceWorker.register('sw/index.js')
.then(registration => {
    if (registration.waiting) {
    // Service Worker is Waiting
    console.log("service worker is waiting");
    } else
    console.log("it is not waiting");
})

navigator.serviceWorker.register('sw/index.js')
.then(registration => {
    if (registration.active) {
     // Service Worker is Active
    console.log("service worker is active");
    } else
    console.log("it is not active");
})