import RamKrishnaHari from "./RamKrishnaHari";
import "./commonpagelayout.css"

export default function CommonPageLayout({children}){
    return(
    <div className="commonpagelayout-container">
        <RamKrishnaHari />
        {children}
        <RamKrishnaHari />        
    </div>)
}