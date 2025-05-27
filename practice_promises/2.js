async function loadScriptAsync() {
  try {
    const message = await loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");
    alert(message);
  } catch (error) {
    alert(error);
  }
}

loadScriptAsync();
