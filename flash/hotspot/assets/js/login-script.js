const startLanguage = 'nl'

onInit();

function onInit() {
  document.login.username.focus();
  translateTo(startLanguage);
}

function translateTo(targetLanguage) {
  for (const trans of translations) {
    console.log(`%c tranlating`, `background:aqua;color:black`, { trans, targetLanguage });
    document.getElementById(trans.id).innerHTML= trans[targetLanguage];
  }
}