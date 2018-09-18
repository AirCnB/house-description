import React from 'react';
import Amenities from '../client/component/amenities/amenities.jsx';
import Popup from '../client/component/popup/popup.jsx';

const props = {
  amenities: [
    {one: 'one', two: "https://s3-us-west-1.amazonaws.com/front-end-capstone/if_37_1710847.svg"},
    {three: 'three', four: "https://s3-us-west-1.amazonaws.com/front-end-capstone/if_37_1710847.svg"},
    {five: 'five', six: "https://s3-us-west-1.amazonaws.com/front-end-capstone/if_37_1710847.svg"}
    ]
}


const mockFn = jest.fn();
const wrapper = shallow(<Amenities info={props} togglePopup={mockFn} />);


describe('Amenities', () => {
  it('should render component properly', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render the proper amount of amenities', () => {
    const div = wrapper.find('.icon');
    expect(div).toHaveLength(props.amenities.length);
  });
  it('runs function on click', () => {
    wrapper.find('.showAll').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
  it('should render Popup modal when props.showModal is true', () => {
    const shallowWrapper = shallow(<Amenities info={props} togglePopup={mockFn} showModal={true} />);
    expect(shallowWrapper.find(Popup)).toHaveLength(1);
  });
  it('should not render Popup modal when props.showModal is false', () => {
    const shallowWrapper = shallow(<Amenities info={props} togglePopup={mockFn} showModal={false} />);
    expect(wrapper.find(Popup)).toHaveLength(0);
  });
});