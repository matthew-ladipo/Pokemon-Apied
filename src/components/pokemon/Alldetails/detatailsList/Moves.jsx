import React from "react";
import style from '../all-styles/MoveStyle.module.css'
const Moves = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className={style.moves}>
            {data.moves.map((items) => {
              return (
                <div className={style.words}>
                  <p>{items.move.name}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Moves;
