var verbs = [
  "go",
  "see",
  "jump",
  "run",
  "say",
  "fall",
  "work",
  "speak",
  "accept",
  "apply",
  "bite",
  "breath",
  "think",
  "fly",
  "drive",
  "live",
  "die",
  "hack"
];
var noms = [
  "I",
  "You",
  "We",
  "They",
  "anvil",
  "octupus",
  "house",
  "tree",
  "human",
  "word",
  "waterfall",
  "table",
  "matrix",
  "robot",
  "laptop",
  "fish",
  "city",
  "WLAN",
  "sky",
  "moon"
];
var ads = [
  "fast",
  "slow",
  "big",
  "small",
  "good",
  "tiny",
  "fishy",
  "fancy",
  "yellow",
  "green",
  "blue",
  "red",
  "crazy",
  "stupid",
  "smart",
  "tall",
  "low"
];
var speed = 50;
var qw = ["Where", "What", "How"];

function genText(rpts) {
  if (rpts >= 100) {
    clear();
    rpts = 0;
  }
  var mode = parseInt(Math.random() * 3) + 1;
  console.log(mode);
  if (mode == 1) {
    var nm = noms[parseInt(Math.random() * (noms.length - 1))];
    var vbs = verbs[parseInt(Math.random() * (verbs.length - 1))];
    var adj = ads[parseInt(Math.random() * (ads.length - 1))];
    var adv = ads[parseInt(Math.random() * (ads.length - 1))];
    var text = "";
    if (nm != "I" && nm != "You" && nm != "We" && nm != "They") {
      if (nm[0] == "a") {
        text += "An ";
      } else {
        text += "A ";
      }

      text += adj;

      text += " ";
    }
    text += nm;
    text += " ";
    if (vbs != "go") {
      text += vbs;
    } else if (nm != "I" && nm != "You" && nm != "We" && nm != "They") {
      text += "goe";
    } else {
      text += "go";
    }
    if (nm != "I" && nm != "You" && nm != "We" && nm != "They") {
      text += "s";
    }
    text += " ";
    text += adv;
    text += ".";
  } else if (mode == 2) {
    var text = "";
    var quwo = qw[parseInt(Math.random() * (qw.length - 1))];
    var nm = noms[parseInt(Math.random() * (noms.length - 1))];
    while (nm == "I" || nm == "We" || nm == "You" || nm == "They")
      nm = noms[parseInt(Math.random() * (noms.length - 1))];
    var adj = ads[parseInt(Math.random() * (ads.length - 1))];
    text += quwo;
    text += " is the ";
    text += adj;
    text += " ";
    text += nm;
    text += "?";
  } else {
    var text = "";
    var adj = ads[parseInt(Math.random() * (ads.length - 1)) + 0];
    var vbs = verbs[parseInt(Math.random() * (verbs.length - 1))];
    text += vbs[0].toUpperCase();
    for (var i = 1; i < vbs.length; i++) text += vbs[i];
    text += " ";
    text += adj;
    text += "!";
  }
  addLine(text, null, speed);
  document.getElementById("terminal").scrollTop = document.getElementById(
    "terminal"
  ).scrollHeight;
  setTimeout(
    genText.bind(this, rpts + 1),
    (text.length + 1) * speed + speed * 3
  );
}
function init() {
  addLine("Laba AI", auth, 500);
}
function auth() {
  addSpace();
  addLine("By Nicolas & Stella", icon, 100);
}
function icon() {
  addLine("Icon by Benny", where, 100);
}
function where() {
  addLine("At JugendHackt 2019 cologne!", function() {
    addSpace();
    genText();
  });
}
init();
