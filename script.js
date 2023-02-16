function guardaFormulario(){
    var formCliente = new Object();

    formCliente.nome = document.getElementById("nome").value
    formCliente.sobrenome = document.getElementById("sobrenome").value
    formCliente.idade = document.getElementById("idade").value
    formCliente.genero = document.getElementById("genero").value
    formCliente.comida = document.getElementById("comida").value
    formCliente.videogame = document.getElementById("videogame").value
    formCliente.serie = document.getElementById("serie").value
    formCliente.fortnite = document.getElementById("fortnite").value
    
    var json = JSON.stringify("formCliente");
    console.log(json);

    console.log(formCliente.valueOf())

    document.getElementById("nome2").innerHTML = formCliente.nome;
    document.getElementById("sobrenome2").innerHTML = formCliente.sobrenome;
    document.getElementById("idade2").innerHTML = formCliente.idade;
    document.getElementById("genero2").innerHTML = formCliente.genero;
    document.getElementById("comida2").innerHTML = formCliente.comida;
    document.getElementById("videogame2").innerHTML = formCliente.videogame;
    document.getElementById("serie2").innerHTML = formCliente.serie;
    document.getElementById("fortnite2").innerHTML = formCliente.fortnite;

    window.print();
}

