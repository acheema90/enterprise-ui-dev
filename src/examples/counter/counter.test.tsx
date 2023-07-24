import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
});

test('it should increment when the "Increment" button is pressed', async () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
  const incrementBtn = screen.getByRole('button', { name: 'Increment' });
  await userEvent.click(incrementBtn);
  expect(currentCount).toHaveTextContent('1');
});
