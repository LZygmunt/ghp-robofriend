import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

it( 'expect to render card', () => {
  const mockRobo = {
    email: "email.@mail.com",
    name: "Najmowy",
    id: 3
  };

  expect( shallow( <Card roboData={ mockRobo }/> )).toMatchSnapshot();
});
