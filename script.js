let sliderElement = document.querySelector('#slider');

let alphabetElement = document.querySelector('#alphabet');

let uppercaseAlphabetElement = document.querySelector('#uppercaseAlphabet');

let numberElement = document.querySelector('#numbers');

let specialCharactersElement = document.querySelector('#specialCharacters');

let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#sizePassword');

let password = document.querySelector('#password');

let passwordContent = document.querySelector('#password__content');

let charset =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%&*()_-+=?:><{}';

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

let uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let numbers = '0123456789';

let specialCharacters = '!@#%&*()_-+=?:><{}';

let newPassword = '';

sizePassword.innerHTML = sliderElement.value;
slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generateAlphabet() {
  let pass = '';
  for (let i = 0, n = alphabet.length; i < sliderElement.value; i++) {
    pass += alphabet.charAt(Math.floor(Math.random() * n));
  }
  passwordContent.classList.remove('hide');
  password.innerHTML = pass;
  newPassword = pass;
}

function generateUppercaseAlphabet() {
  let pass = '';
  for (let i = 0, n = uppercaseAlphabet.length; i < sliderElement.value; i++) {
    pass += uppercaseAlphabet.charAt(Math.floor(Math.random() * n));
  }
  passwordContent.classList.remove('hide');
  password.innerHTML = pass;
  newPassword = pass;
}

function generateNumbers() {
  let pass = '';
  for (let i = 0, n = numbers.length; i < sliderElement.value; i++) {
    pass += numbers.charAt(Math.floor(Math.random() * n));
  }
  passwordContent.classList.remove('hide');
  password.innerHTML = pass;
  newPassword = pass;
}

function generateSpecialCharacters() {
  let pass = '';
  for (let i = 0, n = specialCharacters.length; i < sliderElement.value; i++) {
    pass += specialCharacters.charAt(Math.floor(Math.random() * n));
  }
  passwordContent.classList.remove('hide');
  password.innerHTML = pass;
  newPassword = pass;
}

function generateAll() {
  let pass = '';

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  passwordContent.classList.remove('hide');
  password.innerHTML = pass;
  newPassword = pass;
}

console.log(alphabetElement.checked);

function generatePassword() {
  //Only one case
  if (
    alphabetElement.checked === true &&
    uppercaseAlphabetElement.checked === false &&
    numberElement.checked === false &&
    specialCharactersElement.checked === false
  ) {
    generateAlphabet();
    console.log('Alfabeto true');
  } else if (
    uppercaseAlphabetElement.checked === true &&
    alphabetElement.checked === false &&
    numberElement.checked === false &&
    specialCharactersElement.checked === false
  ) {
    generateUppercaseAlphabet();
    console.log('Alfabeto maiusculo true');
  } else if (
    numberElement.checked === true &&
    uppercaseAlphabetElement.checked === false &&
    alphabetElement.checked === false &&
    specialCharactersElement.checked === false
  ) {
    generateNumbers();
  } else if (
    specialCharactersElement.checked === true &&
    numberElement.checked === false &&
    uppercaseAlphabetElement.checked === false &&
    alphabetElement.checked === false &&
    specialCharactersElement.checked === true
  ) {
    generateSpecialCharacters();
  } else {
    generateAll();
  }
}

function copyPassword() {
  alert('Senha copida com sucesso!!');
  navigator.clipboard.writeText(newPassword);
}
