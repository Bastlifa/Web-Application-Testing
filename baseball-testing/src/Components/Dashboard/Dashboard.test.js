import React from 'react';
import * as rtl from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import "@testing-library/jest-dom/extend-expect"
import Dashboard from './Dashboard';
import Display from '../Display/Display'
import { fireEvent } from '@testing-library/react';

describe("<Dashboard />", () =>
{
    it('Should render without crashing', () => 
    {
        rtl.render(<Dashboard />)
    })
    
})