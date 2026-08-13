import dark from "./assets/dark.svg"
export const Header = () => {
    return(
        <div>
        <header className="header">
            <div className="logo-name">ASM Global Ventures</div>
            <nav className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </nav>
            <div className="menu">
                <div className="setting">
                    <img style={{width: "20px"}} src={dark} alt="" />
                </div>
                <div className="hambuger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    
                </div>
            </div>
        </header>
        </div>
    )
}