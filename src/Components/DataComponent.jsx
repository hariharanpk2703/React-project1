import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SomeRelated from './SomeRelated';
import { BlogContext } from './BlogContext';
import Trythis from './Trythis';

const DataComponent = () => {
    const { id } = useParams();
    const { value1, } = useContext(BlogContext);
    const { value2, } = useContext(BlogContext);
    const { value3, } = useContext(BlogContext);
    const { value4, } = useContext(BlogContext);
    const { value5, } = useContext(BlogContext);

    const [Tourist] = value1;
    const [Fitness] = value2;
    const [Technology] = value3;
    const [Bollywood] = value4;
    const [Food] = value5;

    const [data, setdata] = useState({
        image: "",
        name: "",
        info: "",
        date: "",
        description: "",
    })

    useEffect(() => {
        Tourist.forEach((view) => {
            if (view.id === id) {
                //  console.log("data-matched");
                setdata({
                    image: view.image,
                    name: view.name,
                    info: view.info,
                    date: view.date,
                    description: view.description,
                })
            }
        });
    },[id,Tourist]);

    useEffect(() => {
        Fitness.forEach((view) => {
            if (view.id === id) {
                // console.log("data-matched");
                setdata({
                    image: view.image,
                    name: view.name,
                    info: view.info,
                    date: view.date,
                    description: view.description,
                })
            }
        });
    },[id,Fitness]);
    useEffect(() => {
        Food.forEach((view) => {
            if (view.id === id) {
                // console.log("data-matched");
                setdata({
                    image: view.image,
                    name: view.name,
                    info: view.info,
                    date: view.date,
                    description: view.description,
                })
            }
        });
    },[id,Food]);
    useEffect(() => {
        Technology.forEach((view) => {
            if (view.id === id) {
                // console.log("data-matched");
                setdata({
                    image: view.image,
                    name: view.name,
                    info: view.info,
                    date: view.date,
                    description: view.description,
                })
            }
        }
      );
    },[id,Technology]);
    useEffect(() => {
        Bollywood.forEach((view) => {
            if (view.id === id) {
                // console.log("data-matched");
                return (
                setdata({
                    image: view.image,
                    name: view.name,
                    info: view.info,
                    date: view.date,
                    description: view.description,
                })
                )
            }
        });
    },[id,Bollywood]);
    return (
        <>
            <div className="Dynamic-component">
                <div>
                    <h1>{data.name}</h1>
                </div>
                <hr />
                <div>
                    <img className='data-image' src={data.image} alt="" />
                </div>
                <div>
                    <p>{data.info}</p>
                    <p>{data.description}</p>
                </div>
                <div>
                    <h3>{data.date}</h3>
                </div>
            </div>
            <div>
                <SomeRelated />
                <Trythis />
            </div>
        </>
    )
}

export default DataComponent;