import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import FormCoding from '../component/FormCoding';

describe('Form Coding', () => {
  test('render form coding', () => {
    render(<FormCoding />);
    expect(
      screen.getByText('Pendaftaran Peserta Coding Bootcamp')
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
  });

  test('input form', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole('textbox', { name: /nama/i }), {
      target: { value: 'nama' },
    });

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: { value: 'email@email.com' },
    });

    fireEvent.input(screen.getByRole('spinbutton', {
        name: /no handphone/i,
      }), {
      target: { value: 81234567890 },
    });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue('nama');
    expect(screen.getByLabelText(/Email:/)).toHaveValue('email@email.com');
    expect(screen.getByLabelText(/No Handphone:/)).toHaveValue(81234567890);
  });

  test('submit from', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole('textbox', { name: /nama/i }), {
      target: { value: 'nama' },
    });
    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue('nama');
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const alertSuccess = jest.spyOn(window, 'alert').mockImplementation();

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(alertSuccess).toHaveBeenCalledTimes(1);
  });

  it('error input', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole('textbox', { name: /nama/i }), {
      target: { value: 'nama1-;=' },
    });

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: { value: 'email!email' },
    });

    fireEvent.input(screen.getByRole('spinbutton', {
        name: /no handphone/i,
      }), {
      target: { value: '08888' },
    });

    expect(screen.getByRole('textbox', { name: /nama/i })).toHaveValue('nama1-;=');
    expect(screen.getByRole('textbox', { name: /email/i })).toHaveValue('email!email');
    expect(screen.getByRole('spinbutton', {
        name: /no handphone/i,
      })).toHaveDisplayValue('08888');

    expect(
      screen.getByText('Nama Lengkap Harus Berupa Huruf')
    ).toBeInTheDocument();
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
    expect(screen.getByText('No Handphone Tidak Sesuai')).toBeInTheDocument();
  });

  it('error submit', () => {
    render(<FormCoding />);
    userEvent.selectOptions(screen.getByRole('combobox', { name: /kelas/i }), 'reactjs');

    fireEvent.input(screen.getByRole('textbox', { name: /nama/i }), {
      target: { value: 'nama9-=[]' },
    });

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: { value: 'email@email.com' },
    });

    fireEvent.input(screen.getByRole('spinbutton', {
        name: /no handphone/i,
      }), {
      target: { value: '088888' },
    });

    fireEvent.change(screen.getByRole('radio', { name: /pendidikan/i }));

    fireEvent.click(screen.getByLabelText(/Non IT/), {
      target: { value: 'Non IT' },
    });

    fireEvent.click(screen.getByText('Submit'));

    expect(jest.spyOn(window, 'alert').mockImplementation()).toHaveBeenCalledTimes(1);
  });
});