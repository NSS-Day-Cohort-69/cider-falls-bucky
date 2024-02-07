import { getServices, getAreaServices, getAreas} from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if(itemClicked.dataset.type === "service"){

            const serviceId = itemClicked.dataset.id

            let areaIds = []
            let areaNamesArray = []

            const areas = getAreas()
            const areaServices = getAreaServices()
            for (const service of areaServices) {
                if (service.id === parseInt(serviceId)) {
                    areaIds.push(service.areaId)
                }
            }

            for (const areaId of areaIds) {
                for(const area of areas) {
                    if(areaId === area.id){
                       areaNamesArray.push(area.name)
                    }
                }
            }

            const areaNames = areaNamesArray.join(" and ")
            window.alert(`${itemClicked.innerText} is available in ${areaNames}`)
        }
    }
)



export const serviceList = () => {
    const services = getServices()

    let HTMLstring = `<div class="service__list">`
for (const service of services) {
    HTMLstring += `<div data-type"service" data-id"${service.id}" class="service">${service.name}</div>  `
    
}
    HTMLstring += `</div>`
    return HTMLstring
}