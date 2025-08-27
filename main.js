import { navBar } from "./front-end/src/components/navbar/navbar.js";
import { footerIndex } from "./front-end/src/components/footer/footer.js";
import { copyright } from "./front-end/src/components/copyright/copyright.js";

const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

header.appendChild(navBar());

footer.append(
    footerIndex(),
    copyright()
);

document.body.append(
    header,
    main,
    footer
);

