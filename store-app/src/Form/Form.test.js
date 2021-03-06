import React from "react";
import { screen, render, fireEvent } from '@testing-library/react'
import Form from './form';

describe('when the form is mounted', () => {

    beforeEach(() =>  render(<Form />))

    it('there must be a create product form page', () => {
        const formTitle = screen.queryByRole('heading', { name: /create a product/i })
        expect(formTitle).toBeInTheDocument()
    })

    it('The form must have the following fields: name, size, type (electronic, furniture, clothing)', () => {

        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/size/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/type/i)).toBeInTheDocument()


        expect(screen.queryByText(/electronic/i)).toBeInTheDocument()
        expect(screen.queryByText(/furniture/i)).toBeInTheDocument()
        expect(screen.queryByText(/clothing/i)).toBeInTheDocument()

    })

    it('should exists submit button', () => {
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
    })
})


describe('when the user submits the form without values', () => {
    it('should display validation messages', () => {
        render(<Form />)

        expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/the size is required/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/the type is required/i)).not.toBeInTheDocument()

        fireEvent.click(screen.getByRole('button', { name: /submit/i }))

        expect(screen.queryByText(/the name is required/i)).toBeInTheDocument()
        expect(screen.queryByText(/the size is required/i)).toBeInTheDocument()
        expect(screen.queryByText(/the type is required/i)).toBeInTheDocument()

    })
   
})


    describe('when the user blus an empty fields', () => {
        it('should display a validation error message for the input name', () => {
            render(<Form />)

            expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument()

            fireEvent.blur(screen.getByLabelText(/name/i), { name: 'name', value: ''  })

            expect(screen.queryByText(/the name is required/i)).toBeInTheDocument()

        })

        it('should display a validation error message for the input name', () => {
            render(<Form />)

            expect(screen.queryByText(/the size is required/i)).not.toBeInTheDocument()

            fireEvent.blur(screen.getByLabelText(/size/i), { name:'size', value:'' })

            expect(screen.queryByText(/the size is required/i)).toBeInTheDocument()



        })

    })