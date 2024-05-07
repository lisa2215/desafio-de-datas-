/*
Crie uma função que ao receber o dia, mês e ano verifica se está correta
retornando a data completa, caso não seja possível pense em uma solução
(acredito que é possível), utilizar a classe/objeto Date() do typescript 
para validação dos dados.
Nome: Elisa Renata Dos Santos Paiva 
*/



/*
var validaData 
console.log(`A data é : ${data}`); */

//const teclado = require (`prompt-sync`)();

const dataHoje = new Date();
const hoje:number = dataHoje.getDate();
const mesHoje:number = dataHoje.getMonth();
const anoHoje:number = dataHoje.getFullYear();

let dia: number = 2;
let mes: number = 4;
let ano: number = 2024;


function dataCorreta(dia:number, mes:number, ano:number): void{
    const dataHoje = new Date();
    
    const hoje:number = dataHoje.getDate();
    const mesAtual:number = dataHoje.getMonth();
    const anoAtual:number = dataHoje.getFullYear();

    if (dia == hoje && mes == mesAtual && ano == anoAtual){
        console.log({dataHoje});
    }
    else{
        console.log(`A data está incorreta!`);
    }
}
/*
const dataHoje = new Date();
console.log(dataHoje.getDate());
console.log(dataHoje.getMonth());
console.log(dataHoje.getFullYear());
*/

