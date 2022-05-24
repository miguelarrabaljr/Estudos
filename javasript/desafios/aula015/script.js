function make(){

var begin = document.getElementById('begin')
var end = document.getElementById('end')
var jump = document.getElementById('jump')
var res = document.getElementById('res')


if (begin.value == 0 || end.value == 0 || jump.value == 0) {
    window.alert('[ERRO] Preencha os dados para iniciar')
} 
else {
    res.innerHTML = 'Contando: '
    var b = Number(begin.value)
    var e = Number(end.value)
    var j = Number(jump.value)

if (b < e) {
    for (var r = b; r <= e; r += j) {
        res.innerHTML += `\u{1F449} ${r} `;
    }
}
    else {
        for (var r = b; r >= e; r -= j) {
            res.innerHTML += `\u{1F449} ${r} `;     
        }
    }
        
    }

}