let listaDeNumerosSorteados = [];
let limiteTentativas = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
      campo.innerHTML = texto;
      responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

exibirInicio();

function exibirInicio() {
  exibirTexto('h1','Jogo do número Secreto');
  exibirTexto('p','Escolha um número entre 1 e 100');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
      exibirTexto('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
      exibirTexto('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
        if(chute < numeroSecreto){
          exibirTexto('p','Tente um número maior.');
        }else{
          exibirTexto('p','Tente um número menor.');
        }
        tentativas++
        limparCampo();
      }
}

function gerarNumeroAleatorio() {
   let numeroSorteado =  parseInt(Math.random() * limiteTentativas + 1);
   let quantidadeDeElementosLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosLista == limiteTentativas);
{
    listaDeNumerosSorteados = []
}
   if (listaDeNumerosSorteados.includes(numeroSorteado)){
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroSorteado);
    console.log(listaDeNumerosSorteados);
    return numeroSorteado;
   }
}
function limparCampo () {
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirInicio();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
    