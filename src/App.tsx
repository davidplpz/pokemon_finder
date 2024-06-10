import { useState } from "react";
import fetchPokemon from "./services/api";
import Spinner from "./components/spinner/Spinner";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import { Pokemon } from "./types";
import Form from "./components/form/Form";
import "./App.scss";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const getPokemon = async (name: string) => {
    setPokemon(null);
    setError(false);
    setIsPending(true);

    try {
      const data = await fetchPokemon(name);
      setPokemon(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="app_container">
      <Header />
      <Form onSubmit={getPokemon} />
      {isPending && <Spinner />}
      {pokemon && <Card pokemon={pokemon} />}
      {error && <span>No se ha encontrado el pokemon</span>}
    </div>
  );
};

export default App;
