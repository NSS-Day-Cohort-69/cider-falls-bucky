
const parkAddress = "Cider Falls"
const parkEmail = "URL"
const parkNumber = "1-800-cider"



export const getFooter = () => {
    const footerHTML = `
        <footer>
            <h1>${parkAddress}</h1>
            <h1>${parkEmail}</h1>
            <h1>${parkNumber}</h1>
        </footer>`
        return footerHTML
    } 