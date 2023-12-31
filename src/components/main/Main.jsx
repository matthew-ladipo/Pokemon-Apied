import React from "react";
import headImg from "../../image/imagehead.png";
import styles from "./MainStyle.module.css";
import Cards from "./cards/Cards";

const Main = ({
  loading,
  pokemon,
  infoPokemon,
  next,
  prev,
  setUrl,
  setPokeData,
}) => {
  return (
    <>
      <div className={styles.container}>
        <img src={headImg} alt="icon" />
      </div>
      <div className={styles.butn}>
        {prev && (
          <button
            style={{ position: "fixed" }}
           
            onClick={() => {
              setPokeData([]);
              setUrl(prev);
            }}
          >
            Prev
          </button>
        )} 
        {next && ( 
          <button
            style={{ position: "fixed" }}
            className={styles.prev}
            onClick={() => {
              setPokeData([]);
              setUrl(next);
            }}
          >
            Next
          </button>
        )} 
      </div>
      <div className={styles.pre}>
        <div className={styles.repeat}>
          <Cards
            pokemon={pokemon}
            loading={loading}
            infoPokemon={infoPokemon}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
