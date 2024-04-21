function buttonclick(val) {
  document.getElementById("screen").value =document.getElementById("screen").value+ val;
}
function clearDisplay() {
  document.getElementById("screen").value = "";
}
function equalClick() {
  text = document.getElementById("screen").value;
  result = eval(text);
  document.getElementById("screen").value = result;
}
