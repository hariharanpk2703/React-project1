import React, { useContext } from 'react'
import { BlogContext } from './BlogContext'
import { Link } from 'react-router-dom'

const LatestArticles = () => {
    const { value1, value2, value3, value4, value5 } = useContext(BlogContext)
    const [Tourist] = value1;
    const [Fitness] = value2;
    const [Technology] = value3;
    const [Bollywood] = value4;
    const [Food] = value5;
    return (
        <div className='LatestArticles1'>
            <div className='latestarticlesleft'>
                <div className="latestheading">
                    <div><h2>LatestArticles</h2></div>
                    <div className='border-bottoms'></div></div>
                { // eslint-disable-next-line
                    Tourist.map((touristdetails, index) => {
                        if (index >= Tourist.length - 1){
                            return (
                                <div className='design'>
                                    <div >
                                        <Link to={touristdetails.id}><img className="images" src={touristdetails.image} alt="" /></Link>
                                    </div>
                                    <div className='content-data'>
                                        <div >
                                            <h2>{touristdetails.name}</h2>
                                        </div>

                                        <div>
                                            <p>{touristdetails.info}</p>
                                        </div>
                                        <div>
                                            <h2>{touristdetails.date}</h2>
                                        </div>

                                    </div>
                                </div>
                            )}

                    }


                    )

                }
                { // eslint-disable-next-line
                    Fitness.map((Fittdetails, index) => {
                        if (index >= Fitness.length - 1){
                            return (
                                <div className='design'>
                                    <div >
                                        <Link to={Fittdetails.id}><img className="images" src={Fittdetails.image} alt="" /></Link>
                                    </div>
                                    <div className='content-data'>
                                        <div >
                                            <h3>{Fittdetails.name}</h3>
                                        </div>

                                        <div>
                                            <p>{Fittdetails.info}</p>
                                        </div>
                                        <div>
                                            <h2>{Fittdetails.date}</h2>
                                        </div>

                                    </div>
                                </div>
                            )}

                    }


                    )

                }

                { // eslint-disable-next-line
                    Technology.map((techdetails, index) => {
                        if (index >= Technology.length - 1){
                            return (
                                <div className='design' key={techdetails.id}>
                                    <div >
                                        <Link to={techdetails.id}><img className="images" src={techdetails.image} alt="" /></Link>
                                    </div>
                                    <div className='content-data'>
                                        <div >
                                            <h3>{techdetails.name}</h3>
                                        </div>

                                        <div>
                                            <p>{techdetails.info}</p>
                                        </div>
                                        <div>
                                            <h2>{techdetails.date}</h2>
                                        </div>

                                    </div>
                                </div>
                            )
                            }
                    }


                    )

                }
                { // eslint-disable-next-line
                    Food.map((fooddetails, index) => {
                        if (index >= Food.length - 1){
                            return (
                                <div className='design' key={fooddetails.id}>
                                    <div >
                                        <Link to={fooddetails.id}><img className="images" src={fooddetails.image} alt="" /></Link>
                                    </div>
                                    <div className='content-data'>
                                        <div >
                                            <h3>{fooddetails.name}</h3>
                                        </div>

                                        <div>
                                            <p>{fooddetails.info}</p>
                                        </div>
                                        <div>
                                            <h2>{fooddetails.date}</h2>
                                        </div>

                                    </div>
                                </div>
                            )
                        }}
                    )
                }

            </div>
            <div className="lastest-articles-right">
                <div className='top-heading'>
                    <div><h2>Top-Posts</h2></div>
                    <div className='toppost-border'></div>
                </div>
                {// eslint-disable-next-line
                    Tourist.map((tourisms, index) => {
                        
                        if (index >= Tourist.length - 1) {
                            return (
                                <div className='design1'key={tourisms.id}>
                                    <div >
                                        <Link to={tourisms.id}><img className="images1" src={tourisms.image} alt="" /></Link>
                                    </div>
                                    <div className='content-data'>
                                        <div >
                                            <h3>{tourisms.name}</h3>
                                        </div>

                                        <div>
                                            <h5>{tourisms.date}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    
                    }
                    )
                }
                {// eslint-disable-next-line
                    Food.map((fooddetails, index) => {
                        if (index >= Tourist.length - 1) {
                            return (
                                <div className='design1' key={fooddetails.id}>
                                    <div >
                                        <Link to={fooddetails.id}><img className="images1" src={fooddetails.image} alt="" /></Link>
                                    </div>
                                    <div className='content-data'>
                                        <div >
                                            <h3>{fooddetails.name}</h3>
                                        </div>

                                        <div>
                                            <h5>{fooddetails.date}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    
                    }
                    )
                }

                {// eslint-disable-next-line
                    Bollywood.map((mvedetails, index) => {
                        if (index >= Tourist.length - 1) {
                            return (
                                <div className='design1' key={mvedetails.id}>
                                    <div >
                                        <Link to={mvedetails.id}><img className="images1" src={mvedetails.image} alt="" /></Link>
                                    </div>
                                    <div className='content-data'>
                                        <div >
                                            <h3>{mvedetails.name}</h3>
                                        </div>

                                        <div>
                                            <h5>{mvedetails.date}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        
                    }
                    )
                }
                {// eslint-disable-next-line
                    Fitness.map((Fittdetails, index) => {
                        if (index >= Fitness.length - 1) {
                            return (
                                <div className='design1' key={Fittdetails.id}>
                                    <div >
                                        <Link to={Fittdetails.id}><img className="images1" src={Fittdetails.image} alt="" /></Link>
                                    </div>
                                    <div className='content-data'>
                                        <div >
                                            <h3>{Fittdetails.name}</h3>
                                        </div>

                                        <div>
                                            <h5>{Fittdetails.date}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    
                    }
                    )
                }
                {// eslint-disable-next-line
                    Technology.map((techdetails, index) => {
                        if (index >= Technology.length - 1) {
                            return (
                                <div className='design1'>
                                    <div >
                                        <Link to={techdetails.id}><img className="images1" src={techdetails.image} alt="" /></Link>
                                    </div>
                                    <div className='content-data'>
                                        <div >
                                            <h3>{techdetails.name}</h3>
                                        </div>

                                        <div>
                                            <h5>{techdetails.date}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        
                    }
                    )
                }
            </div>
        </div>
    )
}

export default LatestArticles;