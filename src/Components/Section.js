import Cards from "./Cards"
import "../Styles/section.css"

const Section = ({cardsData,sectionData})=>{
    return(
        <div className="section-cont">
            <div>{sectionData?.id}</div>
            <div>{sectionData?.sec_no}</div>
            <div>{sectionData?.title}</div>
            <div>{sectionData?.cN}</div>
            <div className="cards">
            <Cards cardsData={cardsData}/>
            </div>
        </div>
    )
}

export default Section;