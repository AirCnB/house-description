import React from 'react';
import DescriptionTitle from '../client/component/description/description-title.jsx';
import DescriptionBody from '../client/component/description/description-body.jsx';

const props = {
  description: 'description',
  house_type: 'home',
  home_name: 'home',
  image: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/door.png',
  city: 'city',
  host: 'host',
  titleIcons: [
    {
      label: 5,
      image: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/multiple-users-silhouette.png',
      description: 'guest',
    },
    {
      label: 5,
      image: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/door.png',
      description: 'bedrooms',
    },
    {
      label: 5,
      image: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/double-king-size-bed.png',
      description: 'beds',
    },
    {
      label: 5,
      image: 'https://s3-us-west-1.amazonaws.com/front-end-capstone/bathtub-with-opened-shower.png',
      description: 'baths',
    }
  ],
}

const MockFn = jest.fn();
const wrapper1 = shallow(<DescriptionBody info={props} toggleDescription={MockFn} />);
const wrapper2 = shallow(<DescriptionTitle info={props} />);

describe('DescriptionTitle', () => {
  it('component renders properly', () => {
    wrapper2.exists();
  });
});

describe('DescriptionBody', () => {
  it('component renders properly', () => {
    wrapper1.exists();
  });
  it('runs toggleDescription on click', () => {
    wrapper1.find('.showMore').simulate('click');
    expect(MockFn).toHaveBeenCalled();
  });
  it('should have visible class when props.showDescription is true', () => {
    const temp = shallow(<DescriptionBody info={props} showDescription={true} />);
    expect(temp.find('#description').hasClass('visible')).toEqual(true);
  });
  it('should have hidden class when props.showDescription is false', () => {
    const temp = shallow(<DescriptionBody info={props} showDescription={false} />);
    expect(temp.find('#description').hasClass('hidden')).toEqual(true);
  })
  it('should have proper text when props.showDescription is false', () => {
  	const temp = shallow(<DescriptionBody info={props} showDescription={false} />);
  	expect(temp.find('.showMore').text()).toEqual('Read more about the space ⌄');
  });
  it('should have proper text when props.showDescription is false', () => {
  	const temp = shallow(<DescriptionBody info={props} showDescription={true} />);
  	expect(temp.find('.showMore').text()).toEqual('Hide ⌄');
  });
});