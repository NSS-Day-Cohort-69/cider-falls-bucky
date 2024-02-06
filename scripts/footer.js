
const parkAddress = "Cider Falls"
const parkEmail = "URL"
const parkNumber = "1-800-cider"



export const getFooter = () => {
    const footerHTML = `
        <footer class="park-info">
            <h1 class="park-address">${parkAddress}</h1>
            <h1 class="park-email">${parkEmail}</h1>
            <h1 class="park-number">${parkNumber}</h1>
        </footer>`
        return footerHTML
    } 