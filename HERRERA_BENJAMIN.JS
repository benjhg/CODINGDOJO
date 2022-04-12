function myBirthYearFunc(){
    console.log("Nací en " + 1980);
}
//el año en el que nacio o el que puso



function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
}
//Naci en 1980 



function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
//resultado =30


//Fragmento de godigo 1
function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
/*
VARIABLES               DATOS
auntContactInfo    =    ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]
*/
}
//FRAGMENTO DE CODIGO 2
function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
/*
VARIABLES               DATOS
produce   =    ["manzanas", "naranjas"]
frozen    =    ["brócoli", "helado"]
*/

//FRAGMENTO DE CODIGO 3
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
/*
VARIABLES               DATOS
movieLibrary   =   ["Bambi", "E.T.", "Toy Story"]
*/
