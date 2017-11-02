$(function(){
  var copyTextToClipboard = function(txt){
      var copyArea = $("<textarea/>");
      copyArea.text(txt);
      $("body").append(copyArea);
      copyArea.select();
      document.execCommand("copy");
      copyArea.remove();
  }
  var url_str = location.href;
  var title_str = $("title").text();

  copyTextToClipboard("[" + title_str + "]" + "(" + url_str + ")");
});
