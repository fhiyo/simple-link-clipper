(() => {
  const defaultMode = 'markdown';

  chrome.storage.local.set({ 'mode': defaultMode });

  chrome.commands.onCommand.addListener(function(command){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
      const tabId = tabs[0].id;
      chrome.scripting.executeScript(
        { target: { tabId }, files: [ "assets/js/jquery-3.7.1.min.js" ] },
        function(){
          chrome.scripting.executeScript({ target: { tabId }, files: [ "lib/clipper.js" ] });
        }
      );
    });
  });

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    const mode = message;
    chrome.storage.local.set({ 'mode': mode }, function(res){
      sendResponse(200);
    })
  })
})();
