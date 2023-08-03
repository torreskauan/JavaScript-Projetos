
function horaAgora(){
    var data = new Date()
    console.log(`ANTES: ${data} `)

    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    console.log(`DEPOIS: ${hora}:${min}:${sec}`)
}

horaAgora()
