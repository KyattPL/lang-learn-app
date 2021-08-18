import React from 'react';
import { render } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/dom';
import App from './App';

test('renders app', () => {
  render(<App />);
});

test('loads SearchCard.jsx', async () => {
  render(<App />);
  const searchCardButton = await screen.findByText('Lookup word');
  fireEvent.click(searchCardButton);
  const languagePrepend = await screen.findByText('Word:');
  expect(languagePrepend).toBeInTheDocument();
});

test('loads AddCard.jsx', async () => {
  render(<App />);
  const addCardButton = await screen.findByText('Add Card');
  fireEvent.click(addCardButton);
  const partOfSpeechPrepend = await screen.findByText('Part of speech:');
  expect(partOfSpeechPrepend).toBeInTheDocument();
});