import { getAreas, getAreaServices, getServices, getGuests } from "./database.js"

// Generates HTML for the Areas section of the page
export const areasList = () => {
    const areas = getAreas()
    
    // Initializes the beginning of the String representation of HTML
    let html = `<section id="area-list">`

    // Generates the HTML for each individual Area
    for (const area of areas) {
        html += `<div class="area-card">
        <div class="area-header">
            <img src="${area.imageURL}">
            <div class="area-title" data-type="area" data-id="${area.id}">${area.name}</div>
        </div>
        <div class="area-services">`

        // Iterates through the Objects from the areaServices Array
        const areaServices = getAreaServices()
        for (const areaService of areaServices) {
            
            // Checks if the areaService Object matches the current area Object
            if (areaService.areaId === area.id) {

                // Iterates through the Objects from the services Array
                const services = getServices()
                for (const service of services) {
                    
                    // Checks if the service Object matches the current areaService Object
                    if (service.id === areaService.serviceId) {
                        
                        //
                        html += `<div class="service" data-type="service" data-id="${service.id}">${service.name}</div>`
                    }
                }
            }
        }
        
        // Adds the closing HTML tags for an individual Area
        html += `</div></div>`
    }

    // Adds the closing HTML tag for the list of Areas
    html += "</section>"

    return html
}

document.addEventListener("click", (clickevent) => {
    let count = 0
    const areaTitle = clickevent.target 
    if (areaTitle.dataset.type == "area") {
        const areaId = parseInt(areaTitle.dataset.id)
        const guests = getGuests()
        for( const guest of guests) {
            if( guest.areaId == areaId) {
                count += 1
            }
        }
        window.alert(`There are ${count} guests in this area`)
    } 
}) 
