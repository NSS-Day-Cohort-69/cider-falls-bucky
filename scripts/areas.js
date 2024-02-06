import { getAreas, getAreaServices, getServices } from "./database.js"

// Generates HTML for the Areas section of the page
export const areasList = () => {
    const areas = getAreas()
    
    // Initializes the beginning of the String representation of HTML
    let html = `<section class="area-list">`

    // Generates the HTML for each individual Area
    for (const area of areas) {
        html += `<div class="area-card">
        <div class="area-img"><img src="${area.imageURL}"></div>
        <div class="area-title">${area.name}</div>
        <div class="area-services">
            <ul>`

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
                        html += `<li class="service">${service.name}</li>`
                    }
                }
            }
        }
        
        // Adds the closing HTML tags for an individual Area
        html += `</ul></div></div>`
    }

    // Adds the closing HTML tag for the list of Areas
    html += "</section>"

    return html
}

