// 5! = 5.4.3.2.1

function fator(n){
    let fat =1
    for(let c = n; c > 1; c--){
        fat *=c
    }
    return fat
}

console.log(fator(5))



// 5! = 5 . 4! = n . (n-1)!
function fator1(num){
    if (n==1){
        return 1
    }else{
        return n* fator1(n-1)
    }
    
}

console.log(fator(5))