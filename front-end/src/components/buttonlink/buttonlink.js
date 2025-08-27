import { importStyle } from "../../../utils/importCss.js";

importStyle("/front-end/src/components/buttonlink/buttonlink.css");

export function buttonLink(text, event) {
    const buttonLink = document.createElement("button");
    buttonLink.className = "button-link";
    buttonLink.textContent = text;
    buttonLink.addEventListener("click", event);
    
    return buttonLink;
}