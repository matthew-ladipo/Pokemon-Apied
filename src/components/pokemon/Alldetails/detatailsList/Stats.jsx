import React from "react";
import style from "../all-styles/Staststy.module.css";
import ProgressBar from "./ProgressBar";

const Stats = ({ data }) => {

  
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className={style.stats}>
            <h1>{data.name}</h1>
            <h3>Stats:</h3>
            <div className={style.result}>
              <div>
                {data.stats.map((poke) => {
                  return (
                    <>
                      <p className={style.parag}>
                        <div className={style.stat}>
                          <h4>{poke.stat.name}</h4>
                        </div>
                        <h4 className={style.data}>{poke.base_stat}</h4>
                        <ProgressBar />
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Stats;
