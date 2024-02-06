/* 
    Define function to generate HTML for guests

        Generate String representing HTML

            Iterate through guests
        
                Add guest name

                Add park area id as state

        Return HTML String
*/

import { getGuestsList } from "./database.js"


export const guestsList = () => {
    const guests = getGuestsList()
    let htmlString = `<div class="guests">`

    for (const guest of guests) {
        htmlString += `<div class="guestList">
        <div Name: ${guest.name} </div>
        <div ${guest.areaId} </div>
        </div>
        `
    }
    htmlString += `</div>`
}