



/*
function validaCNPJ(cnpj) {
    
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999") {
        return false;
    }

    var tamanho = cnpj.length - 2
    var numeros = cnpj.substring(0, tamanho)
    var digitos = cnpj.substring(tamanho)
    var soma = 0;
    var pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }

    var resultado = ((soma % 11) < 2) ? 0 : (11 - soma % 11);
    if (resultado != digitos.charAt(0)) {
        return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        return false;
    }
    return true;
}

function salvar() {
    //alert('Funcionou Salvar') 
    // como chamar a função inserir que está no index aqui??
    var razao = window.document.querySelector('input#txtrazao')
    var nomef = window.document.querySelector('input#txtnome')
    var cnpj = window.document.querySelector('input#txtcnpj')
    var email = window.document.querySelector('input#txtmail')
    var end = window.document.querySelector('input#txtend')
    var cidade = window.document.querySelector('input#txtcidade')
    var estado = window.document.querySelector('input#txtestado')
    var tel = window.document.querySelector('input#txttel')
    var data = window.document.querySelector('input#txtdata')
    var categoria = window.document.querySelector('input#txtcat')
    var stat = window.document.getElementsByName('radstatus')
    var agencia = window.document.querySelector('input#txtag')
    var conta = window.document.querySelector('input#txtconta')

    var status = ''
    if (stat[0].checked) {
        status = 'ativo'
    }
    else {
        status = 'inativo'
    }

    if (razao.value.length == 0) {
        alert('[ERRO] Verificar preenchimento da Razão Social!')
    }

    if (cnpj.value.length == 0) {
        alert('[ERRO] Verificar preenchimento do CNPJ!')
    }
    else {

        if (validaCNPJ(cnpj.value.replace(/[^\d]+/g, "")) == true) {
            res.innerHTML = `Razão Social*: ${razao.value}`
            res.innerHTML += `<p>Nome Fantasia: ${nomef.value} </p>`
            res.innerHTML += `<p>CNPJ*: ${cnpj.value} </p>`
            res.innerHTML += `<p>E-mail: ${email.value} </p>`
            res.innerHTML += `<p>Endereço: ${end.value} </p>`
            res.innerHTML += `<p>Cidade: ${cidade.value} </p>`
            res.innerHTML += `<p>Estado: ${estado.value} </p>`
            res.innerHTML += `<p>Telefone: ${tel.value} </p>`
            res.innerHTML += `<p>Data de Cadastro: ${data.value} </p>`
            res.innerHTML += `<p>Categoria: ${categoria.value} </p>`
            res.innerHTML += `<p>Status: ${status} </p>`
            res.innerHTML += `<p>Agência: ${agencia.value} </p>`
            res.innerHTML += `<p>Conta: ${conta.value} </p>`

            var insert = require("index");
            inserir(req, res, next)

        }
        else {
            alert('CNPJ informado incorreto');
        }
    }

    

}
function editar() {
    //todo
    //chamar função atualizar do index
}
function deletar() {
    //alert('Funcionou Deletar')
}
*/