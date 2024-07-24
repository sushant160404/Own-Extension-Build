// popup.js

document.addEventListener('DOMContentLoaded', function() {
  var cleanButton = document.getElementById('cleanButton');
  if (cleanButton) {
    cleanButton.addEventListener('click', function() {
      chrome.runtime.sendMessage({ action: 'cleanHistoryAndCache' }, function(response) {
        console.log('Message sent with response:', response);
      });
    });
  } else {
    console.error('Element with id "cleanButton" not found.');
  }
});
