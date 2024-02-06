
const parkName = "Cider Falls"
const logoURL = "../assets/cider-falls-logo.png"



export const getHeader = () => {
    const headerHTML = `
        <header>
            <img src="${logoURL}" alt="Park Logo">
            <h1>${parkName} State Park </h1>
        </header>`
        return headerHTML
    } 
