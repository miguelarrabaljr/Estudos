function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value < 1500 || fano.value > ano) { window.alert('[ERRO] Verifique os dados e tente novamente')} 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('foto')

        if (fsex[0].checked) {genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.src = "menino.png"
            } else if (idade <= 20) {
                //Jovem
                img.src = "rapaz.png"
            } else if (idade <= 59) {
                //Adulto
                img.src = "homem.png"
            } else if (idade <=100) {
                //Idoso
                img.src = "idoso.png"
            } else {
                img.src = "jaera.png"
            }
        }
        else if (fsex[1].checked) {genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.src = "menina.png"
            } else if (idade <= 20) {
                //Jovem
                img.src = "garota.png"
            } else if (idade <= 59) {
                //Adulto
                img.src = "mulher.png"
            } else if (idade <=100) {
                //Idoso
                img.src = "idosa.png"
            }else {
                img.src = "jaera.png"
            }
        }

        res.innerHTML = `<p>Você é ${genero}  e este ano você completa ${idade} anos de idade.</p>`
        res.appendChild(img)
    }
}