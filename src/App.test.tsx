import React from 'react';
import { render, screen ,fireEvent,waitFor } from '@testing-library/react';
import App from './App';

test('get by text', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Expense Traker/i);
  expect(linkElement).toBeInTheDocument();
});

test('get by label', () => {
  render(<App />);
  const inputNode = screen.getByLabelText('Amount')
  const inputNode1 = screen.getByLabelText('Descrption')
  expect(inputNode).toBeInTheDocument();
  expect(inputNode1).toBeInTheDocument();
});

test('get by ID', () => {
  render(<App />);
  const element = screen.getByTestId('custom-element')
  expect(element).toBeInTheDocument();
});

test('Add click',async () => {
  const {getByText}= render(<App />);
  expect(screen.getByText(/Add/i)).toBeInTheDocument()
  fireEvent.click(screen.getByText(/Add/i))
  await waitFor(() => {
    expect(screen.getByTestId('custom-element')).toBeInTheDocument();
  });
  expect(screen.getByTestId('custom-element')).toBeInTheDocument();
});

