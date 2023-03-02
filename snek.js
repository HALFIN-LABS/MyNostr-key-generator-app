function snek() {
    // Get input values from form
    var prefix = document.getElementById("prefixRadio").value;
    var suffix = document.getElementById("suffixRadio").value;

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    if (prefix || suffix) {
      // If at least one input value is not empty, display personalized message
      if (prefix) {
        snackbar.innerText = "Your Nostr keys with the " + prefix + " suffix is being generated.";
      } else if (suffix) {
        snackbar.innerText = "Your Nostr keys with the " + suffix + " prefix is being generated.";
      }
     else {
      // If both input values are empty, display generic message
      snackbar.innerText = "Your Nostr keys are being generated.";
    }
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}