import { Pokemon } from "../types";

const fetchPokemon = async (pokemonName: string):Promise<Pokemon> => {
    const apiURL: string = "https://pokeapi.co/api/v2/pokemon"
    try {
        const response = await fetch(`${apiURL}/${pokemonName}`)

        if(!response.ok){
            throw new Error(`HTTP error with status ${response.status}`)
        }

        const data = await response.json();
        const { id, name, sprites } = data;
        const img = sprites.front_default;

        const pokemon: Pokemon = {
            id,
            name,
            img,
        };
        
        return pokemon;
    } catch (error) {
        console.error(error)
        throw error
    }
}

export default fetchPokemon;