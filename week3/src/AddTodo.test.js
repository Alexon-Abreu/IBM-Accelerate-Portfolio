import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});




 test('test that App component doesn\'t render dupicate Task', () => {
  render(<App />);

  const inputTask = screen.getByRole('textbox', { name: /Add New Item/i });
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', { name: /Add/i });
  fireEvent.change(inputTask, { target: { value: "Dup Test" } });
  fireEvent.change(inputDate, { target: { value: "06/30/2022" } });
  fireEvent.click(element);
  fireEvent.change(inputTask, { target: { value: "DupTest" } });
  fireEvent.change(inputDate, { target: { value: "06/30/2024" } });
  const check = screen.getAllByText(/Test/i)
  expect(check.length).toBe(1);

 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);

  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', { name: /Add/i });
  fireEvent.change(inputDate, { target: { value: "06/27/2023" } });
  fireEvent.click(element);
  const check = screen.getByText(/You have no todo's left/i);
  expect(check).toBeInTheDocument();

 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);

  const inputTask = screen.getByRole('textbox', { name: /Add New Item/i });
  const element = screen.getByRole('button', { name: /Add/i });
  fireEvent.change(inputTask, { target: { value: "noDateTest" } });
  fireEvent.click(element);
  const check = screen.getByText(/You have no todo's left/i);
  expect(check).toBeInTheDocument();


 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);

  const inputTask = screen.getByRole('textbox', { name: /Add New Item/i });
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', { name: /Add/i });
  fireEvent.change(inputTask, { target: { value: "checkTest" } });
  fireEvent.change(inputDate, { target: { value: "06/27/2023" } });
  fireEvent.click(element);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  const check = screen.getByText(/You have no todo's left/i);
  expect(check).toBeInTheDocument();

 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);

  const inputTask = screen.getByRole('textbox', { name: /Add New Item/i })
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy")
  const element = screen.getByRole('button', { name: /Add/i });
  fireEvent.change(inputTask, { target: { value: "coltest" } })
  fireEvent.change(inputDate, { target: { value: "05/30/2023" } })
  fireEvent.click(element)
  fireEvent.change(inputTask, { target: { value: "Workout" } })
  fireEvent.change(inputDate, { target: { value: "03/30/2022" } })
  fireEvent.click(element)
  const historyCheck = screen.getByTestId(/coltest/i).style.background
  const progCheck = screen.getByTestId(/Workout/i).style.background
  expect(progCheck === historyCheck).toBe(false);

 });
