var nome = window.prompt('Nome do aluno')
var n1 = Number (window.prompt('Nota da prova parcial'))
var n2 = Number(window.prompt('Nota da prova trimestral'))
var n3 = 2
var soma = n1 + n2 / n3
var res = soma > 7?'aprovado':'reprovado'
document.writeln('A média trimestral do '+nome ,' foi  '+ soma+ ' logo, ele foi ' + res)
