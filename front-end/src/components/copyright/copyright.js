import { importStyle } from "../../../utils/importCss.js";

importStyle("/front-end/src/components/copyright/copyright.css");

export function copyright() {
    const copyright = document.createElement("a");
    copyright.textContent = "© 2025 Control Cash - Todos os direitos reservados.";
    copyright.className = "copyright";

    return copyright;
}