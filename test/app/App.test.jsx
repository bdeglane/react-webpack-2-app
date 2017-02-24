import React from 'react';
import App from '../../src/app/App.jsx';

import {assert} from 'chai';
import {shallow} from 'enzyme';

describe('<App hello="world"/>', () => {
    describe('valid rendered', () => {
        const props = 'test';
        const app = shallow(<App hello={props}/>);
        describe('should render App react class', () => {
            it('should have <h1/>', () => {
                assert.equal(app.find('h1').length, 1);
                const sentence = app.find('h1').children().nodes;
                assert.equal(`${sentence.join('')}`, `Hello ${props}!`);
            });
            it('should have rendered props', () => {
                assert.equal(app.contains(props), true);
            });
        });
    });
});