import React from 'react';
import './styles/CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function CartWidget(){  
  
  return (
    <>
    <div className ="icon-cart">
      <ShoppingCartIcon />
      <div className ="icon-display">0</div>
    </div>
    </>
  )
}
