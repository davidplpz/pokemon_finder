import { FormEvent, useState } from "react";
import "./Form.css";
import { FormProps } from "../../types";

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
  };

  const onChangeHandler = (query: string) => {
    setQuery(query);
  };

  const onClickRandomHandler = () => {
    const randomPokemon = Math.floor(Math.random() * 1015).toString();
    onSubmit(randomPokemon);
  };

  return (
    <div className="form__container">
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          placeholder="Nombre del pokemon"
          value={query}
          onChange={(e) => onChangeHandler(e.target.value)}
        ></input>
        <button type="submit">Buscar</button>
        <button type="button" onClick={onClickRandomHandler}>
          Aleatorio
        </button>
      </form>
    </div>
  );
};

export default Form;
