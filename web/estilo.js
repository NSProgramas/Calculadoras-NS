function clicar() {
    var n1 = Number(document.getElementById('txtN1'))
    var n2 = Number(document.getElementById('txtN2'))
    var media = (n1 + n2) / 2
    var p = getElementById('cavalo')
    p.innerText(`A média é ${media}`)
    if (n1 <= 0 && n2 <= 0) {
       window.alert("Insira um número válido, por favor!")
    }

}