import { importStyle } from "../../../utils/importCss.js";
import { buttonLink } from "../buttonlink/buttonlink.js";

importStyle("/front-end/src/components/navbar/navbar.css");

const navLeft = document.createElement("div");
navLeft.className = "nav-left";

const navRight = document.createElement("div");
navRight.className = "nav-right";

const logo = document.createElement("img");
logo.src = "https://placehold.co/90"
logo.alt = "ControlCash";
logo.className = "logo-nav";

const controle = buttonLink("CONTROLE", () => {
    document.getElementById("controle").scrollIntoView({ behavior: "smooth" });
});
const seguranca = buttonLink("SEGURANÇA", () => {
    document.getElementById("seguranca").scrollIntoView({ behavior: "smooth" });
});
const empresa = buttonLink("EMPRESA", () => {
    document.getElementById("empresa").scrollIntoView({ behavior: "smooth" });
});
const sobre = buttonLink("SOBRE NÓS", () => {
    document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
});
const acessar = buttonLink("ACESSAR PLATAFORMA", () => {
    document.getElementById("acessar").scrollIntoView({ behavior: "smooth" });
});

export function navBar() {
    const nav = document.createElement("nav");
    nav.className = "nav";
    nav.id = "nav";

    navLeft.append(logo);
    navRight.append(
        controle,
        seguranca,
        empresa,
        sobre,
        acessar
    );
    
    nav.append(
        navLeft,
        navRight
    );

    return nav;
}
