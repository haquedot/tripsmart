import img1 from '../../public/images/destination2.jpg';

export const upcomingTrips = [
    {
        id: 1,
        title: 'Kerala',
        country: 'India',
        image: img1,
        date: '2022-06-20',
        weather: {
            temp: 30,
            condition: 'Sunny',
            wind: 10,
            humidity: 50,
        },
        source: "Hyderabad",
        destination: "Kerala",
        distance: 1000,
        nearHotelsFromAirport: [
            {
                name: 'Hotel 1',
                distance: 10,
                rating: 4,
                image: img1,
            },
            {
                name: 'Hotel 2',
                distance: 20,
                rating: 3,
                image: img1,
            },
            {
                name: 'Hotel 3',
                distance: 30,
                rating: 5,
                image: img1,
            },
        ],
        nearRestaurantsFromHotel: [
            {
                name: 'Restaurant 1',
                distance: 10,
                rating: 4,
                image: img1,
            },
            {
                name: 'Restaurant 2',
                distance: 20,
                rating: 3,
                image: img1,
            },
            {
                name: 'Restaurant 3',
                distance: 30,
                rating: 5,
                image: img1,
            },
        ],
        nearTouristPlacesFromHotel: [
            {
                name: 'Tourist Place 1',
                distance: 10,
                rating: 4,
                image: img1,
            },
            {
                name: 'Tourist Place 2',
                distance: 20,
                rating: 3,
                image: img1,
            },
            {
                name: 'Tourist Place 3',
                distance: 30,
                rating: 5,
                image: img1,
            },
        ],
        nearPharmaciesFromHotel: [
            {
                name: 'Pharmacy 1',
                distance: 10,
                rating: 4,
                image: img1,
            },
            {
                name: 'Pharmacy 2',
                distance: 20,
                rating: 3,
                image: img1,
            },
            {
                name: 'Pharmacy 3',
                distance: 30,
                rating: 5,
                image: img1,
            },
        ],


    },
    {
        id: 2,
        title: 'Agra',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
    {
        id: 3,
        title: 'Kerala',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
    {
        id: 4,
        title: 'Chennai',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
    {
        id: 5,
        title: 'Kerala',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
    {
        id: 6,
        title: 'Eiffel Tower Tour',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
];