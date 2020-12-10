const textArea = document.getElementById("stringbox")

let reasons = new Map([
  ['name', 'Please give your game a title that will let others know what the game is about. Avoid acronyms or vague names like Lesson Number 1, Guess the Answer, Unit 1 vocab, or Final Review.'],
  ['min', 'Games must have at least 5 questions to be in the Arcade. (Tic Tac Toe requires a minimum of 9 questions and Bingo requires at least 24.) You can edit your game and re submit to the Arcade at any time.'],
  ['personal', 'This game is best suited for your personal wisc-online page. If your game is set to public, you can share the link / URL (from the game play view and not the edit view) with anyone or use the social media sharing links below your game.'],
  ['missingAnswers', 'Your game needs answers for each question.']
])

function getWords() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

function GetSelectedValue() {
  let e = document.getElementById('reason');
  var result = e.options[e.selectedIndex].value;

  document.getElementById("result").innerHTML = result;
}

function GetSelectedText() {
  let e = document.getElementById("reason");
  let result = e.options[e.selectedIndex].value;
  let text = '';
  switch (result) {
    case 'badName':
      text = reasons.get('name')
      break;
    case 'min':
      text = reasons.get('min')
      break;
    case 'person':
      text = reasons.get('personal')
      break;
    case 'missingAnswers':
      text = reasons.get('missingAnswers')
      break;
  }
  sendToCilp(text)


  document.getElementById("result").innerHTML = 'copied';
}

function GetSelectedText2() {


  let s = toTitleCase(textArea.value)

  sendToCilp(s)


  document.getElementById("result").innerHTML = 'copied';
  textArea.value = ''
}

function sendToCilp(s) {
  var copyhelper = document.createElement('input');
  copyhelper.className = 'copyhelper'
  document.body.appendChild(copyhelper);
  copyhelper.value = s;
  copyhelper.select();
  document.execCommand("copy");
  document.body.removeChild(copyhelper);
}

// LowerCase, Title And Sentence Case Converter Tool



function sentenceCase(str) {
  var str = str.toLowerCase().replace(/\si\s/g, ' I ');
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str
}

//reference: https://github.com/gouch/to-title-case
function toTitleCase(str) {
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
  var str = str.toLowerCase()
  return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

//reference: https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
function CapitalCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

function lowerCase(str) {
  return str.toLowerCase();
}

function upperCase(str) {
  return str.toUpperCase();
}