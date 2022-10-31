import { Button, ButtonGroup, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react'

export default function ItemCount() {

    const[contar, setCont] = useState(1);
    const decreser =() =>{
        setCont(contar - 1);
    }

    const incrementar =() =>{
        setCont(contar + 1);
    }
return (
    <>
    <div>
        <ButtonGroup variant="contained" arial-label="outlined primary buttom group">
            <Button onClick={decreser}>-</Button>
            <TextField id="outlined-basic" label="Cantidad" variant="outlined"><span> {contar} </span></TextField>
            <Button onClick={incrementar}>+</Button>
        </ButtonGroup>
        <Button>Agregar al carrito</Button>
    </div>
    </>
)
}
