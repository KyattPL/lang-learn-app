import { act, render, waitFor } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/dom";
import AddCard from "./AddCard";
import { fetchAddCard } from "../utils/fetchAddCard.js";

jest.mock("../utils/fetchAddCard.js");

test('renders AddCard ', () => {
   render(<AddCard />);
});

test('test AddCard change language', async () => {
   render(<AddCard />);
   const dropdown = await screen.getByTestId('testLangDropdown');
   act(() => {
      fireEvent.change(dropdown, { target: { value: "Norwegian" } });
   });
   await waitFor(() => expect(screen.getByTestId('testNorwegianAddAdjForm')).toBeInTheDocument());
});

test('test AddCard change part of speech', async () => {
   render(<AddCard />);
   const dropdown = await screen.getByTestId('testSpeechDropdown');
   act(() => {
      fireEvent.change(screen.getByTestId('testLangDropdown'), { target: { value: "Norwegian" } });
      fireEvent.change(dropdown, { target: { value: "Verb" } });
   });
   await waitFor(() => expect(screen.getByTestId('testNorwegianAddVerbForm')).toBeInTheDocument());
});

test('renders AddCardModal after form was filled in', async () => {

   fetchAddCard.mockResolvedValue('hund');

   render(<AddCard />);
   const dropdown = await screen.getByTestId('testSpeechDropdown');

   act(() => {
      fireEvent.change(screen.getByTestId('testLangDropdown'), { target: { value: "Norwegian" } });
      fireEvent.change(dropdown, { target: { value: "Noun" } });
   });

   act(() => {
      fireEvent.change(screen.getByTestId('testNorAddNounWordInp'), { target: { value: "hund" } });
      fireEvent.change(screen.getByTestId('testNorAddNounPronInp'), { target: { value: "'hun" } });
      fireEvent.change(screen.getByTestId('testNorAddNounMeanInp'), { target: { value: "Pies taki o" } });
      fireEvent.click(screen.getByTestId('testNorAddNounSubmit'));
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