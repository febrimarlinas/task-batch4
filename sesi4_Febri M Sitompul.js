const prompt = require('prompt-sync')();

var angkapertama = parseFloat(prompt('Masukkan angka pertama : '));
var angkakedua = parseFloat(prompt('Masukkan angka kedua : '));
var operator = prompt('Masukkan operator : ');

function hitung(operator,angkapertama,angkakedua){
    switch(operator){
        case '+':
            return angkapertama + angkakedua;
        break;
        case '-':
            return angkapertama - angkakedua;
        break;
        case'*':
            return angkapertama * angkakedua;
        break;
        case'/':
            return angkapertama / angkakedua;
        break;
        default: 
        return "Invalid Operator"
    }
}


console.log("hasil : " + hitung(operator,angkapertama,angkakedua))

