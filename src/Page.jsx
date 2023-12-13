import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Details from "./components/pokemon/Details";
import About from "./components/pokemon/Alldetails/detatailsList/About";
import Stats from "./components/pokemon/Alldetails/detatailsList/Stats";
import Moves from "./components/pokemon/Alldetails/detatailsList/Moves";
import Evolution from "./components/pokemon/Alldetails/detatailsList/Evolution";

const Page = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      console.log(item.url);
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        // state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
            setUrl={setUrl}
            setPokeData={setPokeData}
              next={nextUrl}
              prev={prevUrl}
              pokemon={pokeData}
              loading={loading}
              infoPokemon={(poke) => setPokeDex(poke)}
            />
          }
        />
        <Route
          path="details"
          element={
            <Details data={pokeDex} infoPokemon={(poke) => setPokeDex(poke)} />
          }
        >
          <Route
            path="about"
            element={
              <About data={pokeDex} infoPokemon={(poke) => setPokeDex(poke)} />
            }
          />
          <Route
            path="stats"
            element={
              <Stats data={pokeDex} infoPokemon={(poke) => setPokeDex(poke)} />
            }
          />
          <Route
            path="move"
            element={
              <Moves data={pokeDex} infoPokemon={(poke) => setPokeDex(poke)} />
            }
          />
          <Route
            path="evolution"
            element={
              <Evolution
                data={pokeDex}
                infoPokemon={(poke) => setPokeDex(poke)}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default Page;
