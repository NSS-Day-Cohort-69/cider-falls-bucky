import { getServices } from "./database.js"

export const serviceList = () => {
    const services = getServices()

    let HTMLstring = `<div class="service__list">`
for (const service of services) {
    HTMLstring = `<div class="service">${service}</div>  `
    
}
    HTMLstring = `</div>`
}