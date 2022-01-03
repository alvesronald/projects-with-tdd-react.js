import React from 'react'
import {render, screen} from '@testing-library/react'
import {Form} from './Form'

describe('<Form />', () => {
  beforeEach(() => render(<Form />)) // antes de cada teste, execute a funcao
  it('there must be a create product form page', () => {
    expect(
      screen.queryByRole('heading', {name: /create product/i}),
    ).toBeInTheDocument()
  })

  it('should exists the fields: name, size, type(eletronic, furniture, clothing)', () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/size/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument()

    expect(screen.queryByText(/eletronic/i)).toBeInTheDocument()
    expect(screen.queryByText(/furniture/i)).toBeInTheDocument()
    expect(screen.queryByText(/clothing/i)).toBeInTheDocument()
  })
})
