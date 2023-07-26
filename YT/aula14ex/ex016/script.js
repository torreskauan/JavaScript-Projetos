function contar() {
    var ini = document.getElementById('numI');
    var fim = document.getElementById('numF');
    var pas = document.getElementById('numP');
    var msg = document.getElementById('msg');

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERROR] Digite os números.');
    } else {
        msg.innerText = 'Contando:'
        var i = Number(ini.value);
        var f  = Number(fim.value);
        var p = Number(pas.value);
        var c = i
    
        if (i < f){
            while ( c <= f){
            msg.innerHTML += `\u{1F449} ${c} `
            c += p
            }
        }else{
            while ( c >= f){
                msg.innerHTML += `\u{1F449} ${c} `
                c -= p
            } 
        }    

    }



}
