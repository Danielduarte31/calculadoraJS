function numero(num) {
    var conta = document.getElementById('atual').innerHTML
    document.getElementById('atual').innerHTML = conta + num

}

function apagarTudo() {
    document.getElementById('atual').innerHTML = ""
    document.getElementById('historico').innerHTML = ""
}

function apagarAtual() {
    document.getElementById('atual').innerHTML = ""
}

function del() {
    var conta = document.getElementById('atual').innerHTML

    document.getElementById('atual').innerHTML = conta.substring(0, conta.length - 1)
}

function calcular() {
    var conta = document.getElementById('atual').innerHTML
    if (conta) {
        document.getElementById('atual').innerHTML = eval(conta)
        document.getElementById('historico').innerHTML = conta
    } else {
        document.getElementById('atual').innerHTML = 'ERRO'
    }
}