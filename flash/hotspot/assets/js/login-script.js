const startLanguage = 'nl'
let showPassword = false;

onInit();

function onInit() {
  document.login.username.focus();
  translateTo(startLanguage);
}

function togglePassword() {
  showPassword = !showPassword;
  document.getElementById('pass').type = showPassword ? 'text': 'password';
  document.getElementById("pass-toggle-visibility-off").classList.toggle('hide');
  document.getElementById("pass-toggle-visibility-on").classList.toggle('hide');
}

function translateTo(targetLanguage) {
  for (const trans of translations) {
    document.getElementById(trans.id).innerHTML = trans[targetLanguage];
  }
}