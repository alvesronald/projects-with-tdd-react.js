import React from 'react'
import {render, screen} from '@testing-library/react'
import {Form} from './Form'

describe('<Form />', () => {
  it('there must be a create product form page', () => {
    render(<Form />)

    expect(
      screen.queryByRole('heading', {name: /create product/i}),
    ).toBeInTheDocument()
  })
})
