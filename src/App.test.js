// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainA title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainA/i);
    expect(titleElement).toBeInTheDocument();
});
