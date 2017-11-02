(function(){
  chrome.tabs.onUpdated.addListener(function(tabId){
    chrome.pageAction.show(tabId);
  })
  chrome.commands.onCommand.addListener(function(command){
    console.log("Command: ", command);
    // chrome.tabs.executeScript(null,{file: "assets/js/lib/jquery-3.2.1.min.js"},
    // chrome.tabs.executeScript(null,{file: "lib/jquery-3.2.1.min.js"},
    chrome.tabs.executeScript(null,{file: "jquery-3.2.1.min.js"},
      function(){
        chrome.tabs.executeScript(null,{file: "script.js"});
      });
  });
})();
