/* 
    Define function to generate HTML for header

        Generate HTML for header

            Add park logo
        
            Add name of state park

        Return HTML for header
*/
const parkName = "Cider Falls Park"
const logoURL = "URL"



const getHeader = () => {
    const headerHTML = `
        <header>
            <img src="${logoURL}" alt="Park Logo">
            <h1>${parkName} State Park </h1>
        </header>`
        return headerHTML
    } 
