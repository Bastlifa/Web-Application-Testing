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
    fireEvent.click(ballBtn)
    expect(displayBalls).toHaveTextContent("2")
    fireEvent.click(ballBtn)
    expect(displayBalls).toHaveTextContent("3")
    fireEvent.click(ballBtn)
    expect(displayBalls).toHaveTextContent("0")
    expect(appWrap.getByTestId("fouls")).toHaveTextContent("0")
    expect(appWrap.getByTestId("strikes")).toHaveTextContent("0")
})
it('Should increase fouls by 1 up to 4 on foul click', () =>
{
    const appWrap = rtl.render(<App />)
    const foulBtn = appWrap.getByText("Foul")
    const displayFouls = appWrap.getByTestId("fouls")
    fireEvent.click(foulBtn)
    expect(displayFouls).toHaveTextContent("1")
    fireEvent.click(foulBtn)
    expect(displayFouls).toHaveTextContent("2")
    fireEvent.click(foulBtn)
    expect(displayFouls).toHaveTextContent("3")
    fireEvent.click(foulBtn)
    expect(displayFouls).toHaveTextContent("0")
    expect(appWrap.getByTestId("strikes")).toHaveTextContent("0")
    expect(appWrap.getByTestId("balls")).toHaveTextContent("0")
})
it('Should increase fouls by 1 and strikes by 1, unless strikes are at 2', () =>
{
    const appWrap = rtl.render(<App />)
    const foulBtn = appWrap.getByText("Foul")
    const displayFouls = appWrap.getByTestId("fouls")
    fireEvent.click(foulBtn)
    expect(displayFouls).toHaveTextContent("1")
    expect(appWrap.getByTestId("strikes")).toHaveTextContent("1")
    fireEvent.click(foulBtn)
    expect(displayFouls).toHaveTextContent("2")
    expect(appWrap.getByTestId("strikes")).toHaveTextContent("2")
    fireEvent.click(foulBtn)
    expect(displayFouls).toHaveTextContent("3")
    expect(appWrap.getByTestId("strikes")).toHaveTextContent("2")
})
it('Should increase strikes by 1 up to 3 on strike click', () =>
{
    const appWrap = rtl.render(<App />)
    const strikeBtn = appWrap.getByText("Strike")
    const displayStrikes = appWrap.getByTestId("strikes")
    fireEvent.click(strikeBtn)
    expect(displayStrikes).toHaveTextContent("1")
    fireEvent.click(strikeBtn)
    expect(displayStrikes).toHaveTextContent("2")
    fireEvent.click(strikeBtn)
    expect(appWrap.getByTestId("strikes")).toHaveTextContent("0")
    expect(appWrap.getByTestId("balls")).toHaveTextContent("0")
    expect(appWrap.getByTestId("fouls")).toHaveTextContent("0")
})
