$(() => {
  chrome.storage.local.get('mode', function({ mode }) {
    $(`input[type=radio][name=mode][value=${mode}]`).attr({ checked: 'checked' });
  });

  $('input[type=radio][name=mode]').change(function() {
    const newMode = this.value;
    chrome.storage.local.set({ 'mode': newMode });
  });
});
