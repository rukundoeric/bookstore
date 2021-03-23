import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import App from '../../components/App';

afterEach(cleanup);

it('Should match snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
