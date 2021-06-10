let characters = "";
let passwordLength = 0;
// Uppercase method
const setUpperCase = (isUpperCase) => {
  if (isUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return "";
};
// Lowercase
const setLowerCase = (isLowerCase) => {
  if (isLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  return "";
};
// Special characters
const setSymbols = (isSymbol) => {
  if (isSymbol) {
    characters += "!@#$%^&*()<>,.?/[]{}-=_+|/";
  }
  return "";
};
// Numbers
const setNumber = (isNumeric) => {
  if (isNumeric) {
    characters += "0123456789";
  }
  return "";
};
// Random
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Password characters
const passwordCharacters = () => {
  const characterList = characters;
  let password = "";
  if (characterList.length > 0) {
    for (let i = 0; i < passwordLength; i++) {
      password += characterList[getRandomInteger(0, characterList.length - 1)];
    }
    characters = "";
    passwordLength = 0;

    return password;
  }
};
// Set password length
export const setPasswordLength = (length) => {
  passwordLength = length;
  return passwordLength;
};

export const generatePasswordLength = () => {
  return passwordLength;
};
// Generate password method
export const generatePassword = (passwordProps, pwdLength) => {
  const { uppercase, lowercase, symbols, numbers } = passwordProps;

  setPasswordLength(pwdLength);
  setUpperCase(uppercase);
  setLowerCase(lowercase);
  setSymbols(symbols);
  setNumber(numbers);

  const password = passwordCharacters();
  return password;
};
// Copy to clipBoard
export const copyToClipBoard = (elementRef) => {
  elementRef.select();
  document.execCommand("copy");
};