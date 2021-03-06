import { useContext } from "react";
import { BlogContext } from "./BlogContext";
import { Link } from "react-router-dom";

const Bollywood = () => {
  const { value4 } = useContext(BlogContext)
  const [Bollywood] = value4;
  console.log("Fitness")

  return (
    <>
    <div className="tourism-cont">
      <div className='main-cont'>
        <div className='top-heading'>
          <div><h2>Bollywood</h2></div>
          <div className='toppost-border'></div>
        </div>
        {
          Bollywood.map((moviedetails) =>
            <div className='design'>
              <div >
                <Link to={moviedetails.id}><img className="images" src={moviedetails.image} alt="" /></Link>
              </div>
              <div className='content-data'>
                <div >
                  <h2>{moviedetails.name}</h2>
                </div>

                <div>
                  <p>{moviedetails.info}</p>
                </div>
                <div>
                  <h2>{moviedetails.date}</h2>
                </div>
              </div>
            </div>

          )
        }

      </div>

      <div className='main-cont1'>
        <div className='top-heading'>
          <div><h2>Top-Posts</h2></div>
          <div className='toppost-border'></div>
        </div>
        {
          Bollywood.map((moviedetails) =>
            <div className='design1'>
              <div >
                <Link to={moviedetails.id}><img className="images1" src={moviedetails.image} alt="" /></Link>
              </div>
              <div className='content-data'>
                <div >
                  <h3>{moviedetails.name}</h3>
                </div>

                <div>
                  <h5>{moviedetails.date}</h5>
                </div>
              </div>
            </div>

          )
        }
      </div>
    </div>
    </>)
}
export default Bollywood;