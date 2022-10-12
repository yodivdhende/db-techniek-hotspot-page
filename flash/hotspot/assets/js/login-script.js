const startLanguage = 'nl'
let showPassword = false;

onInit();

function onInit() {
  document.login.username.focus();
  translateTo(startLanguage);
}

function togglePassword() {
  console.log(`%c togglePassword view`, `background:yellow;color:black`, {  });
  showPassword = !showPassword;
  document.getElementById('pass').type = showPassword ? 'text': 'password';
  document.getElementById("pass-toggle-visibility-off").classList.toggle('hide');
  document.getElementById("pass-toggle-visibility-on").classList.toggle('hide');
}

function translateTo(targetLanguage) {
  for (const trans of translations) {
    console.log(`%c tranlating`, `background:aqua;color:black`, { trans, targetLanguage });
    document.getElementById(trans.id).innerHTML= trans[targetLanguage];
  }
}