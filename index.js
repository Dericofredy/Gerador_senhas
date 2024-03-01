var contador = 0;
function gerarChave() {
  // define os caracteres possíveis para a chave
  const caracteres = "ABCDEF0123456789";

  // cria uma variável para armazenar a chave gerada
  let chaveGerada = "";

  // Gera 64 caracteres aleatórios
  for (let i = 0; i < 64; i++) {
    // cria índice aleatório dentro da string de caracteres
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);

    // concatenação de caractere da posição aleatória com à chave gerada
    chaveGerada += caracteres[indiceAleatorio];
    /*Adicionando um espaço ou caracter qualquer inseridopara dar espaço a cada 4 caracteres*/
    if ((i + 1) % 4 === 0) {
      chaveGerada += " - ";
    }    
  }
  contador=contador+1;

/*function reset() {
  chaveGerada = ""; // Limpa a chave atual
  gerarChave(); // Gera uma nova chave
  document.getElementById("chave-gerada").innerHTML = chaveGerada; // Exibe a nova chave
}*/

  
  // Exibe a chave gerada no HTML
  document.getElementById("chave-gerada").innerHTML = chaveGerada;
  document.getElementById("contador").innerHTML = contador;

}

