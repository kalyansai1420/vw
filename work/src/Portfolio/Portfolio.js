import React, { useState, useRef, useEffect } from 'react';
import Card from'./Card'
import './Portfolio.css'
import { Link } from 'react-router-dom';


const Portfolio = ({list}) => {
    const [loading, setLoading] = useState(false);
    const [portcard, setPortcard] = useState([]);
    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setPortcard(list.items)
            setLoading(false);
        }, 0);
        return () => clearTimeout(timing);
    }, []);

    // console.log(portcard)

     
    return (

        <div className="list">
            <h2 className="port-title"> Portfolio</h2>
            <div className="cards">
                {portcard.map((item,index)=>(
                <div>
                    {index <= 2 ? (<Card key={index}  item={item}/>):null}
                </div>
                ))
                }
            </div>
            <div class="port-btn">
                <Link to="/portfolio" class="btn"> See More</Link>
            </div>
            
        </div>
    )
}

export default Portfolio



 {/* <Carousel breakPoints={breakPoints} 
                    enableAutoPlay
                    autoPlaySpeed={1500} // same time
                    showArrows={false}
            > */}
             {/* </Carousel> */}
