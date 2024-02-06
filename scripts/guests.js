import { getGuests } from "./database.js"


export const guestsList = () => {
    const guests = getGuests()
    let htmlString = `<div class="guests-list">`

    for (const guest of guests) {
        htmlString += `<div class="guest-item">
        <div> Name: ${guest.name} </div>
        <div> ${guest.areaId} </div>
        </div>
        `
    }
     return htmlString += `</div>`
}