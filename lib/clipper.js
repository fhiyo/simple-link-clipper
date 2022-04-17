$(() => {
  const url = location.href;
  const title = $("title").text();

  const copyTextToClipboard = function(txt){
    const copyArea = $("<textarea/>");
    copyArea.text(txt);
    $("body").append(copyArea);
    copyArea.select();
    document.execCommand("copy");
    copyArea.remove();
  }

  chrome.storage.local.get('mode', function(res){
    mode = res.mode;
    switch(mode){
     case 'markdown':
        copyTextToClipboard("[" + title + "]" + "(" + url + ")");
        break;
      case 'single-quote':
        copyTextToClipboard("\'" + url + "\'");
        break;
      case 'double-quote':
        copyTextToClipboard("\"" + url + "\"");
        break;
      default:
    }
  });
});
