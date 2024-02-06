/* 
    Use .querySelector to get HTML Element, and assign to variable

    Initialize empty String to return later

    Generate HTML Strings

        Generate header

        Generate areas

            Generate services

        Generate guests

        Generate footer

    Inject HTML into HTML Object variable
*/

import { areasList } from "./areas.js";

const mainHTML = document.querySelector("#container")
mainHTML.innerHTML += areasList()