import "./RamKrishnaHari.css";
import { useState, useEffect } from "react";
function RamKrishnaHari(){
    const [repeatedText, setRepeatedText] = useState("|| Ram Krishna Hari ");
    useEffect(()=>{
        const text = "|| Ram Krishna Hari ";
        const containerWidth = window.innerWidth;

        // Measure text width using Canvas API
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        context.font = "1rem sans-serif";  // Match your CSS font

        const textWidth = context.measureText(text).width;
        const repeatCount = Math.floor(containerWidth / textWidth);
        const repeated = Array.from({ length: repeatCount }, () => text).join("");
        setRepeatedText(repeated);
    },[])

    return(
        <div className="ram">
        {repeatedText}
        </div>
    );
}
export default RamKrishnaHari;