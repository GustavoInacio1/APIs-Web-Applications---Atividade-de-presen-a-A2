function calculate(){

    if (typeof(parseFloat(document.querySelector('#altura').value)) !== 'number' || isNaN(parseFloat(document.querySelector('#altura').value)) || parseFloat(document.querySelector('#altura').value) == 0 ){
        document.querySelector('#imc').innerHTML = "Dados de altura incorretos";
    }
    else if (typeof(parseFloat(document.querySelector('#peso').value)) !== 'number' || isNaN(parseFloat(document.querySelector('#peso').value)) ){
        document.querySelector('#imc').innerHTML = "Dados de peso incorretos";
    }
    else{
        var height = parseFloat(document.querySelector('#altura').value);
        var weight = parseFloat(document.querySelector('#peso').value);
        var imc = Math.round(weight *100/ Math.pow(height,2))/100;
        var resultadoText = "";
        if (imc>30){
            resultadoText = "obesidade";
        }
        if (imc>24.9 & imc< 30){
            resultadoText = "sobrepeso";
        }
        if (imc>18.5 & imc< 24.9){
            resultadoText = "normal";
        }
        if (imc< 18.5){
            resultadoText = "magreza";
        }
        var resultado = "Seu valor de IMC é: " + imc.toString() + " kg/m², o que indica " + resultadoText.bold();
        document.querySelector('#imc').innerHTML = resultado;
    }
}

