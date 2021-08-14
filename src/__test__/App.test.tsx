import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';

import App from '../app/App';

describe('Normal render and click', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Letters game!/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Normal render and click', () => {
    const oAppRendered = mount(<App />);

    const lBoxes = oAppRendered.find('.box-item');

    const oClear = oAppRendered.find('#btn-clear');

    expect(lBoxes).not.toBeNull();
    expect(oClear).not.toBeNull();

    lBoxes.at(5).simulate('click');
    lBoxes.at(6).simulate('click');
    oClear.simulate('click');
  });
});
