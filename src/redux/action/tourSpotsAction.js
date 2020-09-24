export const TOUR_SPOTS = 'TOUR_SPOTS';
export const ROOM_DESIGNS = 'ROOM_DESIGNS';


export const addToCart = (id, title, details, image) => {
    return { type: TOUR_SPOTS, id ,title, details, image}
}


export const removeFromCart = (id, title, image) => {
    return { type: ROOM_DESIGNS, id, title, image }
}