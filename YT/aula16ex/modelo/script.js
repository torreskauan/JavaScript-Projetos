function adicionar(){
    var num1 = document.getElementById('num')
    var tab = document.getElementById('tab')
    var num =Number(num1.value)
    var arr =[]

    if (num.length == 0 ){
        window.alert('Digite um número.')
    }else if(num <1 || num >100  ){
        window.alert('Digite um número válido.')
    }else{
        let elem = document.createElement('option')
        elem.text= `Elemento ${num} adicionado. `
        tab.appendChild(elem)

        if (num == arr.indexOf(num(n))){
            window.alert('aaaaa')
        }
        arr.push(num)
        
        
        
    }
}

