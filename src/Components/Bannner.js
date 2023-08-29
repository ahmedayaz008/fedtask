import Section from "./Section";
import Cards from "./Cards";
import "../Styles/banner.css"


 const Banner = ({bannerContent,sectionData,cardsData})=>{
    return(
        
            <div className="banner-cont">
            <div>{bannerContent?.id}</div>
            <div>{bannerContent?.id_no}</div>
            <div>{bannerContent?.text}</div>
            <div>{bannerContent?.button}</div>
            <div>{bannerContent?.btn_type}</div>
            <div>{bannerContent?.btn_name}</div>
            <div>{bannerContent?.link}</div>
            <div className="section">
            <Section sectiondata={sectionData} cardsData={cardsData} />
            </div>
        </div>
        
        
    )

}



export default Banner;