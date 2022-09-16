const person ={
    name: "pepe",
    lastname:"perez",
    age:30,
    country:"Colombia"
}
const number =[30,40,50,60];
//---------------------------------------------------------------
//for in para objetos
//---------------------------------------------------------------
for (let atri in person){
    console.log(person[atri]);
}
//---------------------------------------------------------------
//for of para objetos iterables
//---------------------------------------------------------------
for (let ele of number){
    console.log(ele-(ele/2));
}
//---------------------------------------------------------------
//imprimir cada letra
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//funciones declaradas
function sumar(a,b) {
    let suma=a+b;
    console.log(suma);
}
sumar(1,2);
//---------------------------------------------------------------
//funcion expresada
const sumar2= function(a,b){
    let suma= a+b;
    console.log(suma);

}
sumar2(1,2);
//---------------------------------------------------------------
//funcion flecha
const sumar3=(a,b) =>{
    let suma= a+b;
    console.log(suma);
}
sumar3(2,3);
//---------------------------------------------------------------
//un ejemplo de lo anterior
let numero=prompt("Digite un numero");
