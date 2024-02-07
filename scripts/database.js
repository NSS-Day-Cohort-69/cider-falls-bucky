const database = {
    areas: [
        {
            id: 1,
            name: "Chamfort River",
            imageURL: "../assets/chamfort.jpg"

        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            imageURL: "../assets/lostwolf.jpg"

        },
        {
            id: 3,
            name: "Lodge",
            imageURL: "../assets/lodge.jpg"

        },
        {
            id: 4,
            name: "Gander River",
            imageURL: "../assets/ganderriver.jpg"

        },
        {
            id: 5,
            name: "Camp<wbr>grounds",
            imageURL: "../assets/campgrounds.jpg"

        },
        {
            id: 6,
            name: "Pine Bluff Trails",
            imageURL: "../assets/pinebluff.jpg"

        }
    ],
    services: [
        {
            id: 1,
            name: "Rafting"
        },
        {
            id: 2,
            name: "Canoeing"
        },
        {
            id: 3,
            name: "Fishing"
        },
        {
            id: 4,
            name: "Hiking"
        },
        {
            id: 5,
            name: "Picnicking"
        },
        {
            id: 6,
            name: "Rock Climbing"
        },
        {
            id: 7,
            name: "Lodging"
        },
        {
            id: 8,
            name: "Parking"
        },
        {
            id: 9,
            name: "Information"
        },
        {
            id: 10,
            name: "Zip Lines"
        }
    ],
    guests: [
        {
            id: 1,
            name: "Ethan Johnson",
            areaId: 8
        },
        {
            id: 2,
            name: "Sophia Williams",
            areaId: 3
        },
        {
            id: 3,
            name: "Liam Brown",
            areaId: 1
        },
        {
            id: 4,
            name: "Olivia Jones",
            areaId: 5
        },
        {
            id: 5,
            name: "Noah Miller",
            areaId: 6
        },
        {
            id: 6,
            name: "Emma Davis",
            areaId: 2
        },
        {
            id: 7,
            name: "Lucas Wilson",
            areaId: 10
        },
        {
            id: 8,
            name: "Ava Taylor",
            areaId: 4
        },
        {
            id: 9,
            name: "Oliver Marinez",
            areaId: 10
        },
        {
            id: 10,
            name: "Isabella Anderson",
            areaId: 1
        },
        {
            id: 11,
            name: "Mason Thompson",
            areaId: 7
        },
        {
            id: 12,
            name: "Mia Garcia",
            areaId: 8
        },
        {
            id: 13,
            name: "Elijah Rodriguez",
            areaId: 9
        },
        {
            id: 14,
            name: "Charlotte Martinez",
            areaId: 6
        }
    ],
    areaServices: [
        {
            id: 1,
            areaId: 1,
            serviceId: 1
        },
        {
            id: 2,
            areaId: 1,
            serviceId: 2
        },
        {
            id: 3,
            areaId: 1,
            serviceId: 3
        },
        {
            id: 4,
            areaId: 2,
            serviceId: 4
        },
        {
            id: 5,
            areaId: 2,
            serviceId: 5
        },
        {
            id: 6,
            areaId: 2,
            serviceId: 6
        },
        {
            id: 7,
            areaId: 3,
            serviceId: 5
        },
        {
            id: 8,
            areaId: 3,
            serviceId: 7
        },
        {
            id: 9,
            areaId: 3,
            serviceId: 8
        },
        {
            id: 10,
            areaId: 3,
            serviceId: 9
        },
        {
            id: 11,
            areaId: 4,
            serviceId: 3
        },
        {
            id: 12,
            areaId: 4,
            serviceId: 4
        },
        {
            id: 13,
            areaId: 5,
            serviceId: 7
        },
        {
            id: 14,
            areaId: 5,
            serviceId: 8
        },
        {
            id: 15,
            areaId: 5,
            serviceId: 9
        },
        {
            id: 16,
            areaId: 6,
            serviceId: 4
        },
        {
            id: 17,
            areaId: 6,
            serviceId: 5
        },
        {
            id: 18,
            areaId: 6,
            serviceId: 10
        }
    ]
}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getAreaServices = () => {
    return database.areaServices.map(areaServ => ({...areaServ}))
}
