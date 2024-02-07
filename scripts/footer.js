
const parkAddress = "1234 Cider Street, Nashville TN"
const parkEmail = "buckycider@ciderfalls.com"
const parkNumber = "1-800-CIDER"



export const getFooter = () => {
    const footerHTML = `
        <footer class="park-info">
            <div class="park-address">Address: ${parkAddress}</div>
            <div class="park-email">E-Mail: ${parkEmail}</div>
            <div class="park-number">Phone Number:${parkNumber}</div>
        </footer>`
        return footerHTML
    } 