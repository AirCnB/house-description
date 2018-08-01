import React from 'react';
import Cancellations from '../client/component/cancellations/cancellations.jsx';

describe('Cancellations', () => {
  it('should render component properly', () => {
    const wrapper = shallow(<Cancellations />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('runs function on click', () => {
  	const mockFn = jest.fn();
    const wrapper = shallow(<Cancellations toggleCancellation={mockFn} />)
    wrapper.find('.readMore').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
  it('should have class visible when props.showCancellation is true', () => {
    const wrapper = shallow(<Cancellations showCancellation={true} />)
    expect(wrapper.find('#cancellation').hasClass('visible')).toEqual(true);
  });
  it('should have class hidden when props.showCancellation is false', () => {
    const wrapper = shallow(<Cancellations showCancellation={false} />)
    expect(wrapper.find('#cancellation').hasClass('hidden')).toEqual(true);
  });
  it('should have proper text when props.showCancellation is true', () => {
    const wrapper = shallow(<Cancellations showCancellation={true} />)
    expect(wrapper.find('.readMore').text()).toEqual('Hide policies ⌄');
  })
  it('should have proper text when props.showCancellation is false', () => {
    const wrapper = shallow(<Cancellations showCancellation={false} />)
    expect(wrapper.find('.readMore').text()).toEqual('Read more about the policy ⌄');
  })
});