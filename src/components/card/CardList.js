import React from 'react';
import Card from "./Card";

const CardList = ({ robots }) => {
  let robotsArray = robots.map( robot => <Card roboData={ robot } key={ robot.id }/> );
  // throw new Error("ERR!");
  return (
    <div id="cardlist">
      { robotsArray }
    </div>
  );
};

export default CardList;
