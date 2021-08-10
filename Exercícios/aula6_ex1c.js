/*Uma função que imprima todos os itens do array (você pode definir esta
variável dentro da função):*/

function imprimir() {

var listaDadosClientes = [
    {
    nome: 'Daiane',
    idade: 24,
    endereco: 'Rua Freire, 24, Consolação, São Paulo'
    },
    {
    nome: 'Gabriel',
    idade: 19,
    endereco: 'Rua Armando sá, 47, Perdizes, São Paulo'
    },
    {
    nome: 'Bruno',
    idade: 37,
    endereco: 'Av. Santos Dumont, 978, Belo Horizonte, Minas Gerais'
    }
]

    for(var i = 0; i < listaDadosClientes.length; i++){
        console.log(listaDadosClientes[i])
    }
}

imprimir()