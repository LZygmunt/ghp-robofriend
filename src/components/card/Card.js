import React from 'react';

const Card = ({ roboData }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${ roboData.id }?200x200`} alt="robots"/>
      <div>
        <h2>{ roboData.name }</h2>
        <p>{ roboData.email }</p>
      </div>
    </div>
  );
};

export default Card;
