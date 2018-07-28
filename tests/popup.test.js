import React from 'react';
import Popup from '../client/component/popup.jsx';

const props = {
  amenities_basics: ['one', 'two', 'three'],
  amenities_info: [['one'], ['two'], ['three']],
  not_included: ['one', 'two', 'three']
}

const mockFn = jest.fn();
const wrapper = shallow(<Popup togglePopup={mockFn} info={props} />);
const instance = wrapper.instance();


describe('Popup', () => {
  it('runs function on exit button click', () => {
   wrapper.find('button').simulate('click');
   expect(mockFn).toHaveBeenCalled();
  })
  it('runs function on backdrop click', () => {
  	wrapper.find('.backdrop').simulate('click');
  	expect(mockFn).toHaveBeenCalled();
  })
  it('renders all headers within modal', () => {
    const div = wrapper.find('.header');
    expect(div).toHaveLength(props.amenities_info.length + 2);
  });
});
