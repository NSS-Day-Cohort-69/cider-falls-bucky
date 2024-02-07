import { getHeader } from "./header.js"
import { areasList } from "./areas.js";
import { guestsList } from "./guests.js";
import { getFooter } from "./footer.js";
import { serviceList } from "./services.js";

const mainHTML = document.querySelector("#container")
mainHTML.innerHTML = `${getHeader()}
${serviceList()}
    <div id="main-content">
        ${areasList()}
        ${guestsList()}
    </div>
${getFooter()}`