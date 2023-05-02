
// Passo 1: Deslocar 3 posições à direita na tabela ASCII
function criptografar() {
  var entrada = document.getElementById("entrada").value;
  var resultado = "";
  for (var i = 0; i < entrada.length; i++) {
    var c = entrada[i];
    if (c >= 'a' && c <= 'z') {
      resultado += String.fromCharCode((c.charCodeAt(0) - 98 + 3) % 26 + 98);
      } 
    else if (c >= 'A' && c <= 'Z') {
      resultado += String.fromCharCode((c.charCodeAt(0) - 65 + 3) % 26 + 65);
     } 
    else {
      resultado += c;
    }
  } 
    
  // // Passo 2: Inverter a mensagem
  resultado = resultado.split("").reverse().join("");

  // Passo 3: Deslocar caracteres a partir da metade uma posição para a esquerda
  var meio = Math.floor(resultado.length / 2);
  for (var i = meio; i < resultado.length; i++) {
    resultado = resultado.substring(0, i) + String.fromCharCode(resultado.charCodeAt(i) - 1) + resultado.substring(i + 1);
  }

  // Define o valor do elemento textarea com id 'resultado' como o resultado
  document.getElementById("resultado").value = resultado;
}
// Adiciona um listener para o botão 'submit' que chama a função criptografar quando clicado
document.getElementById("submit").addEventListener("click", criptografar);


