import React from "react";
import { useContext } from "react";
import styles from "./Cards.module.css";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { infoContext } from "../../../Page";

const Cards = ({ loading, pokemon, infoPokemon }) => {
  // const loading = useContext(infoContext);
  // const pokeData = useContext(infoContext);

  const next = useNavigate(false);

  function showDetails() {
    next("details/about");
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : ( 
        pokemon.map((item) => {
          return (
            <>
              <div>
                <div className={styles.allCards} key={item.id} >
                  <img src={item.sprites.front_default} alt="" />
                  <h2>{item.name}</h2>
                  <button onClick={showDetails}><h3 onClick={()=>infoPokemon(item)}>About</h3></button>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Cards;
