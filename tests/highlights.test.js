import React from 'react';
// import { shallow, mount, render } from 'enzyme';
import App from '../client/component/app.jsx';
import Highlights from '../client/component/highlights.jsx';

const prop = { 
  host: 'host',
  highlight1: 'highlight1',
  highlight2: 'highlight2',
  highlight3: 'highlight3'
}

const wrapper = shallow(<Highlights info={prop}/>);
const instance = wrapper.instance();

describe("Highlights", () => {
  it("should have state set properly", () => {
    expect(wrapper.state().one).toEqual(false);
    expect(wrapper.state().two).toEqual(false);
    expect(wrapper.state().three).toEqual(false);
  });
  it("should render three '.highlight'", () => {
    expect(wrapper.find('.highlight')).toHaveLength(3);
  });
  it("should toggle state one properly", () => {
  	expect(wrapper.state().one).toEqual(false);
  	instance.handleToggleOne();
  	expect(wrapper.state().one).toEqual(true);
  });
  it("should toggle state two properly", () => {
  	expect(wrapper.state().two).toEqual(false);
  	instance.handleToggleTwo();
  	expect(wrapper.state().two).toEqual(true);
  });
  it("should toggle state three properly", () => {
  	expect(wrapper.state().three).toEqual(false);
  	instance.handleToggleThree();
  	expect(wrapper.state().three).toEqual(true);
  });
});