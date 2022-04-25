import React from "react";
import { screen, render } from '@testing-library/react'
import Form from './form';




describe('when the form is mounted', () => {

    beforeEach(() =>  render(<Form />))

    it('there must be a create product form page', () => {
        const formTitle = screen.queryByRole('heading', { name: /create a product/i })
        expect(formTitle).toBeInTheDocument()
    })

    it('The form must have the following fields: name, size, type (electronic, furniture, clothing) and a submit button.', () => {

        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/size/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/type/i)).toBeInTheDocument()


        expect(screen.queryByText(/electronic/i)).toBeInTheDocument()
        expect(screen.queryByText(/furniture/i)).toBeInTheDocument()
        expect(screen.queryByText(/clothing/i)).toBeInTheDocument()


    })

})