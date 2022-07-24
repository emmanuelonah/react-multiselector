import { render, fireEvent } from '@testing-library/react';

import { Input } from '..';

describe('<Input/>', () => {
  it('should should render component', () => {
    const utils = render(<Input name="userName" placeholder="Search user" value="Jeremiah Joseph" />);
    const input = utils.getByPlaceholderText(/Search user/i) as HTMLInputElement;
    expect(input.value).toBe('Jeremiah Joseph');

    ///
    utils.rerender(<Input name="userName" placeholder="Search user" />);
    fireEvent.change(input, { target: { value: 'Emmanuel Onah' } });
    expect(input.name).toBe('userName');
    expect(input.value).toBe('Emmanuel Onah');
  });
});
