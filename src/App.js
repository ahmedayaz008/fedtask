import './App.css';
import Cards from "../src/Components/Cards"
import {data} from "./Data"
import Section from './Components/Section';
import Bannner from './Components/Bannner';



function App() {
  const bannerData = data[0];
  const sectionData  = data[1];
  const cardsData = data[2];

  function getCardsData(index) {

    if (index === 0) {
        return cardsData.slice(0, 5);
    } else if (index === 1) {
        return cardsData.slice(5, 10);
    } else if (index === 2) {
        return cardsData.slice(10, 16);
    } else {
        return [];
    }
}

const getSectionData  = (index)=>{
  return sectionData[index]
}


  return (
   
    <div className="App">
       
      
      
        {bannerData.map((ban,index)=>(
          <Bannner SectionData={getSectionData(index)} bannerContent={ban} cardsData={getCardsData(index)}/>
        ))}
        
        

    </div>
  );
}

export default App;
