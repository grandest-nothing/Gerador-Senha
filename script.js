const passInput = document.querySelector("#inputPasswordId");
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="inputLengthId"]');
const btnGerar = document.querySelector("#btnGerar");

const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector('#chkNumberId');
const chkSymbols = document.querySelector("#chkSymbolsId");

/*array de numeros*/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/*array de simbolos*/
const symbols = ["!", "@", "#", "$", "%", "&"];
/*gera array de letras*/
const characters = Array.from(Array(26)).map((_, i) => i + 97);
/*forçando uma letra minuscula */
const lowerCaseCharacters = characters.map((item) => String.fromCharCode(item));
/*forçando uma letra maiuscula */
const upperCaseCharacters = lowerCaseCharacters.map((item) => item.toUpperCase());

/*numero do lado da barra*/
infoLength.innerHTML = lenInput.value;
lenInput.addEventListener("change", () => {
    infoLength.innerHTML = lenInput.value;
})

/*adicionando as condicionais no botão*/
btnGerar.addEventListener("click", () => {
    generatePassword(
        chkNumber.checked,
        chkSymbols.checked,
        chkLower.checked,
        chkUpper.checked,
        lenInput.value
    );
});

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    lenght 
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? lowerCaseCharacters : []),
        ...(hasUppercase ? upperCaseCharacters : []),
    ];

    if (newArray.length === 0) return;

    let password = "";

    for (let i = 0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex];
    }

    passInput.value = password;
}