function gerar(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert(' Digite um número.')
    }else{
        var n1 = Number(num.value)
        tab.innerHTML = ''
        for(let c = 0 ;c <= 10 ; c++ ){
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            tab.appendChild(item)

        }
    }
}