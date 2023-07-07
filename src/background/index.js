
// Listen for a message from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'replyToComments') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs && tabs[0]) {
              chrome.tabs.sendMessage(tabs[0].id, { action: 'executeReplyToComments' });
            }
          });
    }
  });
