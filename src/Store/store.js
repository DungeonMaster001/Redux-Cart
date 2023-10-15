import {configureStore} from '@reduxjs/toolkit'
import cartsli from '../Slices/cartslice'

export const store = configureStore({
    reducer: {
      cart: cartsli,
    }
  });
  