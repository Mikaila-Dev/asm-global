import { useRef } from "react";

export function HeroSection(){
    const mouses = useRef(null);

    function click(){
     
    // alert("hello")
    // mouses.current.style.background = "red";
    }
    function mouse(e){
        const rect = mouses.current.getBoundingClientRect();

        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        mouses.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        // console.log(`Mouse moved `)

    }
    function mousel(){
        mouses.current.style.transform = "translate(0, 0)";
    }
    
    return(
        <div className="hero">
        <h1 style={{color: "#ffb01e"}}>Charge. Connect. Refresh.</h1>
        <p style={{color: "white"}}>Fast phone charging, airtime & data, quality accessories, Kannywood and Bollywood movies, plus refreshing drinks - all under one roof.</p>

        <div className="hero-buttons">
            <div  className="all-in-one">
            <button onMouseLeave={mousel} onMouseMove={mouse} ref={mouses}  onClick={click} className="all-in-one-button">Shop Now</button>
            <button className="second-display">Shop Now</button>
            </div>
        </div>
        </div>
    )
}
//  onMouseOver={mouse(e)}