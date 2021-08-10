/*Utilize o console para os exercícios a seguir:
a) Crie um array meuNome contendo seu nome completo
b) Imprima na tela a quantidade de caracteres na variável meuNome utilizando o método
.length()
c) Com a variável meuNome invés de imprimir diretamente, guarde na variável qtdLetras
a quantidade de caracteres utilizando o método .length(). Imprima qtdLetras.
d) Na variável minhaFrase = “Vou praticar muito para aprender” imprima qual a posição
no índice do primeiro caractere “p”. Use indexOf().
e) Com a mesma variável imprima a posição no índice da palavra “para”
f) Com a mesma variável verifique se existe o caractere “w” */

var meuNome = ["Jessica", "Fernanda", "Alves", "Marques"]

console.log(meuNome.length)

 var qtdLetras = meuNome.length
 
 console.log(qtdLetras)
	

var minhaFrase = "Vou praticar muito para aprender"

console.log(minhaFrase.indexOf("p"))
console.log(minhaFrase.indexOf("para"))
console.log(minhaFrase.indexOf("w"))
