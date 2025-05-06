// script.js
function checkCode() {
    const input = document.getElementById('codeInput').value;
    const correctCode = "022057"; // <-- your private code
  
    if (input === correctCode) {
      // simulate access granted
      localStorage.setItem("unlocked", "true");
      window.location.href = "birthday.html";
      document.getElementById('popSound').play();
      document.getElementById('hornSound').play();
    } else {
      document.getElementById('errorMsg').textContent = "Oops! Wrong code.";
    }
  }
  
  // redirect protection on other pages (optional to paste into each page)
  function verifyAccess() {
    if (localStorage.getItem("unlocked") !== "true") {
      window.location.href = "index.html";
    }
  }
  