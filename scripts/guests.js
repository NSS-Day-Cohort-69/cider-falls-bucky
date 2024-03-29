import { getGuests } from "./database.js"


export const guestsList = () => {
    const guests = getGuests()
    let htmlString = `<div class="guests-list"><h2 class="second-header">Guest List</h2>`


    for (const guest of guests) {
        htmlString += `<div class="guest-item" data-guest-area${guest.areaId}>
        <div> Name: ${guest.name} </div>
        </div>
        `
    }
     return htmlString += `</div>`
}