function verificar() {
    var data = new Date()
    var anoa = data.getFullYear() //ano atual
    var ano = window.document.getElementById('txtano') //ano digitado
    var res = window.document.querySelector('div#res') 
    
    if (ano.value.lenght == 0 || ano.value > anoa){ //conferidor de anos estranhos 
        res.innerHTML = "<strong>[ERROR] Algo deu errado, digite uma data valida.</strong>"
        res.style.color ="red"
    }else{
        var sex = window.document.getElementsByName('sex') //pegando o sexo
        var idade = anoa - Number(ano.value) //idade do usuario
        var gen = '' //genero 
        var img = document.createElement('img') //criando uma imagem em algum lugar (nao especificado ainda)
        img.setAttribute('id','foto') // atribuindo id=foto para a img

        if (sex[0].checked){ //checador de homem
            var gen = "Homem"
            res.innerHTML = ` Você é um ${gen} com ${idade} anos.`
            res.style.color =' rgb(0, 153, 255)'
            if (idade >= 0 && idade <= 10){
                //KIDS
                img.setAttribute('src', 'assets/homem-crianca.png')
            }else if( idade > 10 && idade <=20 ){
                //Teen
                img.setAttribute('src', 'assets/homem-jovem.png')
            }else if (idade > 20 && idade <=60){
                //Adult
                img.setAttribute('src', 'assets/homem-adulto.jpg')
            }else {
                //IDOS)
                img.setAttribute('src', 'assets/homem-idoso.png')
            }

        //}else if (sex.[1].checked){ 

            //checado de mulher

        //}

        }else{ //checador de nao homem
            var gen = " Mulher"
            res.innerHTML = ` Você é um ${gen} com ${idade} anos.`
            res.style.color ='#E072A4'
            if (idade >= 0 && idade <= 10){
                //KIDS
                img.setAttribute('src', 'assets/mulher-crianca.png')
            }else if( idade > 10 && idade <=20 ){
                //Teen
                img.setAttribute('src', 'assets/mulher-jovem.png')
            }else if (idade > 20 && idade <=60){
                //Adult
                img.setAttribute('src', 'assets/mulher-adulta.webp')
            }else {
                //IDOSO
                img.setAttribute('src', 'assets/mulher-idosa.png')

            }


        }
        
        res.appendChild(img) //atribuindo a imagem como filha de res

}

    


}