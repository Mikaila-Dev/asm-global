import { useState } from "react"
import dark from "./assets/dark.svg"
export const Header = () => {
    const [isClickHambuger, setIsClickHambuger] = useState(false);
    const [isClickBar1, setIsClickBar1] = useState(false)
    const [isClickBar2, setIsClickBar2] = useState(false)
    const [isClickBar3, setIsClickBar3] = useState(false)

    const handleClickHambuger = ()=>{
        setIsClickHambuger(!isClickHambuger)
        setIsClickBar1(!isClickBar1)
        setIsClickBar2(!isClickBar2)
        setIsClickBar3(!isClickBar3)
    }

    return(
        <div>
        <header className="header">
            <div className="logo-name">ASM Global Ventures</div>
            <nav className={!isClickHambuger ? "nav-links" : "show"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </nav>
            <div className="menu">
                <div className="setting">
                    <img style={{width: "20px"}} src={dark} alt="" />
                </div>
                <div onClick={handleClickHambuger} className="hambuger">
                    <span className={!isClickBar1 ? "bar" : "bar-style1"}></span>
                    <span className={!isClickBar2 ? "bar" : "bar-style2"}></span>
                    <span className={!isClickBar3 ? "bar" : "bar-style3"}></span>
                    
                </div>
                {/* <button onClick={(() => console.log("Clicked"))}>Click</button> */}
            </div>
        </header>
        </div>
    )
}