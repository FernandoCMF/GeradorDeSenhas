/*  
  Fazendo relações das variaveis com os elementos no arquivo index.html 
  cada um com seu respectivo ip

  sliderElemente = está selecionando o id 'slider'
  */

let sliderElement = document.querySelector("#slider");

let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#sizePassword");

let password = document.querySelector("#password");

let passwordContent = document.querySelector("#password__content");
//  ------------------------------------------------------------------------------

//  charset usado para informar quais caracteres tera na senha gerada
let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%&*()_-+=?:><{}";

// Variavel que vai salvar a senha gerada
let newPassword = "";

/* 
  oninput é uma não recomendada de ficar escutando um evento de um elemento 
  funciona como se fosse um addEventListener(mais recomendado a se usar)
  */
sizePassword.innerHTML = sliderElement.value;
slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

/*
Como o nome ja diz essa função é responsavel por gerar a senha...Como?
*/
function generatePassword() {
  let pass = "";
  // Variavel usada para receber a senha gerada

  // i = Sera usado para percorrer o tamanho que foi escutado na função anterior
  // n = Recebe o tamanho da nossa base de caracteres que sera usada
  // ----------- Dentro do for
  // pass = Em cada loop o pass vai receber um valor em string randomico entre o indice 0 até o ultimo indice no charset
  // chartAt = Quer dizer que vai ser um retorno em string
  // Math.floor = Um numero inteiro
  // Math.random() * n = Valor aleatorio entre o tamanho de charset
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  // PasswordContent está relacionado ao id password__content que vai ser usado apenas para mostrar conteudo na hora que o remove hide for chamado.
  /*
  classList = Propriedade que faz a leitura de um elemento e usado o metodo remove, 
  iremos remover a subclasse hide usado no password__content fazendo que o conteudo 
  seja visto
  */
  passwordContent.classList.remove("hide");

  /*
  Aqui vamos fazer que a newPassword receba a senha gerada e vamos usar a variavel newPassword na outra função 
  */
  password.innerHTML = pass;
  newPassword = pass;
}

/*
 Nessa função tem um metodo navigator.clipboad com a propriedade writeText que 
 que a função dele vai ser copiar em texto o que foi recebida na função.
 Nesse caso sendo ativa com o metodo onclick.
*/
function copyPassword() {
  alert("Senha copida com sucesso!!");
  navigator.clipboard.writeText(newPassword);
}
