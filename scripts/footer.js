
const parkAddress = "1234 Cider Street, Nashville TN"
const parkEmail = "buckycider@ciderfalls.com"
const parkNumber = "1-800-CIDER"



export const getFooter = () => {
    const footerHTML = `
        <footer class="park-info">
            <div class="park-address"><b>Address:</b> <i>${parkAddress}</i></div>
            <div class="park-email"><b>E-Mail:</b> <i>${parkEmail}</i></div>
            <div class="park-number"><b>Phone Number:</b> <i>${parkNumber}</i></div>
        </footer>`
        return footerHTML
    }