function Calcular() {
    var co = Number(window.document.getElementById('co').value)
    var ca = Number(window.document.getElementById('ca').value)
    var p = window.document.getElementById('p')
    var quahipo = (co * co) + (ca * ca)
    var hipo = Math.sqrt(quahipo)
    p.innerHTML = `A hipotenusa do triângulo é ${hipo}`
}