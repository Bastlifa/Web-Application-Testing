import React from 'react';
import * as rtl from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import "@testing-library/jest-dom/extend-expect"
import Display from './Display';

describe("<Display />", () =>
{
    it('Should render without crashing', () => 
    {
        rtl.render(<Display atBat={{hits:0, fouls:0, balls:2, strikes:1}}/>)
    })
    it('Should display the number of balls and strikes', () =>
    {
        let wrapper = rtl.render(<Display atBat={{hits:0, fouls:0, balls:2, strikes:1}} />)
        expect(wrapper.getByTestId("balls")).toHaveTextContent("2")
        expect(wrapper.getByTestId("strikes")).toHaveTextContent("1")
    })
})