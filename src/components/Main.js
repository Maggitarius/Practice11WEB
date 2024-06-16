import React from 'react';
import Card from './Card';
import mainImage from '../assets/ef1bccdfe2c413125585225dbba92c15.png';
import image1 from '../assets/2be9a2760699e5747645da6b8600d540.png';
import image2 from '../assets/acdad88e2aa5e240a7be3f9a9ca25fbc.png';
import image3 from '../assets/58376d51e4da9532636413f1a33f13bf.png';

const Main = () => {
  return (
    <main className="debil">
      <div className="content">
        <div className="bebra">
          <p>СОЛЕНЬЯ</p>
          <img src={mainImage} alt="netu.loh"/>
        </div>
        <aside className="aside">
          <Card imgSrc={image1} altText="netu.loh" title="Овощи маринованные" />
          <Card imgSrc={image2} altText="netu.loh" title="Капусточка" />
          <Card imgSrc={image3} altText="netu.loh" title="Лисичички" />
        </aside>
      </div>
      <div className="slidermain">
        <div className="slidernotmain"></div>
      </div>
    </main>
  );
}

export default Main;
