const { databaseConnection } = require('./connection')

const pokemons = {}

async function salvarPokemons(pokemon){

    //const queryInsertPokemon = `INSERT INTO pokemons(nome_pokemon, tipo) VALUES ('${pokemon.nome}', '${pokemon.tipo}')`

    //const result = await databaseConnection.raw(queryInsertPokemon)

    const insertPokemon = {
        nome_pokemon: pokemon.nome,
        tipo: pokemon.tipo,
        local_origem: pokemon.origem
    }

   const result = await databaseConnection('pokemons').insert(insertPokemon)

    if (result){
        return {
            nome: pokemon.nome,
            tipo: pokemon.tipo,
            origem: pokemon.origem,
            id: result[0]
        }
    } else
        console.error("Deu erro!")
        return {
            error: "Deu erro na inserção"
        }
}

async function mostrarPokemon(id){

    const result = await databaseConnection('pokemons').where({ id })

    return result[0]

    //const result = await databaseConnection.where({ id }).select('nome_pokemon', 'tipo', 'id').from('pokemons')

    //const querySelectPokemon = `SELECT * FROM pokemons WHERE id = ${id}`

    //const result = await databaseConnection.raw(querySelectPokemon)


}

async function mostrarpokemons(){

    const result = await databaseConnection('pokemons')

    return result

    //const querySelectPokemon = `SELECT * FROM pokemons`

    //const result = await databaseConnection.raw(querySelectPokemon)


}

async function atualizarPokemon(id, pokemon){
    const updatePokemon = {
        nome_pokemon: pokemon.nome,
        tipo: pokemon.tipo,
        local_origem: pokemon.origem
    }

   const result = await databaseConnection('pokemons').where({ id }).update(updatePokemon)

    if (result){
        return {
            nome: pokemon.nome,
            tipo: pokemon.tipo,
            origem: pokemon.origem,
            id
        }
    } else
        console.error("Deu erro!")
        return {
            error: "Deu erro na inserção"
        }

}

async function deletarPokemon(id){

    const result = await databaseConnection('pokemons').where({ id }).del()

    return result[0]
}

function batalhaPokemon(id1, id2){

    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10

    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        if(pokemon1.tipo == pokemon2.fraqueza){
            pokemon2.hp = pokemon2.hp - superEfetivo
        } else if(pokemon1.tipo == pokemon2.resistencia){
            pokemon2.hp = pokemon2.hp - naoEfetivo
        } else {
            pokemon2.hp = pokemon2.hp - efetivo
        }
    }

    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        if(pokemon2.tipo == pokemon1.fraqueza){
            pokemon1.hp = pokemon1.hp - superEfetivo
        } else if(pokemon2.tipo == pokemon1.resistencia){
            pokemon1.hp = pokemon1.hp - naoEfetivo
        } else {
            pokemon1.hp = pokemon1.hp - efetivo
        }
    }

    if(pokemon1.hp < 0) pokemon1.hp = 0
    if(pokemon2.hp < 0) pokemon1.hp = 0

    return '$(pokemon1.nome): $(pokemon1.hp) / $(pokemon2.hp): $(pokemon2.hp)'
}


module.exports = {salvarPokemons, mostrarPokemon, mostrarpokemons, atualizarPokemon, deletarPokemon, batalhaPokemon}

