let numeroSecreto = gerarNúmeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.1}

    )
}
function exibirMenagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p','Escolha um número entre 0 - 10');}

exibirMenagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        (exibirTextoNaTela('h1','Você Acertou'));
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativa = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
        (exibirTextoNaTela('p',mensagemtentativa));
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute > numeroSecreto)
            exibirTextoNaTela('p','O número secreto é menor');
        else { 
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }   
        
    }


function gerarNúmeroAleatorio(){
   return parseInt(Math.random() * 10 + 1);
}
function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNúmeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
    
}
