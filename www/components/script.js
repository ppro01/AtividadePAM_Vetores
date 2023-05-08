let nomes = [];
var insertName;
var barraPesquisa
const navbar = document.querySelector('.navbar-lateral');
const lista = document.querySelector('.list')

function vetorPush(){
    insertName = document.getElementById('insertName').value;
    if(insertName === ''){
        alert("Insira um nome válido")
    }
    else{
        nomes.push(insertName);
        alert("Cadastro Efetuado");
    }
}

function vetorUnshift(){
    insertName = document.getElementById('insertName').value;
    if(insertName === ''){
        alert("Insira um nome válido")
    }
    else{
        nomes.unshift(insertName);
        alert("Cadastro Efetuado no início");
    }
}

function vetorPop(){
    alert("Último nome excluído");
    nomes.pop();
}

function vetorShift(){
    alert("Primeiro nome excluído");
    nomes.shift();
}

function exibir(){
    if(nomes.length === 0){
        alert("Não tem nomes cadastrados")
    }
    else{
        alert(nomes);
    }
}

function Pesquisar(){
    barraPesquisa = document.getElementById('barrapesquisa').value;
    
    if(barraPesquisa < nomes.length){
        alert(nomes[barraPesquisa]);
    }
    else{
        alert('Posição não cadastrada');
    }
    
    
    /*if(nomes.length === 0){
        alert('Não há nomes cadastrados');
    }
    else{
        let nomesVerificador = false;
        for(let j = 0; j < nomes.length; j++){
            if(barraPesquisa === nomes[j]){
                alert(nomes[j]);
                nomesVerificador = true;
            }
        }
        if(!nomesVerificador){
            alert('Esse nome não está cadastrado');
        }
    }*/
}

function listarNomes(){
    navbar.classList.add('active');
    lista.innerHTML = '';

    for(let j = 0; j < nomes.length; j++) {
        let li = document.createElement("li");
        li.innerText = nomes[j];
        lista.appendChild(li);
    }
}

function btnAtivar(){
    navbar.classList.add('active');
}

function btnFechar(){
    navbar.classList.remove('active');
}
