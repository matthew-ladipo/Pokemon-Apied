import { Link,Outlet} from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Details = ({ data, infoPokemon }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <div className="preDetails">
          <div className="details">
            <div className="subdetails">
              <Link to={'/'}>  <FaArrowLeftLong /></Link>
              <div className="pokeImg">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                  alt="imgDetails"
                />
              </div>
              <div className="butns">
                <button >Grass</button>
                <button>poistion</button>
              </div>
            </div>
            <section>
              <div className="button-container">
                <button className="button">
                  <p><Link to='about'>About</Link></p>
                  <p><Link to='stats'>Stats</Link></p>
                  <p><Link to='move'>Moves</Link></p>
                  <p><Link to='evolution'>Evolution</Link></p>
                </button>
              </div>
            </section>
          </div>
          <div className="detailsview">
          <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
