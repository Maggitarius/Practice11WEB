import React from 'react';

const Card = ({ imgSrc, altText, title }) => {
  return (
    <div className="kard">
      <img src={imgSrc} alt={altText} />
      <div className="subtitle">
        <p>{title}</p>
        <button>→</button>
      </div>
    </div>
  );
}

export default Card;
