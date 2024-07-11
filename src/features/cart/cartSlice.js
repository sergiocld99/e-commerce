import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
      user: '',
      updatedAt: Date.now().toLocaleString(),
      total: null,
      items: []
    }
  },
  reducers: {
    addItem: (state, action) => {
      // chequear que el producto ya no se haya añadido
      const repeated = state.value.items.find(item => {
        return item.id === action.payload.id
      })

      // aux
      let itemsUpdated = state.value.items

      if (repeated) {
        // si esta repetido, sumar cantidad
        itemsUpdated = itemsUpdated.map(item => {
          if (item.id === action.payload.id){
            item.quantity += action.payload.quantity;
            return item
          }

          // no modificar si no es el producto
          return item
        })
      } else {
        // agregar nuevo producto al carrito
        itemsUpdated.push(action.payload)
      }

      // recalcular total
      const total = state.value.items.reduce((acc, curr) => {
        return acc += curr.price * curr.quantity
      }, 0)

      console.log("total is", total)

      // actualizar total y timestamp en state
      state.value = {
        ...state.value, 
        items: itemsUpdated,
        total, 
        updatedAt: new Date().toLocaleString()
      }
    }, 
    removeItem: (state, action) => {
      // dejar todos los productos que no sean el indicado
      state.value.items.filter(item => item.id !== action.payload.id)
    }
  }
})

// export actions
export const {addItem ,removeItem} = cartSlice.actions

export default cartSlice.reducer