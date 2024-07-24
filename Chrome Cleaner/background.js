// Example of message passing with error handling

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'cleanHistoryAndCache') {
    chrome.browsingData.remove({
      "since": 0
    }, {
      "appcache": true,
      "cache": true,
      "cookies": true,
      "downloads": true,
      "fileSystems": true,
      "formData": true,
      "history": true,
      "indexedDB": true,
      "localStorage": true,
      "pluginData": true,
      "passwords": true,
      "webSQL": true
    }, function() {
      if (chrome.runtime.lastError) {
        console.error("Error removing browsing data:", chrome.runtime.lastError.message);
      } else {
        console.log("History and cache cleaned successfully");
        sendResponse({ message: 'History and cache cleaned successfully' });
      }
    });
    return true; // Indicates that sendResponse will be called asynchronously
  }
});
