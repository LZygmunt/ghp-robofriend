import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it( 'should render Counter button component', function () {
  const mockColor = 'violet';

  expect( shallow( <CounterButton color={ mockColor } /> )).toMatchSnapshot();
} );

it( 'should correctly increment state counter', () => {
  const mockColor = 'blue';
  const wrapper = shallow( <CounterButton color={ mockColor } /> );

  wrapper.find( '[id="counter"]' ).simulate( 'click' );
  expect( wrapper.state()).toEqual({ count: 1 });
  wrapper.find( '[id="counter"]' ).simulate( 'click' );
  expect( wrapper.state().count).toEqual( 2 );
  expect( wrapper.props().color).toEqual( 'blue' );
} );
