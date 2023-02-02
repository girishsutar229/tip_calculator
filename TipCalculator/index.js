const display = document.getElementById("display");

function appendDisplay(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.toString().slice(0, -1);
}

function calculate() {
  display.value = eval(display.value);
}