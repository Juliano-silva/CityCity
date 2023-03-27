function RandomColor(tamanho){
    var primeiro = "#"
    var caracter = "0123456789abcdef"
    for(var i = 0; i < tamanho; i++){
        primeiro += caracter.charAt(Math.floor(Math.random() * caracter.length))
    } return primeiro
}
document.getElementById("1").style.background = RandomColor(6)
document.getElementById("2").style.background = RandomColor(6)
document.getElementById("3").style.background = RandomColor(6)
document.getElementById("4").style.background = RandomColor(6)
document.getElementById("5").style.background = RandomColor(6)
document.getElementById("6").style.background = RandomColor(6)

const changeThemeBtn = document.querySelector("#change-theme");
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
function loadTheme() {
  const darkMode = localStorage.getItem("dark");
  if (darkMode) {
    toggleDarkMode();
  }
}
loadTheme();
changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();
  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
function Start(){
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("Hora").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("HoraN").innerHTML = h + ":" + m + ":" + s;
  setTimeout(Start,1000);
}
function checkTime(i){
  if (i < 10) {i = "0" + i}; return i
}
