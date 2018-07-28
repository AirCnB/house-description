import React from 'react';
import DescriptionTitle from '../client/component/description-title.jsx';
import DescriptionBody from '../client/component/description-body.jsx';

const props = {
  description: 'description',
  house_type: 'home',
  home_name: 'home',
  image: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/door.png',
  city: 'city',
  host: 'host',
  guest_num: 0,
  bedroom_num: 0,
  bed_num: 0,
  bath_num: 0,
}

const MockFn = jest.fn();
const wrapper1 = shallow(<DescriptionBody info={props} toggleDescription={MockFn} />);
const wrapper2 = shallow(<DescriptionTitle info={props} />);

describe('DescriptionBody', () => {
  it('component renders properly', () => {
    wrapper1.exists();
  });
  it('runs toggleDescription on click', () => {
    wrapper1.find('.showMore').simulate('click');
    expect(MockFn).toHaveBeenCalled();
  });
  it('should have visible class when props.show is true', () => {
    const temp = shallow(<DescriptionBody info={props} show={true} />);
    expect(temp.find('#description').hasClass('visible')).toEqual(true);
  });
  it('should have infoPanel class when props.show is false', () => {
    const temp = shallow(<DescriptionBody info={props} show={false} />);
    expect(temp.find('#description').hasClass('infoPanel')).toEqual(true);
  })
  it('should have proper text when props.show is false', () => {
  	const temp = shallow(<DescriptionBody info={props} show={false} />);
  	expect(temp.find('.showMore').text()).toEqual('Read more about the space ⌄');
  });
  it('should have proper text when props.show is false', () => {
  	const temp = shallow(<DescriptionBody info={props} show={true} />);
  	expect(temp.find('.showMore').text()).toEqual('Hide ⌄');
  });
});