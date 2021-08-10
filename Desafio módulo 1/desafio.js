/*Situação problema:
Você foi contratado por uma empresa de seguro de vida para criar uma função que retorna uma lista com todos os clientes que possuem idade entre 18 e 26 anos. Sua função deve retornar uma nova lista contendo apenas os clientes que possuem idade
igual ou maior que 18 e menor ou igual a 26. */

var dadosClientes = [
	{
		nome: "Lucas",
		sobrenome: "da Silva",
		idade: 21,
		genero: "Masculino",
		plano: "full",
		carencia: false,
		aquisicao: "12/01/2019"
	},
	{
		nome: "Ana",
		sobrenome: "Lima",
		idade: 17,
		genero: "Feminino",
		plano: "medium",
		carencia: false,
		aquisicao: "17/03/2019"
	},
	{
		nome: "Adriana",
		sobrenome: "Menezes",
		idade: 27,
		genero: "Feminino",
		plano: "full",
		carencia: true,
		aquisicao: "14/09/2020"
	},
{
		nome: "Marcos",
		sobrenome: "Santos",
		idade: 24,
		genero: "Masculino",
		plano: "full",
		carencia: true,
		aquisicao: "25/06/2019"
	},
{
		nome: "Maria",
		sobrenome: "Nascimento",
		idade: 54,
		genero: "Feminino",
		plano: "full",
		carencia: true,
		aquisicao: "15/10/2015"
	},
{
		nome: "Gabriel",
		sobrenome: "Rodrigues",
		idade: 22,
		genero: "Masculino",
		plano: "medium",
		carencia: false,
		aquisicao: "25/01/2021"
}
]

 var retornaLista = array => {
    function arrayFinal(array) {
        return array.idade >= 18 && array.idade <= 26;
    }
    return array.filter(arrayFinal)    
} 

console.log(retornaLista(dadosClientes))

//    module.exports.retornaLista = (array) => {
 //   function filtrar(array) {
 //       return array.idade >= 18 && array.idade <= 26;
 //   }
 //   return array.filter(filtrar)
//    }
