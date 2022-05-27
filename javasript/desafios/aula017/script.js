

    var numin = document.getElementById('numberin')
    var numadd = document.getElementById('seladd')
    var res = document.getElementById('res')
    var valores = []

    function add() {
        if (numin.value <= 0 || numin.value >= 11) {
            window.alert('Por favor informe um número válido')
        }
        else {
            valores.push(Number(numin.value))
            var item = document.createElement('option')
            item.text = `O valor ${numin.value} foi adicionado à lista.`
            numadd.appendChild(item)
            res.innerHTML = ''
        }
        numin.value = ''
        numin.focus()
    }

    function exe() {
        if (valores.length == 0) {
            window.alert('Operação inválida. Primeiro adicione pelo menos 1 número.')
        }
        else {
                
        var tot = valores.length
        var bigger = valores[0]
        var smaller = valores[0]
        var add = 0
        var ave = 0


        for (var pos in valores) {
            add += valores[pos]
            if (valores[pos] > bigger)
                bigger = valores[pos]
            if (valores[pos] < smaller)
                smaller = valores[pos]
        }

        ave = add / tot
        
        res.innerHTML = ''
        res.innerHTML += `<p> Você adicionou <strong>${tot}</strong> notas à lista.`
        res.innerHTML += `<p>A menor nota do aluno é <strong>${smaller}</strong>.</p>`
        res.innerHTML += `<p>A maior nota do aluno é <strong>${bigger}</strong>.</p>`
        res.innerHTML += `<p>A soma de todas as notas do aluno é <strong>${add}</strong>.</p>`
        res.innerHTML += `<p>A média do aluno é <strong>${ave}</strong>.</p>`
        
    
        if (ave < 7.0) {
            res.innerHTML +=`<p><strong>[REPROVADO]</strong> O aluno não atingiu média necessaria. </p>`
        } else {
            res.innerHTML +=`<p><strong>[APROVADO]</strong> O aluno atingiu média necessaria.</p>`
        }
    
    
    }


    }