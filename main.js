import { navBar } from "./front-end/src/components/navbar/navbar.js";

const header = document.createElement("header");
header.appendChild(navBar());
document.body.appendChild(header);