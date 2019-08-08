import React from 'react';
import * as rtl from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import "@testing-library/jest-dom/extend-expect"
import Dashboard from './Dashboard';
import { fireEvent } from '@testing-library/react';

describe("<Dashboard />", () =>
{
    it('Should render without crashing', () => 
    {
        rtl.render(<Dashboard />)
    })
    it('Should increase balls by 1 up to 4 on ball click', () =>
    {
        let atBat = ({hits:0, fouls:0, balls:2, strikes:1})


        const wrapper = rtl.render(<Dashboard atBat={atBat} setAtBat={_ => ++atBat.balls} />)
        const ballBtn = wrapper.getByText("Ball")
        fireEvent.click(ballBtn)
        expect(atBat.balls === 3)
    })
})