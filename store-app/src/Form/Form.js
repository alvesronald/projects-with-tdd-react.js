import React from "react";
import { InputLabel, Select, TextField } from "@material-ui/core";

const inputPropsSelectType = {
    name:'type',
    id:'type'
}

export default function Form() {
    return (
        <>
         <h1>Create a product</h1>
         <form>
             <TextField label="name" id="name" />
             <TextField label="size" id="size" />

             <InputLabel htmlFor="type">Type</InputLabel>
             <Select
                native
                value=""
                inputProps={inputPropsSelectType}             
             >
                 <option value="electronic">Electronic</option>
                 <option value="furniture">Furniture</option>
                 <option value="clothing">Clothing</option>
             </Select>
         </form>
        </>
    )
}

