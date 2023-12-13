import React from "react";
import style from "../all-styles/About.module.css";

const About = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
        <div className={style.about}>
          <h1>{data.name}</h1>
          <p>
            Experience - <span> {data.base_experience}</span>
          </p>

          <div>
            <section className={style.meter}>
              <p>
                {data.height}m (2'3") <br /> <span>height</span>
              </p>
              <p>
                {data.weight} kg (15.21 lbs)
                <br /> <span>weight</span>
              </p>
            </section>
            <div className={style.ability}>
            <h3>Abilities :</h3>
            {data.abilities.map((poke) => {
              return (
                <div className={style.abilities}>
                  {" "}
                  <div className={style.lists}>
                    <p>{poke.ability.name}</p>
                  </div>
                </div>
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

export default About;
