let titulo = document.getElementById("titulo")
let link = document.querySelector("a");

titulo.innerText = "Fazendo o Desenvolvimento"
link.innerText = "Proz Educação"

let listaNaoOrdenada = document.querySelector("ul")
let listaOrdenada = document.querySelector("ol")

listaNaoOrdenada.innerHTML = `
  <li>Teste1</li>
  <li>Teste2</li>
  <li>Teste3</li>
`
listaOrdenada.innerHTML = `
  <li><a href="https://www.w3schools.com/css/default.asp">W3</a></li>
  <li><a href="ricardo-reis.medium.com/objetos-javascript-e347adc3a8ac">Java</a></li>
  <li><a href="https://www.google.com">Google</a></li>
`