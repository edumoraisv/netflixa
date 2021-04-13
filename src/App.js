import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App"> 
      {/*<Row title="NETFLIX ORIGINALS" fetchUrl='./data/netflixOriginals.json'/>
      <Row title="TOP TRENDING" fetchUrl='./data/topTrending.json'/>
      */}
      <Nav/>
      <Banner/>
      <Row 
        title="NETFLIX ORIGINALS" 
        //isLargeRow={true} //same as below
        isLargeRow 
        fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="TOP TRENDING" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="DOCUMENTARY MOVIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
