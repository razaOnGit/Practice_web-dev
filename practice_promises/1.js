function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve("Script loaded successfully!");
    script.onerror = () => reject(new Error("Script load error!"));
    document.head.appendChild(script);
  });
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js")
  .then((message) => {
    alert(message); // Shows alert when script is successfully loaded
  })
  .catch((error) => {
    alert(error); // Shows alert if an error occurs
  });
