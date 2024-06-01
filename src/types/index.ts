export interface Pokemon {
    id: number;
    name: string;
    img: string;
}

export interface CardProps {
    pokemon: Pokemon;
}

export interface FormProps {
    onSubmit: (query: string) => void;
}