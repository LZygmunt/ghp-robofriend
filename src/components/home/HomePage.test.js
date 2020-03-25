import React from "react";
import { shallow } from "enzyme";
import HomePage from "./HomePage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    handleChange: jest.fn(),
    requestRobots: jest.fn(),
    searchField: '',
    robots: [],
    isPending: false,
    error: ''
  };

  wrapper = shallow( <HomePage { ...mockProps } /> );
});

it( 'should render HomePage component', () => {
  expect( wrapper ).toMatchSnapshot();
} );

it( 'should filters robots correctly ', () => {
  expect()
} );
