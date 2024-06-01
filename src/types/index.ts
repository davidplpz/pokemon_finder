export interface Pokemon {
    id: number;
    name: string;
    img: string;
    types: string[];
    cry: string;
}

export interface CardProps {
    pokemon: Pokemon;
}

export interface FormProps {
    onSubmit: (query: string) => void;
}

export interface ApiPokemonType {
    slot: number;
    type: {
        name: string,
        url: string
    }
}