import { importStyle } from "../../../utils/importCss.js";
import { buttonLink } from "../buttonlink/buttonlink.js";

importStyle("/front-end/src/components/footer/footer.css");

const footerLeft = document.createElement("div");
footerLeft.className = "footer-left";

const footerCenter = document.createElement("div");
footerCenter.className = "footer-center";

const footerRight = document.createElement("div");
footerRight.className = "footer-right";

const logo = document.createElement("img");
logo.src = "https://placehold.co/90"
logo.alt = "ControlCash";
logo.className = "logo-nav";

const termos = buttonLink("Termos de uso", () => {
    document.getElementById("termos").scrollIntoView({ behavior: "smooth" });
});
const privacidade = buttonLink("Política de privacidade", () => {
    document.getElementById("privacidade").scrollIntoView({ behavior: "smooth" });
});
const empresa = buttonLink("Empresa", () => {
    document.getElementById("empresa").scrollIntoView({ behavior: "smooth" });
});
const feedback = buttonLink("Feedback", () => {
    document.getElementById("controle").scrollIntoView({ behavior: "smooth" });
});

const contato = document.createElement("h5");
contato.textContent = "Dúvidas? Entre em contato!"

const emailLink = document.createElement("a");
emailLink.href = "mailto:controlcash.cc@gmail.com?subject=Dúvidas e suporte&body=Olá, gostaria de tirar uma dúvida ou preciso de suporte.";
emailLink.textContent = "controlcash.cc@gmail.com";
emailLink.className = "email-link";

export function footerIndex() {
    const footerIndex = document.createElement("div")
    footerIndex.className = "footer";
    footerIndex.id = "footer";

    footerRight.appendChild(logo);
    footerCenter.append(
        termos,
        privacidade,
        empresa,
        feedback
    );
    footerLeft.append(
        contato,
        emailLink
    );

    footerIndex.append(
        footerRight,
        footerCenter,
        footerLeft
    );

    return footerIndex;
}