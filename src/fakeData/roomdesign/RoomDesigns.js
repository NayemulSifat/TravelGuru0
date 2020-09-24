let roomDesigns = [
    {
        id: 546,
        title: "Light bright airy stylish apt & safe peaceful stay",
        room: "4 guests   2 bedrooms   2 beds   2 baths",
        facility1: "Wif Air conditioning Kitchen",
        facility2: "Cancellation fexibility availiable",
        rating: "4.9 (20)",
        price: "$34/night",
        totalPrice: "$167 total",
        img: "https://i.ibb.co/L0bK20N/Rectangle-26.png"
    },
    {
        id: 547,
        title: "Apartment in Lost Panorama",
        room: "4 guests   2 bedrooms   2 beds   2 baths",
        facility1: "Wif Air conditioning Kitchen",
        facility2: "Cancellation fexibility availiable",
        rating: "4.8 (20)",
        price: "$52/night",
        totalPrice: "$167 total",
        img: "https://i.ibb.co/zG31dpS/Rectangle-27.png"
    },
    {
        id: 548,
        title: "AR Lounge & Pool (r&r + b&b)",
        room: "4 guests   2 bedrooms   2 beds   2 baths",
        facility1: "Wif Air conditioning Kitchen",
        facility2: "Cancellation fexibility availiable",
        rating: "4.9 (25)",
        price: "$44/night",
        totalPrice: "$167 total",
        img: "https://i.ibb.co/XY6h2yK/Rectangle-28.png"
    }
];
const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(roomDesigns);

export default roomDesigns;
