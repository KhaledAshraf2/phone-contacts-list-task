import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Contacts from './contactsList.jsx'

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));
    

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(1);
    });
  
    it('should render the Contatcs Component', () => {
      expect(wrapper.containsMatchingElement(<Contacts />)).toEqual(true);
    });
});