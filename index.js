
var restify = require("restify");
var mysql = require("mysql");

/*
	Criando objeto com as credenciais
	de conexão com o BD
*/
var con = {
    host: "localhost",
    user: "root",
    password: "",
    database: "cadastro"
};



//false - invalido
//true - valido
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

            res.setHeader("content-type", "application/json");
            res.charSet("UTF-8");

            //Printa só para verificar se a informações foram para as variaveis
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


            var connection = mysql.createConnection(con);
            connection.connect();

            var strQuery =
                "INSERT INTO info (razao, nomef, cnpj, email, endereco, cidade, estado, tel, dia, categoria, stat, agencia, conta)" +
                " VALUES ('" +
                razao.value +
                "', " +
                nomef.value +
                ", '" +
                cnpj.value +
                "', " +
                email.value +
                "', " +
                end.value +
                "', " +
                cidade.value +
                "', " +
                estado.value +
                "', " +
                tel.value +
                "', " +
                data.value +
                "', " +
                categoria.value +
                "', " +
                stat.value +
                "', " +
                agencia.value +
                "', " +
                conta.value +
                "');";

            console.log(strQuery);


            connection.query(strQuery, function (err, rows, fields) {
                if (!err) {
                    //Se não houver erros
                    res.json(rows); //Retornamos as linhas
                } else {

                    res.json(err); //Retornamos dados sobre o erro
                }
            });

            connection.end();


        }
        else {
            alert('CNPJ informado incorreto');
        }
    }



}



function atualizar() {
    //Definindo o formato da response

    res.setHeader("content-type", "application/json");
    res.charSet("UTF-8");

    var connection = mysql.createConnection(con);
    connection.connect();

    var strQuery = "UPDATE info SET ";

        if (razao.value != "") {
            strQuery += "razao = '" + razao.value + "',";
        }
        if (nomef.value != "") {
            strQuery += "nomef = " + nomef.value + "',";
        }
        if (email.value != "") {
            strQuery += "email = '" + email.value + "',";
        }
        if (end.value != "") {
            strQuery += "endereco = '" + end.value + "',";
        }
        if (cidade.value != "") {
            strQuery += "cidade = '" + cidade.value + "',";
        }
        if (estado.value != "") {
            strQuery += "estado = '" + estado.value + "',";
        }
        if (tel.value != "") {
            strQuery += "tel = '" + tel.value + "',";
        }
        if (data.value != "") {
            strQuery += "dia = " + data.value + "',";
        }
        if (categoria.value != "") {
            strQuery += "categoria = '" + categoria.value + "',";
        }
        if (stat.value != "") {
            strQuery += "stat = '" + stat.value + "',";
        }
        if (agencia.value != "") {
            strQuery += "agencia = '" + agencia.value + "',";
        }
        if (conta.value != "") {
            strQuery += "conta = '" + conta.value + "',";
        }
        strQuery = strQuery.slice(0, -1);
        strQuery += " WHERE cnpj = " + cnpj.value + ";";


    console.log(strQuery);

    connection.query(strQuery, function (err, rows, fields) {
        if (!err) {
            //Se não houver erros
            res.json(rows); //Retornamos as linhas
        } else {
            //Caso contrário
            res.json(err); //Retornamos dados sobre o erro
        }
    });

    connection.end();

}

function buscar() {

    res.setHeader("content-type", "application/json");
    res.charSet("UTF-8");

    var connection = mysql.createConnection(con);
    connection.connect();

    var strQuery = "SELECT * FROM info; WHERE cnpj =" + cnpj.value;


    console.log(strQuery);


    connection.query(strQuery, function (err, rows, fields) {
        if (!err) {
            //Se não houver erros
            res.json(rows); //Retornamos as linhas
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
        } else {
            //Caso contrário
            res.json(err); //Retornamos dados sobre o erro
        }
    });


    connection.end();
}



function deletar() {
    //Definindo o formato da response
    res.setHeader("content-type", "application/json");
    res.charSet("UTF-8");



    var connection = mysql.createConnection(con);
    connection.connect();

    var strQuery = "DELETE FROM info WHERE cnpj = " + cnpj + ";";


    console.log(strQuery);


    connection.query(strQuery, function (err, rows, fields) {
        if (!err) {
            //Se não houver erros
            res.json(rows); //Retornamos as linhas
        } else {
            //Caso contrário
            res.json(err); //Retornamos dados sobre o erro
        }
    });

    connection.end();


}