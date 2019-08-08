import React from 'react';
import * as rtl from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import App from './App';
// import '@testing-library/utils/jest-dom/extend-expect'

it('renders without crashing', () => {
  rtl.render(<App />)
});


