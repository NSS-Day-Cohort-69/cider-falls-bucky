
const parkName = "Cider Falls"
const logoURL = "URL"



export const getHeader = () => {
    const headerHTML = `
        <header class="header">
            <img class="logo" src="${logoURL}" alt="Park Logo">
            <h1 class="park-name" >${parkName} State Park </h1>
        </header>`
        return headerHTML
    } 
