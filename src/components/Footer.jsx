import { Container } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <>
    <div style={{display: "flex", justifyContent: "center",alignItems: "center",}}>
        <h1>FOOTER</h1>
    </div>
    <hr></hr>
    <div>
        <Container maxWidth={'lg'} style={{display: "flex", justifyContent: "center",alignItems: "center",}}>
          <h4>Derechos Reservados 2022</h4>
        </Container>
    </div>
    </>
  )
}
