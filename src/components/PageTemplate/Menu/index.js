import React from "react"
import { Link } from 'react-router-dom'
// import Logo from "https://i.imgur.com/jeNnMPu.png"
import MenuCss from "./menu.css"
import Button from "./Button/style"

//import ButtonLink from "./ButtonLink"

function Menu_header () {
    return (
        <nav className="menu">
            <Link to="/">
                <img className="Logo" src='https://i.imgur.com/jeNnMPu.png' alt="cardflix_logo"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu_header // Exporta o componente menu