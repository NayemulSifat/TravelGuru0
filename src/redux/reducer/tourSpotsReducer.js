const {TOUR_SPOTS, ROOM_DESIGNS} = require('../action/tourSpotsAction');
const tourSpotsData = '../../fakeData/tourspots/Index.js'
const roomDesinsData = '../../fakeData/roomdesign//Index.js'


const initialState = {
    cart: [],
    products: [
        tourSpotsData,
        roomDesinsData

    ]
}


export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case TOUR_SPOTS:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem]
            return { ...state, cart: newCart }
        case ROOM_DESIGNS:
            const id = action.id;
            const reamingCart = state.cart.filter(item => item.cartId !== id)
            return { ...state, cart: reamingCart }

        default:
            return state;
    }

}