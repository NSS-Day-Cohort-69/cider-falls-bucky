/* 
    Define function to generate HTML for guests

        Generate String representing HTML

            Iterate through guests
        
                Add guest name

                Add park area id as state

        Return HTML String
*/

import { getGuests } from "./database.js"


export const guestsList = () => {
    const guests = getGuests()
    let htmlString = `<div class="guests-list">`

    for (const guest of guests) {
        htmlString += `<div class="guest-item">
        <div Name: ${guest.name} </div>
        <div ${guest.areaId} </div>
        </div>
        `
    }
     return htmlString += `</div>`
}