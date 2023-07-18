var divRes = window.document.getElementById('res')
var numComposto = []

function adicionar() {
    var number = window.document.getElementById('txtnum')
    var n = Number(number.value)    
    divRes.innerHTML = ''
    if (n < 1 || n > 100) {
        var erro1 = window.document.createElement('div')
        divRes.appendChild(erro1)
        erro1.innerHTML = `[ERRO] Insira um valor entre 1 e 100.`
        erro1.style.textAlign = 'center'
        erro1.style.border = 'black 2px solid'
        erro1.style.marginTop = '20px'
        erro1.style.marginLeft = '25%'
        erro1.style.marginRight = '25%'
        erro1.style.padding = '10px'
    } else if (numComposto.indexOf(n) != -1){
        // Elemento ainda não existe, por isso ocupa a posição -1
        var erro2 = window.document.createElement('div')
        divRes.appendChild(erro2)
        erro2.innerHTML = `[ERRO] Valor já encontrado na lista.`
        erro2.style.textAlign = 'center'
        erro2.style.border = 'black 2px solid'
        erro2.style.marginTop = '20px'
        erro2.style.marginLeft = '25%'
        erro2.style.marginRight = '25%'
        erro2.style.padding = '10px'
    } else {
        var select = window.document.getElementById('select')
        var option = document.createElement('option')
        select.appendChild(option)
        option.innerHTML += `O valor ${n} foi adicionado.`
        numComposto.push(n)
    }
    number.value = ''
    number.focus()
    // Focus mantém o objeto selecionado
}

function analisar() {    
    divRes.innerHTML = ''
    divRes.style.textAlign = 'center'
    if (numComposto.length == 0) {
        var erro3 = window.document.createElement('div')
        divRes.appendChild(erro3)
        erro3.innerHTML = `[ERRO] Nenhum valor detectado.`
        erro3.style.textAlign = 'center'
        erro3.style.border = 'black 2px solid'
        erro3.style.marginTop = '20px'
        erro3.style.marginLeft = '25%'
        erro3.style.marginRight = '25%'
        erro3.style.padding = '10px'
    } else {
        numComposto.sort()
        var res = document.createElement('div')
        divRes.appendChild(res)
        // Números cadastrados
        if (numComposto ==  1) {
            res.innerHTML += `<p> Temos somente <strong>${numComposto.length}</strong> valor cadastrado. </p>`
        } else {
        res.innerHTML += `<p> Ao todo temos <strong>${numComposto.length}</strong> números cadastrados. </p>`
        }
        // Menor Valor
        menorValor = numComposto[0]
        res.innerHTML += `<p> O menor valor é <strong>${menorValor}</strong>. </p>`
        // Maior Valor
        maiorValor = numComposto[numComposto.length - 1]
        res.innerHTML += `<p> O maior valor é <strong>${maiorValor}</strong>. </p>`
        // Soma de Valores
        let soma = 0
        for (let s = 0; s < numComposto.length; s++) {
        soma += numComposto[s]
        }
        res.innerHTML += `<p> A soma de todos os valores é igual à <strong>${soma}</strong>.</p>`
        // Média dos Valores
        let media = soma / numComposto.length
        res.innerHTML += `<p> A média dos valores é igual à <strong>${media}</strong>.</p>`
    }
    }
