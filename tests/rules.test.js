import React from 'react';
import Rules from '../client/component/rules.jsx';

const props = {
  rules: ['one', 'two', 'three'],
  rules2: 'rules',
}

const mockFn = jest.fn();
const wrapper = shallow(<Rules info={props} toggleRules={mockFn} />);

describe('Rules', () => {
  it('renders the component properly', () => {
  	expect(wrapper.exists()).toEqual(true);
  });
  it('runs function when clicked', () => {
    wrapper.find('.showMore').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
  it('should have class visible when showRules is true', () => {
    const shallowWrapper = shallow(<Rules info={props} showRules={true} />);
    const div = shallowWrapper.find('#rules');
    expect(div.hasClass('visible')).toEqual(true);
  });
  it('should have class infoPanel when showRules is false', () => {
    const shallowWrapper = shallow(<Rules info={props} showRules={false} />);
    const div = shallowWrapper.find('#rules');
    expect(div.hasClass('infoPanel')).toEqual(true);
  });
  it('should render proper amount of rules', () => {
    const div = wrapper.find('.rule');
    expect(div).toHaveLength(props.rules.length);
  });
});