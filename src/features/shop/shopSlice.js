import { createSlice } from "@reduxjs/toolkit";

// data
import allProducts from "../../data/products.json"
import allCategories from "../../data/categories.json"

// REDUX STEP 1: CREATE SLICE (INITIAL STATE AND REDUCERS)
export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    value: {
      categorySelected: '',
      productIdSelected: null,
      products: allProducts,
      filteredProductsOfCategory: [],
      categories: allCategories
    }
  }, 
  reducers: {
    setCategorySelected: (state, action) => {
      const category = action.payload
      state.value.filteredProductsOfCategory = allProducts.filter(p => p.category === category)
      state.value.categorySelected = category
    },
    setProductIdSelected: (state, action) => {
      state.value.productIdSelected = action.payload
    }
  }
})

// export actions
export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer