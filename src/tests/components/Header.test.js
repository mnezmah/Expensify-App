import React from 'react';
import { shallow, configure } from 'enzyme';
<<<<<<< HEAD
import Header from '../../components/Header';
=======
import { Header } from '../../components/Header';
>>>>>>> 314442f1bb91add33cd0a720d0a80d9dd71895d8
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={ () => {}}/>);
  expect(wrapper).toMatchSnapshot();
});


test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header starLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});



