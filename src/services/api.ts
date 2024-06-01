import { Pokemon, ApiPokemonType} from "../types";
import { capitalize } from "../utils/string";


const fetchPokemon = async (pokemonName: string):Promise<Pokemon> => {
    const apiURL: string = "https://pokeapi.co/api/v2/pokemon"
    try {
        const response = await fetch(`${apiURL}/${pokemonName}`)

        if(!response.ok){
            throw new Error(`HTTP error with status ${response.status}`)
        }

        const data = await response.json();
        const { id, name, sprites, types, cries } = data;
        const img = sprites.front_default;
        
        const pokemon: Pokemon = {
            id,
            name,
            img,
            types: types.map((objType: ApiPokemonType) => capitalize(objType.type.name)),
            cry: cries.latest
        };
        
        return pokemon;
    } catch (error) {
        console.error(error)
        throw error
    }
}

export default fetchPokemon;