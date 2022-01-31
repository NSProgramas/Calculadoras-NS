function Jogar() {
    var moeda = Number(window.document.getElementById('moeda').value)
    var ale = Math.floor(Math.random() * 2 + 1)
    var p = window.document.getElementById('p')
    if (moeda == 1) {
       if (ale == 1) {
         p.innerHTML = `Você acertou!`
       } else if (ale == 2) {
           p.innerHTML = `Era coroa. O computador ganhou!`
       }
    } else if (moeda == 2) {
        if (ale == 1) {
            p.innerHTML = `Era cara. O computador ganhou!`
        } else if (ale == 2) {
            p.innerHTML = `Acertou!`
        }
    } else {
        alert("Insira um número válido!")
    }
}
