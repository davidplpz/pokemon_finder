import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { capitalize } from "../../utils/string";
import "./Card.scss";
import { CardProps } from "../../types";

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const printType = () => {
    const { types } = pokemon;
    const typesCount = types.length;
    const pluralSuffix = typesCount > 1 ? "s" : "";
    const capitalizedTypes = types.map((type) => capitalize(type));

    return `Tipo${pluralSuffix}: ${capitalizedTypes.join(" | ")}`;
  };

  return (
    <div className="card__container">
      <div className="card__image">
        <img
          src={pokemon.img}
          alt={`imagen por defecto de ${pokemon.name}`}
          width="200"
          height="200"
        ></img>
      </div>
      <div className="card__info">
        <h3>{`Número en la Pokedex: ${pokemon.id}`}</h3>
        <h4>{`Nombre: ${capitalize(pokemon.name)}`}</h4>
        <h4>{printType()}</h4>
        <ReactAudioPlayer src={pokemon.cry} autoPlay={false} controls />
      </div>
    </div>
  );
};

export default Card;
