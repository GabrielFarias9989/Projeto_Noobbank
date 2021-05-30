let user = document.getElementById("user")
let pwd = document.getElementById("pwd")
let box2 = document.querySelector(".box2")
let box = document.querySelector(".box")

function carrega() {
  if(user.value.length > 0 && pwd.value.length > 0){
    box.style.display = "none"
    box2.style.display = "block"
    box2.innerHTML = `<h2>Bem vindo ${user.value}</h2>`
  } else {
    window.alert("Erro: Campos Vazios")
  }
}