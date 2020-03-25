import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

describe( 'CardList component', () => {
  it( 'should render this component', () => {
    const mockRobots = [
      {
        id: 1,
        name: "Skill dat",
        email: "mail@for.mailing"
      }, {
        id: 2,
        name: "Skill nope",
        email: "mocky@for.mailing"
      }, {
        id: 3,
        name: "Awesome dat",
        email: "dummy@for.mailing"
      }, {
        id: 4,
        name: "Nope klyk",
        email: "klyk@for.mailing"
      }
    ];

    expect( shallow( <CardList robots={ mockRobots }/> )).toMatchSnapshot();
  } );
} );
