let medidas = [1,2,3,4,5,6,7]

console.log(`Temos disponíveis as medidas ${medidas}`)

let selected = 8
let box = medidas.indexOf(selected)
if(box == -1) {
    console.log(`A medida ${selected} não está disponivel`)
} else {
    console.log(`O tamanho ${selected} está no armário ${box}.`)
}