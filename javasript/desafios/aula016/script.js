function make() {

var number = document.getElementById('numberin')
var tab = document.getElementById('seltab')

if (number.value == 0 ) {
    window.alert('Por favor digite um número!')
} else { 
    var n = Number(number.value)
    var coe = 1
    tab.innerHTML = ''
    while (coe <= 10) {
        var item = document.createElement('option')
        item.text = `${n} x ${coe} = ${n*coe}`
        tab.appendChild(item)
        coe ++
    }
}
}