var idade = 70
console.log(`Com ${idade} anos de idade`)
if (idade < 16) {
    console.log ('você não vota')
} else if (idade < 18 || idade > 65) {
    console.log ('para você o voto é opcional')
    }
    else {
        console.log ('para você o voto é obrigatório')
    }