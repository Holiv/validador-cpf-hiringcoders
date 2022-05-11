console.log('JavaScript carregado');

function validacao(){
    console.log('Iniciando validação de CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    //document.getElementById é utilizado para ler o documento (HTML), identificar onde está o elemento com a id especificada entre parenteses.
    //O .value representa qual informação desse elemento será capturada. Nesse exemplo o que está sendo capturado é o valor armazenado no elemento que possui a id 'cpf_digitado'.
    //O valor capturado é então armazenado em uma variável chamada 'cpf'
    let cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    //ciração da função validaCPF que possui como input o valor da variável 'cpf'
    //os inputs são inseridos entre os parenteses.
    //o valo retornado por essa função será armazenado em uma nova variável chamada 'resultadoValidacao'.
    let resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao){
        //similar a linha de código anterior onde o 'getElementById' foi utilizado para capturar um valor usando '.valor', na linha de codigo abaixo é utilizado o '.style.display' para indicar que o estado do display do elemento capturado será alterado.
        document.getElementById('success').style.display = 'block';
    }
    else{
        document.getElementById('error').style.display = 'block';
    }
}

//estruturação da função 'validaCPF'
function validaCPF(cpf){
    let cpfLength = cpf.length;
    console.log(cpfLength);
    if(cpf.length != 11){
        return false;
    }
    else{
            //a função 'substring(x, y)' analiza os caracteres do array da posição x até a posição y determinada entre os parenteses e separadas por virgula.
            let numeros = cpf.substring(0, 9);
            //também é possivel definir apenas o ponto de partida, sem a necessidade de indicar o ultimo caractere do array a ser analisado.
            let digitos = cpf.substring(9);

            let soma = 0;
            for (let i = 10; i > 1; i--) {
                //a função 'charAt' chama o elemento do array da posição determinada pelo valor indicado dentro dos parenteses.
                soma += numeros.charAt(10 - i) * i;
            }
            console.log(soma);

            //a estrutura '(soma % 11) < 2 ?' é similar a uma pergunta em forma de condição. Nesse caso 'pergunta' se o resto do valor da da variavel soma dividida por 11 é 0 ou 1, caso seja é retornado e guardado na variavel 'resultado', caso seja maior do que 1 a condição depois dos ':' seráexecutada, nesse caso a operação matemático sendo a subtração do valor 11 pelo valor do resto de soma dividido por 11.
            let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
            console.log(resultado);
            if (resultado != digitos.charAt(0)){
                return false;
            }
            console.log(digitos.toString().charAt(0) + ' é a primeira posição da variavel soma');

            soma = 0;
            numeros = cpf.substring(0, 10);
            for (let k = 11; k > 1; k--){
                soma += numeros.charAt(11 - k) * k;
            }

            resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

            if (resultado != digitos.charAt(1)){
                return false;
            }

        }
        return true;
}