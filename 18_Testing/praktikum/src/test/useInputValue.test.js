import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useInputValue } from '../component/useInputValue';

describe('use input value', () => {
  it('render component', () => {
    const { result } = renderHook(() => useInputValue());
    expect(result.current.onChange).toBeInstanceOf(Function);
  });

  it('use input value for input.target.value', () => {
    const { result } = renderHook(() => useInputValue());
    act(() => {
      result.current.onChange({ target: { value: 'test input' } });
    });

    expect(result.current.value).toBe('test input');
  });

  it('use input value for input.target.innerText', () => {
    const { result } = renderHook(() => useInputValue());
    act(() => {
      result.current.onChange({ target: { innerText: 'test input' } });
    });

    expect(result.current.value).toBe('test input');
  });
});