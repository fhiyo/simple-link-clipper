$(function(){
  chrome.storage.local.get('mode', function(result) {
    const mode = result.mode;
    console.log("mode: ", mode);
    $(`input[type=radio][name=mode][value=${mode}]`).attr({'checked':'checked'});
  });

  $('input[type=radio][name=mode]').change(function(){
    const new_mode = this.value;
    chrome.storage.local.set({'mode': new_mode}, function(result) {
      console.log('mode: ', mode);
    });
  })
});
