import {expect} from 'code';
import React from 'react';
import {mocha, mount, shallow} from 'enzyme';
import spy from 'sinon';
import App from '../src/App';

describe('<App/>', () => {
    it('should show loading by default', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.text()).to.contain('Loading');
    });

    it('shoud have input field',()=>{
        const wrapper = shallow(<App/>);
        expect(wrapper.find('input')).to.have.length(1);
    });



    it('simulates click event',()=>{
        const wrapper = shallow(<App/>);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('button')).to.equal(1);

    });
 })
