import React from 'react';
import * as rtl from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import "@testing-library/jest-dom/extend-expect"
import Display from './Display';

describe("<Display />", () =>
{
    it('Should render without crashing', () => 
    {
        rtl.render(<Display />)
    })
    it('Should display the number of balls and strikes', () =>
    {
        let wrapper = rtl.render(<Display balls={2} strikes={1} />)
        expect(wrapper.getByTestId("balls")).toHaveTextContent("2")
        expect(wrapper.getByTestId("strikes")).toHaveTextContent("2")
    })
})