$(function(){
  const url_str = location.href;
  const title_str = $("title").text();

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
        copyTextToClipboard("[" + title_str + "]" + "(" + url_str + ")");
        break;
      case 'single-quote':
        copyTextToClipboard("\'" + url_str + "\'");
        break;
      case 'double-quote':
        copyTextToClipboard("\"" + url_str + "\"");
        break;
      default:
    }
  });
});
