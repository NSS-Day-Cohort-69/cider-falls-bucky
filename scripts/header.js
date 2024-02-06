
const parkName = "Cider Falls"
const logoURL = "URL"



export const getHeader = () => {
    const headerHTML = `
        <header>
            <img src="${logoURL}" alt="Park Logo">
            <h1>${parkName} State Park </h1>
        </header>`
        return headerHTML
    } 
