import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null
}

//pushing information into the data layer

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action)=>{
        state.origin = action.payload;
    },
    setDestination: (state, action)=>{
        state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action)=>{
        state.travelTimeInformation = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions


//pulling data out of the data layer with selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;


export default navSlice.reducer