let valores = [8,1,7,4,2,9,6]

valores.sort()
/*
for(let posicao=0 ; posicao < valores.length ; posicao++) {
    console.log(`Valor ${valores[posicao]} está na posição ${posicao}`)
*/

for(let posicao in valores) {
    console.log(`Valor ${valores[posicao]} está na posição ${posicao}`)
}