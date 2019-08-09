import React from 'react';
import * as rtl from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import "@testing-library/jest-dom/extend-expect"
import App from './App';
import { fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
  rtl.render(<App />)
});

it('Should increase balls by 1 up to 4 on ball click', () =>
{
    const appWrap = rtl.render(<App />)
    const ballBtn = appWrap.getByText("Ball")
    const displayBalls = appWrap.getByTestId("balls")
    fireEvent.click(ballBtn)
    expect(displayBalls).toHaveTextContent("1")
})
