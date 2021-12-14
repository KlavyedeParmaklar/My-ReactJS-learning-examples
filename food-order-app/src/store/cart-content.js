import React from 'react'

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => { },
    remoteItem: (id) => { }
})

export default CartContext