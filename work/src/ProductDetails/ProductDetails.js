import React, { useState,useEffect} from 'react'
import './ProductDetails.css'
import {useLocation} from "react-router-dom";
import Data from '../Data';
import '../images.json';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const ProductDetails = (item) => {
  const loc = useLocation();
  const iD = loc.state.id;
  const data = Data[0].items[iD]
  const [des, setDes] = useState('');
  useEffect(() => {
    const desData = data.content.split('<br/>').map((t) => {
      return (
        <text>
          {t}
          <br />
        </text>
      );
    });
    
    setDes(desData);
  }, [data.content]);

  
  return (
    < div className="productdetails" >
    <div className="prod__title">
      <h2>{ data.title}</h2>
    </div>

    <div className="prod" >
      <div className="prod__left" > 
        <div className="img-box" >
          <img src={data.image} alt={data.title} />
        </div >
      </div>
      <div className="prod__right" >
        <h2>{ data.owner}</h2>
        <h2 > Location: {data.location} </h2>
        <h2 > Area: {data.area} </h2>
        <h2> { data.date}</h2>
      </div >
    </div>
    <div className="prod__content" >
      <h2 > Description </h2>
      <p> {des}</p>
    </div>
  
    <Carousel className="img_gallery_1"
      canAutoPlay={true}
      isAutoPlaying={true}
      hasIndexBoard={false}
      autoPlayInterval	={2500}
      style={{
        backgroundColor: "black",

      }}
    >
        {
          data.images.map((res, index) => {
            return (
              <img className="img_1" key={index} src={res.bannerImg1} alt={index} />
            )
          })
        }
    </Carousel>
   


  </div>
  )
}

export default ProductDetails