function Converter(){
 var cidade = window.document.getElementById('cidade').value;
 var celsius = Number(window.document.getElementById('celsius').value);
 var fa = (celsius * 1.8) + 32;
 var kelvin = celsius + 273.15;
 var mensagem = window.document.getElementById('mensagem');
 mensagem.innerHTML = `<html>A temperatura de ${cidade} corresponde a ${fa} <sup>o</sup>F e ${kelvin} kelvins.`;
 if (celsius > 32) {
    mensagem.innerHTML += ` Está quente!`
 } else if (celsius < 15){
    mensagem.innerHTML += " Está frio! "
 } 
}