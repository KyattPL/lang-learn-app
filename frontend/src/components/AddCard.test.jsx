import { act, render, waitFor } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/dom";
import AddCard from "./AddCard";

import { fetchAddCard } from "../utils/fetchAddCard.js";
import { fetchCheckAddPassword } from '../utils/fetchCheckAddPassword.js';

jest.mock("../utils/fetchAddCard.js");
jest.mock("../utils/fetchCheckAddPassword.js");

test('renders AddCard ', () => {
   render(<AddCard />);
});

test('test AddCard change language', async () => {
   render(<AddCard />);
   const dropdown = await screen.getByTestId('testLangDropdown');
   act(() => {
      fireEvent.change(dropdown, { target: { value: "Norwegian" } });
   });
   await waitFor(() => expect(screen.getByTestId('testAddWordNorwegianAdjective')).toBeInTheDocument());
});

test('test AddCard change part of speech', async () => {
   render(<AddCard />);
   const dropdown = await screen.getByTestId('testSpeechDropdown');
   act(() => {
      fireEvent.change(screen.getByTestId('testLangDropdown'), { target: { value: "Norwegian" } });
      fireEvent.change(dropdown, { target: { value: "Verb" } });
   });
   await waitFor(() => expect(screen.getByTestId('testAddWordNorwegianVerb')).toBeInTheDocument());
});

test('renders AddCardModal after form was filled in', async () => {

   fetchAddCard.mockResolvedValue('hund');
   fetchCheckAddPassword.mockResolvedValue('OK');

   render(<AddCard />);
   const dropdown = await screen.getByTestId('testSpeechDropdown');

   act(() => {
      fireEvent.change(screen.getByTestId('testLangDropdown'), { target: { value: "Norwegian" } });
      fireEvent.change(dropdown, { target: { value: "Noun" } });
   });

   act(() => {
      fireEvent.change(screen.getByTestId('testNorwegianNounWordInp'), { target: { value: "hund" } });
      fireEvent.change(screen.getByTestId('testNorwegianNounPronInp'), { target: { value: "'hun" } });
      fireEvent.change(screen.getByTestId('testNorwegianNounMeanInp'), { target: { value: "Pies taki o" } });
      fireEvent.click(screen.getByTestId('testNorwegianNounSubmit'));
   });

   await waitFor(() => expect(screen.getByTestId('testAddCardModal')).toBeInTheDocument());

   act(() => {
      fireEvent.click(screen.getByTestId('testCloseAddModal'));
   });

   await waitFor(() => expect(screen.queryByTestId('testAddCardModal')).toBe(null));
});

test('renders AddCardModal on smaller screens', async () => {
   render(<AddCard />);
   global.innerWidth = 420;

   act(() => {
      fireEvent.resize(window);
   });

   const column = screen.getByTestId('testAddCardFormCol');
   expect(column).toHaveClass('col-12');
});