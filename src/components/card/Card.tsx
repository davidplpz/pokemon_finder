import React from 'react';
import { capitalize } from '../../utils/string';
import './Card.css'
import { CardProps } from '../../types';



const Card: React.FC<CardProps> = ({ pokemon }) => {
    return (
        <div className='card__container'>
            <div className='card__image'>
                <img 
                src={pokemon.img}
                alt={`imagen por defecto de ${pokemon.name}`}
                width="200"
                height="200"
                >
                </img>
            </div>
            <div className='card__info'>
                <h3>{`Número en la Pokedex: ${pokemon.id}`}</h3>
                <h4>{`Nombre: ${capitalize(pokemon.name)}`}</h4>
            </div>
        </div>
    )
}

export default Card;