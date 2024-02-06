import { getHeader } from "./header.js"
import { areasList } from "./areas.js";
import { guestsList } from "./guests.js";
import { getFooter } from "./footer.js";


const mainHTML = document.querySelector("#container")
mainHTML.innerHTML = `${getHeader()}
${areasList()}
${guestsList()}
${getFooter()}`