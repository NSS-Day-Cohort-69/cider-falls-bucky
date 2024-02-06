
const parkAddress = "Cider Falls"
const parkEmail = "URL"
const parkNumber = "1-800-cider"



export const getFooter = () => {
    const footerHTML = `
        <footer class="park-info">
            <h2 class="park-address">${parkAddress}</h2>
            <h2 class="park-email">${parkEmail}</h2>
            <h2 class="park-number">${parkNumber}</h2>
        </footer>`
        return footerHTML
    } 