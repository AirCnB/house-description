import React from 'react';
import App from '../client/component/app.jsx';
import Highlight from '../client/component/highlights/highlight.jsx';

const prop = { 
  host: 'host',
  highlight: {
    highlightTitle: 'superhost',
    isSuperhost: 1,
    description: 'great host',
    highlightImage: 'screenshot.png',
  },
}

const wrapper = shallow(<Highlight info={prop}/>);
const instance = wrapper.instance();

describe("Highlight", () => {
  it("should have state set properly", () => {
    expect(wrapper.state().feedback).toEqual(false);
  });
  it("should render one '.highlight'", () => {
    expect(wrapper.find('.highlight')).toHaveLength(1);
  });
  it("should toggle feedback state properly", () => {
  	expect(wrapper.state().feedback).toEqual(false);
  	instance.toggleFeedback();
  	expect(wrapper.state().feedback).toEqual(true);
  });
});