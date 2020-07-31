import React from "react"
import { Link } from 'react-router-dom'
import MenuCss from "./menu.css"
import Button from "./Button/style"

const Logo = "https://i.imgur.com/jeNnMPu.png"


function Menu_header () {
    return (
        <nav className="menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="cardflix_logo"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu_header // Exporta o componente menu