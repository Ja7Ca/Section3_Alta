import React from "react";
import axios from "axios";
import { render, screen, act, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../component/Search";

jest.mock('axios');

describe('Search Component', () => {
  //test fetch API
  it('fetch api', async () => {
    render(<Search />);
    const stories = [
      { storyID: '1', title: 'Test1' },
      { storyID: '2', title: 'Test2' },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });

    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLength(2);
  });

  it('fail fetch api', async () => {
    render(<Search />);

    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });

    const errMsg = await screen.findByText('Ada yang error ...');
    expect(errMsg).toBeInTheDocument();
  });

  it('user input search box', async () => {
    render(<Search />);

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { value: '' } })
    );

    await act(async () => {
      await fireEvent.input(screen.getByRole('textbox'), {
        target: {
          value: 'Input1',
        },
      });

      const inputTxt = await screen.findByPlaceholderText(/Tulis Cerita/);

      expect(inputTxt).toHaveValue('Input1');
    });
  });
});
