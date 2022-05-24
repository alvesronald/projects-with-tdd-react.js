import React, { useState } from "react";
import { Button, InputLabel, Select, TextField } from "@material-ui/core";



export default function Form() {

    const [formErrors, setFormErrors] = useState({
        name:'',
        size:'',
        type:'',
    })


    const handleSubmit = event => {
        event.preventDefault()

        const { name, size, type } = event.target.elements;


        if(!name.value){
            setFormErrors((prevState) => ({ ...prevState, name:'the name is required' }))
        }
        
        if(!size.value){
            setFormErrors((prevState) => ({ ...prevState, size:'the size is required' }))
        }

        if(!type.value){
            setFormErrors((prevState) => ({ ...prevState, type:'the type is required' }))
        }

    }



    return (
        <>
         <h1>Create a product</h1>
         <form onSubmit={handleSubmit}>
             <TextField label="name" id="name" helperText={formErrors.name} />
             <TextField label="size" id="size" helperText={formErrors.size} />

             <InputLabel htmlFor="type">Type</InputLabel>
             <Select
                native
                value=""
                inputProps={{
                    name:'type',
                    id:'type'
                }}             
             >
                 <option aria-label="none" value=""/>
                 <option value="electronic">Electronic</option>
                 <option value="furniture">Furniture</option>
                 <option value="clothing">Clothing</option>
             </Select>
             
             {formErrors.type && <p>{formErrors.type}</p>}

             <Button type="submit">Submit</Button>
         </form>
        </>
    )
}

