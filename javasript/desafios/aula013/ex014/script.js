function load() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var time = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${time} horas e ${minuto} minutos.`
if (time >= 0 && time < 12) {
    //BOM DIA
    img.src = "manha200.png"
    document.body.style.background = '#F2DBA7'
} else if (time >= 12 && time < 18) {
    //BOA TARDE
    img.src = "tarde200.png"
    document.body.style.background = '#F3F4F3'
} else {
    //BOA NOITE
    img.src = "noite200.png"
    document.body.style.background = '#6D7D7F'
}

}