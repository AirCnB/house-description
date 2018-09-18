import React from 'react';
import App from '../client/component/app.jsx';


const wrapper = shallow(<App />);
const instance = wrapper.instance();

describe('<App />', () => {
  it('renders main App', () => {
  	expect(wrapper).toMatchSnapshot();
  });
  it('renders all components', () => {
  	expect(wrapper.children()).toHaveLength(7);
  })
})

describe('App states', () => {
  it('properly sets showModal state', () => {
  	expect(wrapper.state().showModal).toEqual(false);
    instance.togglePopup();
    expect(wrapper.state().showModal).toEqual(true);
  });
  it('properly sets showDescription state', () => {
  	expect(wrapper.state().showDescription).toEqual(false);
    instance.toggleDescription();
    expect(wrapper.state().showDescription).toEqual(true);
  });
  it('properly sets showRules state', () => {
  	expect(wrapper.state().showRules).toEqual(false);
    instance.toggleRules();
    expect(wrapper.state().showRules).toEqual(true);
  });
  it('properly sets showCancellation state', () => {
  	expect(wrapper.state().showCancellation).toEqual(false);
    instance.toggleCancellation();
    expect(wrapper.state().showCancellation).toEqual(true);
  });
});
	







