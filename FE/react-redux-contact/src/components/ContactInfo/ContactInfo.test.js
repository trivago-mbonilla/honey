import React from 'react'
import { mount, render, shallow } from 'enzyme';
import ContactInfo from './ContactInfo';

function setUp() {
    const props = {
        contact: {
            id: 1,
            name: 'ester',
            lastName: 'cobo',
            phone: 6565
        },
        onClick: jest.fn()
    };

    // using mount or shallow or render according to what we need/want to test
    // const enzymeWrapper = mount(<ContactInfo {...props} />);
    const enzymeWrapper = shallow(<ContactInfo {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('ContactInfo', () => {
    it('should render self and subcomponents', () => {
        const { props, enzymeWrapper } = setUp();
        expect(enzymeWrapper.find('p').text()).toBe(
            props.contact.name + ' ' + props.contact.lastName + ' ' + props.contact.phone
        );
    });
});