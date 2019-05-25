var keys = [];

function terDiv() {
  terminal = document.createElement("DIV");
  terminal.style.position = "absolute";
  terminal.style.width = "100%";
  terminal.style.height = "100%";
  terminal.style.overflow = "auto";
  terminal.id = "terminal";
  terminal.style.backgroundColor = "black";
  terminal.style.color = "#008F11";
  document.body.appendChild(terminal);
  document.body.style.margin = "0";
}
function addLine(text, job, time = 100, i = 0) {
  if (i >= text.length) {
    if (job) {
      job();
    }
    return;
  }
  if (i === 0) {
    document.getElementById("terminal").innerHTML += "<br>>";
    text = " " + text;
  }
  document.getElementById("terminal").innerHTML += text[i];
  window.setTimeout(addLine.bind(this, text, job, time, i + 1), time);
}
function add(text, job, time = 100, i = 0) {
  if (i >= text.length) {
    if (job) {
      job();
    }
    return;
  }
  if (i === 0) {
    document.getElementById("terminal").innerHTML += "<br>";
    text = " " + text;
  }
  document.getElementById("terminal").innerHTML += text[i];
  window.setTimeout(add.bind(this, text, job, time, i + 1), time);
}
function addSpace() {
  document.getElementById("terminal").innerHTML += "<br>";
}
function clear() {
  document.getElementById("terminal").innerHTML = "";
}
terDiv();
