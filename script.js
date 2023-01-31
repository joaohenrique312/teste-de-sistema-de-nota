function calcular(){
    //Variáveis dos inputs do html
    var name = document.getElementById('nome').value
    var n1 = document.getElementById('np')
    var n2 = document.getElementById('nt')
    var n3 = document.getElementById('na')
    var nfres = document.getElementById('res')

    if(n1,n2,n3.value == 0){ //Nota não inserida
        window.alert('Digite os números nos inputs abaixo.')
        nfres.innerHTML = '<p>Nenhuma nota foi inserida.</p>'
    } else{ //Números das variáveis de notas
        let p = Number(n1.value)
        let t = Number(n2.value)
        let a = Number(n3.value)
        let f = (p+t+a)/3
        if(f<6){ //Resultado final 
            nfres.innerHTML = `<p>O aluno ${name} foi reprovado. A nota final foi <strong>${f}</strong>.</p>`
        } else{
            nfres.innerHTML = `<p>O aluno ${name} foi aprovado! A nota final foi <strong>${f}</strong>. Boa semana de descanso!`
        }
    }
}