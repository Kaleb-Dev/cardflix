import React from "react"
import Logo from "../../assets/img/logo_header_menu.png"
import MenuCss from "./menu.css"
import Button from "../../components/Button"

//import ButtonLink from "./ButtonLink"

function Menu_header () {
    return (
        <nav className="menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="cardflix_logo"></img>
            </a>
            <Button as= "a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu_header // Exporta o componente menu