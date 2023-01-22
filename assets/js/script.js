const escolha = document.querySelector("#escolha");
const botao = document.querySelector("#button");
// A - Z = 65 á 90
// a - z = 97 á 122


//O evento change() ocorre quando um campo perde o foco para outro campo
escolha.addEventListener("change", function (evento) {
    evento.preventDefault();

    const hide = document.getElementById("hide");
//se o campo selecionado for cifraC adiciona um display:block no id "hide"
        if (evento.target.value == "cifraC") {
            hide.style.display = "block";
        } 
        else {
            hide.style.display = "none";
        }
});


//busca no DOM o formulario com o name "formulario"
var form =  document.forms.formulario

//evento submit
form.addEventListener('submit', function (evento) {
    evento.preventDefault();

//armazenando os atributos do formulario em variaveis
    var texto = form.texto.value;
    var escolha = form.escolha.value;
    var number = form.number.value;
    var rb = form.r1.value;
    var mensagem = '';
// se escolher CifraC retorna a mensagem com a função da cifra de Cesar
    if(escolha == 'cifraC'){
        mensagem = cifra(rb, texto, number);
    }
// se não( se for base) retorna a mensagem com a função da base64
    else{
        mensagem = base(rb, texto);
    }
//armazena a mensagem na variavel resposta e exibe na tela
    var resposta = document.getElementById('mensagem');
    resposta.innerHTML = `<p>${mensagem}</p>`;

    
//quando usuario interagir
    form.texto.focus();
});

/*BASE64*/
function base(r1, texto){
    if(r1 == 'code'){
        return btoa(texto);
    }

    else{
        return atob(texto);
    }
}

