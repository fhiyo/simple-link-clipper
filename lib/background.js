(function(){
  const default_mode = 'markdown';
  chrome.tabs.onUpdated.addListener(function(tabId){
    chrome.pageAction.show(tabId);
  })
  chrome.commands.onCommand.addListener(function(command){
    console.log("Command: ", command);
    // If you want to change shortcut key, move to "chrome://extensions/configureCommands" and set your favorite one.
    chrome.tabs.executeScript(null,{file: "assets/js/jquery-3.2.1.min.js"},
      function(){
        chrome.tabs.executeScript(null,{file: "lib/clipper.js"});
      });
  });

  chrome.storage.local.set({'mode': default_mode}, function(res){
    console.log('res: ', res);
  });

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    const mode = message;
    chrome.storage.local.set({'mode': mode}, function(res){
      sendResponse(200);
    })
    return true;
  })
})();
