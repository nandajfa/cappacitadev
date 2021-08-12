const { response } = require('express')
const express = require('express')

const app = express()

const dataBase = require('./dataBase')

app.get('/pokemons', (req, res) => {
    res.send(dataBase.mostrarPokemons())
})

app.get('/pokemons/:id', (req, res) => {
    res.send(dataBase.mostrarPokemon(req.params.id))
})

app.post('/pokemons', (req, res) => {
    const pokemon = dataBase.salvarPokemons({
        nome: req.body.nome,
        tipo: response.body.tipo
    })
    res.send(pokemon)
})


app.listen(3003)
