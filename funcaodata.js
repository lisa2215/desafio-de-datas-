/*
var validaData
console.log(`A data é : ${data}`); */
//const teclado = require (`prompt-sync`)();
var dataHoje = new Date();
var hoje = dataHoje.getDate();
var mesHoje = dataHoje.getMonth();
var anoHoje = dataHoje.getFullYear();
var dia = 2;
var mes = 4;
var ano = 2024;
function dataCorreta(dia, mes, ano) {
    var dataHoje = new Date();
    var hoje = dataHoje.getDate();
    var mesAtual = dataHoje.getMonth();
    var anoAtual = dataHoje.getFullYear();
    if (dia == hoje && mes == mesAtual && ano == anoAtual) {
        console.log({ dataHoje: dataHoje });
    }
    else {
        console.log("A data est\u00E1 incorreta!");
    }
}
/*
const dataHoje = new Date();
console.log(dataHoje.getDate());
console.log(dataHoje.getMonth());
console.log(dataHoje.getFullYear());
*/
