function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = ''
    msg.innerHTML =`Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src= "assets/manha.png"
        window.document.body.style.background = '#ff8d37'
        
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src =" assets/tarde.png"
        window.document.body.style.background ='#fea549'
        
    }else{
        //BOA NOITE
        img.src= "assets/noite.png"
        window.document.body.style.background = '#354952'
    }


}
