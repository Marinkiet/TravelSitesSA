import logo from './logo.svg';
import './App.css';
import AttractionSite from './Components/AttractionSite';
import Main from './Components/main';
import data from "./data";

function App() {

  const ASite = data.map(site=>{
    return(
      <AttractionSite
      key = {site.key}
      title= {site.title}
      location= {site.location}
      googleMapsUrl= {site.googleMapsUrl}
      startDate= {site.startDate}
      endDate= {site.endDate}
      description= {site.description}
      imageUrl= {site.imageUrl}
    />
    )
  })
  return (
    <div className="App">
      <Main/>
      {ASite}
    </div>
  );
}

export default App;
